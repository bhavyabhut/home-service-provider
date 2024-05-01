import React from 'react';
import { Card, Tag } from 'antd';
import tagColor from '../../config/consts';

function MainDetails({ data }) {
  return (
    <>
      {data && (
        <Card title='Main Details' className='rounded-lg shadow-md'>
          <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
            <div className='flex items-center'>
              <div className='text-gray-600 mr-2'>Name:</div>
              <div>{data.name}</div>
            </div>
            <div className='flex items-center'>
              <div className='text-gray-600 mr-2'>Description:</div>
              <div>{data.description}</div>
            </div>
            <div className='flex items-center'>
              <div className='text-gray-600 mr-2'>Category/Type:</div>
              <div>{data.typeObj?.name}</div>
            </div>
            <div className='flex items-center'>
              <div className='text-gray-600 mr-2'>Tags:</div>
              <div>
                {data?.tag?.map((prop) => {
                  const num =
                    prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
                  return (
                    <Tag style={{ color: 'black' }} color={tagColor[num % 11]}>
                      {prop}
                    </Tag>
                  );
                })}
              </div>
            </div>
            <div className='flex items-center'>
              <div className='text-gray-600 mr-2'>Experience:</div>
              <div>{data.experience}</div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}

export default MainDetails;
