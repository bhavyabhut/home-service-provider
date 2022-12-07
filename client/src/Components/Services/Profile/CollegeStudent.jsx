import React from 'react';
import { Card, Row, Tag } from 'antd';
import tagColor from '../../../config/consts';

function CollegeStudent({ data }) {
  return (
    <Card>
      <Row className='customRow'>
        <span className='text-dark'>Experience:</span>
        <span>{data?.experiance}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Total Customer Served:</span>
        <span>{data?.customers_served}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Rating:</span>
        <span>⭐️ ⭐️ ⭐️ ⭐️</span>
      </Row>

      <Row className='customRow'>
        <span className='text-dark'>Feedback:</span>
        <span>Best in area</span>
      </Row>
    </Card>
  );
}

export default CollegeStudent;
