import React from 'react';
import { Card, Row, Tag } from 'antd';
import tagColor from '../../../config/consts';

function MainDetails({ data }) {
  return (
    <Card>
      <Row className='customRow'>
        <span className='text-dark'>Name:</span>
        <span>{data?.name}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Foundation Year:</span>
        <span>{data?.year_founded}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Type of college:</span>
        <span>{data?.type_of_college}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Courses:</span>
        <span>
          {data?.courses?.split(',').map((prop) => {
            const num = prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
            return (
              <Tag style={{ color: 'black' }} color={tagColor[num % 11]}>
                {prop}
              </Tag>
            );
          })}
        </span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>No of students:</span>
        <span>{data?.no_of_student}</span>
      </Row>
    </Card>
  );
}

export default MainDetails;
