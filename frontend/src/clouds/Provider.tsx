import React from 'react';

interface ProviderProps {
  provider: string,
  selectedProvider: string,
  selectProvider: (provider: string) => void
}

const Provider: React.FC<ProviderProps> = ({provider, selectedProvider, selectProvider}) => {
  const handleClick = () => selectProvider(provider);
  const buttonClass = provider === selectedProvider ? 'btn btn-success' : 'btn btn-outline-primary';
  return(
    <button
      type="button"
      className={buttonClass}
      onClick={handleClick}>
        {provider}
    </button>
  );
};

export default Provider;