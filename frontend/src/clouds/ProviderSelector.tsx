import React from 'react';
import Provider from './Provider';

interface ProviderSelectorProps {
  providers: string[],
  selectedProvider: string,
  selectProvider: (provider: string) => void
}

const ProviderSelector: React.FC<ProviderSelectorProps> = ({providers, selectedProvider, selectProvider}) => {
  return(
    <>
      <div className="text-center">
        <h1>PROVIDERS</h1>
      </div>
      <div className="mt-4 d-flex justify-content-evenly">
        {providers.map(provider =>
          <Provider key={provider}
            provider={provider}
            selectedProvider={selectedProvider}
            selectProvider={selectProvider}
          />
        )}
      </div>
    </>
  );
};

export default ProviderSelector;