import React from 'react';

export interface Cloud {
  cloud_description: string,
  cloud_name: string,
  geo_latitude: number,
  geo_longitude: number,
  geo_region: string
}

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
          <div key={cloud.cloud_name} className="d-flex align-items-center mb-2 pb-2 border-bottom">
            <div className="px-3 py-2 me-2 border">
              <strong>{ idx + 1 }</strong>
            </div>
            <div>
              <strong>{cloud.cloud_name}</strong>
              <div>
                {cloud.cloud_description}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Clouds;