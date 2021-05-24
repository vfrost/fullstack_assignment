import React, { useState, useEffect, useCallback }  from 'react';
import { render } from 'react-dom';

import ProviderSelector from './clouds/ProviderSelector';
import RegionSelector from './clouds/RegionSelector';

import Clouds from './clouds/Clouds';

import { Cloud } from './clouds/CloudItem';

const Application: React.FC = () => {
  const [providers, setProviders] = useState<{[key : string] : string[]}> ({});
  const [provider, setProvider] = useState<string> ('');
  const [region, setRegion] = useState<string> ('');
  const [clouds, setClouds] = useState<Cloud[]> ([]);
  const [loading, setLoading] = useState<boolean> (true);

  useEffect(() => {
    fetch('http://localhost:5000/api/providers')
    .then(res => {
      if (res.ok) return res.json();
      throw res;
      })
    .then(data => setProviders(data))
    .catch(error => {
      console.error(error);
    }).finally(() => setLoading(false));
  }, []);

  const loadClouds = useCallback((provider): void => {
    fetch(`http://localhost:5000/api/clouds/${provider}`)
    .then(res => {
      if (res.ok) return res.json();
      throw res;
      })
    .then(data => setClouds(data))
    .catch(error => {
      console.error(error);
    });
  }, []);

  const getProviders = () => Object.keys(providers);
  const selectProvider = (provider: string) => {
    setRegion('');
    setProvider(provider);
    loadClouds(provider);
  };

  const getRegions = () : string[] => providers[provider] || [];
  const selectRegion = (region: string) => setRegion(region);

  const getClouds = () : Cloud[] => clouds.filter(cloud => cloud.geo_region === region);

  if (!loading) return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <ProviderSelector
            providers={getProviders()}
            selectedProvider={provider}
            selectProvider={selectProvider}
          />
        </div>
        <div className="col"></div>
      </div>

      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <RegionSelector
            regions={getRegions()}
            selectedRegion={region}
            selectRegion={selectRegion}
          />
        </div>
        <div className="col"></div>
      </div>

      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <Clouds
            clouds={getClouds()}
          />
        </div>
        <div className="col"></div>
      </div>
    </>
  );

  return (
    <div className="text-center">
      Loading ...
    </div>
  );
};

render(<Application />, document.getElementById('root'));