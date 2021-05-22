import json
from flask import jsonify

from . import api
from .. import cache


@api.route('/')
def index():
  return ''


@api.route('/get_providers', methods=['GET'])
def get_providers():
  response = json.loads(cache.get('regions_by_provider'))

  return response


@api.route('/get_clouds/<provider>', methods=['GET'])
def get_clouds(provider):
  response = []

  key = f'clouds:{provider}'
  if cache.exists(key):
    response = json.loads(cache.get(key))

  return jsonify(response)