import requests
import traceback


def load_clouds(api_path):
  r = requests.get(api_path)
  if r.status_code == 200:
    result = r.json()
    return convert_data(result)

  return {}, []


def convert_data(data):
  regions_by_provider = {}
  clouds_by_provider = {}

  try:
    for d in data['clouds']:
      provider_name = d['cloud_name'].split('-')[0]
      if provider_name not in regions_by_provider:
        regions_by_provider[provider_name] = set()

      if provider_name not in clouds_by_provider:
        clouds_by_provider[provider_name] = []

      regions_by_provider[provider_name].add(d['geo_region'])
      clouds_by_provider[provider_name].append(d)

  except:
    print(traceback.print_exc())

  return convert_regions(regions_by_provider), clouds_by_provider


def convert_regions(data):
  return dict([k, list(v)] for k,v in data.items())