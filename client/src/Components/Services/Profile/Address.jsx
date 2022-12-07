import React from 'react';
import { Card, Row } from 'antd';

function Address({ data }) {
  return (
    <Card>
      <Row className='customRow'>
        <span className='text-dark'>Street 1:</span>
        <span>{data?.addressObj.street1}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Street 2:</span>
        <span>{data?.addressObj.street2}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>City:</span>
        <span>{data?.addressObj.newCity?.city}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>State:</span>
        <span>{data?.addressObj.newState?.state}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Country:</span>
        <span>{data?.addressObj.newCountry?.country}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>ZipCode :</span>
        <span>{data?.addressObj?.zipcode}</span>
      </Row>
    </Card>
  );
}

export default Address;
