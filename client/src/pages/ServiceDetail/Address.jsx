import React from 'react';
import { Card } from 'antd';

function Address({ data }) {
  return (
    <Card title='Address' className='rounded-lg shadow-md'>
      <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        <div className='flex items-center'>
          <span className='text-gray-600 mr-2'>Street 1:</span>
          <span>{data?.addressObj.street1}</span>
        </div>
        <div className='flex items-center'>
          <span className='text-gray-600 mr-2'>Street 2:</span>
          <span>{data?.addressObj.street2}</span>
        </div>
        <div className='flex items-center'>
          <span className='text-gray-600 mr-2'>City:</span>
          <span>{data?.addressObj.newCity?.city}</span>
        </div>
        <div className='flex items-center'>
          <span className='text-gray-600 mr-2'>State:</span>
          <span>{data?.addressObj.newState?.state}</span>
        </div>
        <div className='flex items-center'>
          <span className='text-gray-600 mr-2'>Country:</span>
          <span>{data?.addressObj.newCountry?.country}</span>
        </div>
        <div className='flex items-center'>
          <span className='text-gray-600 mr-2'>ZipCode:</span>
          <span>{data?.addressObj?.zipcode}</span>
        </div>
      </div>
    </Card>
  );
}

export default Address;
