import os
import json
import redis
import traceback

from flask import Flask

from .utils import load_clouds


cache = redis.Redis(host=os.environ.get('REDIS_URL'),
                    port=os.environ.get('REDIS_PORT')
                  )

def create_app():
  app = Flask(__name__)

  cfg = os.path.join(os.getcwd(), 'config',  'base.py')
  app.config.from_pyfile(cfg)

  from .api import api as api_blueprint
  app.register_blueprint(api_blueprint, url_prefix='/api/')

  api_path = f'{app.config["API_URL"]}{app.config["CLOUDS_PATH"]}'
  regions_by_provider, clouds_by_provider = load_clouds(api_path)

  try:
    cache.set('regions_by_provider', json.dumps(regions_by_provider))

    for k,v in clouds_by_provider.items():
      cache.set(f'clouds:{k}', json.dumps(v))

  except:
    print(traceback.print_exc())

  return app