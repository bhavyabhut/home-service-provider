import React from 'react';
import { Card, Row, Tag } from 'antd';
import tagColor from '../../../config/consts';

function MainDetails({ data }) {
  return (
    <>
      {data ? (
        <Card>
          <Row className='customRow'>
            <span className='text-dark'>Name:</span>
            <span>{data?.name}</span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>Description:</span>
            <span>{data?.description}</span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>Category/Type:</span>
            <span>{data?.typeObj?.name}</span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>Tags:</span>
            <span>
              {data?.tag?.map((prop) => {
                const num =
                  prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
                return (
                  <Tag style={{ color: 'black' }} color={tagColor[num % 11]}>
                    {prop}
                  </Tag>
                );
              })}
            </span>
          </Row>
          <Row className='customRow'>
            <span className='text-dark'>Experience:</span>
            <span>{data?.experiance}</span>
          </Row>
        </Card>
      ) : null}
    </>
  );
}

export default MainDetails;
