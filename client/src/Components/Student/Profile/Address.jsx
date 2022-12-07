import React from 'react';
import { Card, Row } from 'antd';

function Address({ data }) {
  return (
    <Card>
      <Row className='customRow'>
        <span className='text-dark'>Address:</span>
        <span>{data?.address}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>City:</span>
        <span>{data?.city}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>State:</span>
        <span>{data?.state}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Zip:</span>
        <span>{data?.zip}</span>
      </Row>
    </Card>
  );
}

export default Address;
