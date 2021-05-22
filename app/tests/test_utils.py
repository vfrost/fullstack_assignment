from .mocks import CLOUDS
from ..utils import convert_data


def test_convert_data():
  res_providers, res_clouds = convert_data(CLOUDS)
  expected_providers = {'aws': ['north america']}
  expected_clouds = CLOUDS['clouds']

  assert expected_providers == res_providers
  assert expected_clouds == res_clouds['aws']
