import React from 'react';
import Region from './Region';

interface RegionSelectorProps {
  regions: string[],
  selectedRegion: string,
  selectRegion: (region: string) => void
}

const RegionSelector: React.FC<RegionSelectorProps> = ({regions, selectedRegion, selectRegion}) => {
  const hasRegions = regions.length > 0;
  if (!hasRegions) return (<></>);

  return(
    <>
      <div className=" mt-4 pt-2 border-top text-center">
        <h4>Available regions</h4>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {regions.map(region =>
          <Region key={region}
            region={region}
            selectedRegion={selectedRegion}
            selectRegion={selectRegion}
          />
        )}
      </div>
    </>
  );
};

export default RegionSelector;