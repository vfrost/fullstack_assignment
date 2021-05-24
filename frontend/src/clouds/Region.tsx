import React from 'react';

interface RegionProps {
  region: string,
  selectedRegion: string,
  selectRegion: (region: string) => void
}

const Region: React.FC<RegionProps> = ({region, selectedRegion, selectRegion}) => {
  const handleClick = () => selectRegion(region);
  const selectedClass = region === selectedRegion ? 'btn-success' : 'btn-outline-primary';
  const buttonClasses = ['btn', 'btn-sm', 'mx-1', 'my-1', selectedClass];

  return(
    <button
      type="button"
      className={buttonClasses.join(' ')}
      onClick={handleClick}>
        {region}
    </button>
  );
};

export default Region;