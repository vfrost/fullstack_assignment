import React from 'react';

import CloudItem from './CloudItem';
import {Cloud} from './CloudItem';

interface CloudsProps {
  clouds: Cloud[]
}

const Clouds: React.FC<CloudsProps> = ({clouds}) => {
  const hasClouds = clouds.length > 0;
  if (!hasClouds) return (<></>);

  return(
    <>
      <div className="mt-4 pt-2 border-top text-center">
        <h5>Available clouds</h5>
      </div>
      <div className="">
        {clouds.map((cloud, idx) =>
          <CloudItem
            key={cloud.cloud_name}
            idx={idx}
            cloud={cloud}
          />
        )}
      </div>
    </>
  );
};

export default Clouds;