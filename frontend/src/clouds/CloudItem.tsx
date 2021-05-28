import React from 'react';

export interface Cloud {
  cloud_description: string,
  cloud_name: string,
  geo_latitude: number,
  geo_longitude: number,
  geo_region: string
}

interface CloudProps {
  cloud: Cloud,
  idx: number
}

const CloudItem: React.FC<CloudProps> = ({cloud, idx}) => {
  const order = idx + 1;
  return(
    <div className="d-flex align-items-center mb-2 pb-2 border-bottom">
      <div className="px-3 py-2 me-2 border">
        <strong>{ order }</strong>
      </div>
      <div>
        <strong>{cloud.cloud_name}</strong>
        <div>
          {cloud.cloud_description}
        </div>
      </div>
    </div>
  );
};

export default CloudItem;