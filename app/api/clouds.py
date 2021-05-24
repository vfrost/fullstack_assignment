import json
from flask import jsonify
from flask_cors import CORS

from . import api
from .. import cache

CORS(api, resources={r"/api/*": {"origins": "*"}})

@api.route('/')
def index():
  return ''


@api.route('/providers', methods=['GET'])
def get_providers():
  response = json.loads(cache.get('regions_by_provider'))

  return response


@api.route('/clouds/<provider>', methods=['GET'])
def get_clouds(provider):
  response = []

  key = f'clouds:{provider}'
  if cache.exists(key):
    response = json.loads(cache.get(key))

  return jsonify(response)