import json
import redis
import traceback

from flask import Flask, render_template, jsonify
from utils import load_clouds

app = Flask(__name__)

cache = redis.Redis(host='redis', port=6379)
regions_by_provider, clouds_by_provider = load_clouds()
try:
  cache.set('regions_by_provider', json.dumps(regions_by_provider))
  cache.set('clouds_by_provider', json.dumps(clouds_by_provider))
except:
  print(traceback.print_exc())


@app.route('/')
def index():
  return render_template("index.html")


@app.route('/get_providers')
def get_providers():
  response = json.loads(cache.get('regions_by_provider'))
  return jsonify(response)


@app.route('/get_clouds/<provider>')
def get_clouds(provider):
  response = []
  clouds = json.loads(cache.get('clouds_by_provider'))

  if provider in clouds:
    response = clouds[provider]

  return jsonify(response)
