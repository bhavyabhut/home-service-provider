import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import axios from 'axios';
import Spinner from '../Spinner';
import API from '../../api';
import MainDetails from './MainDetails';
import OtherInfo from './OtherInfo';
import Address from './Address';
import OwnerInfo from './OwnerInfo';

const { TabPane } = Tabs;

function ServiceDetail() {
  const [collegeData, setCollegeData] = useState(null);
  const [collegeLoading, setCollegeLoading] = useState(false);
  const { serviceId } = useParams();

  useEffect(() => {
    setCollegeLoading(true);
    axios
      .get(API.getServiceById.replace(':serviceId', serviceId))
      .then((response) => {
        if (response.data.success) {
          setCollegeData(response.data.data[0]);
          setCollegeLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching college data:', error);
        setCollegeLoading(false);
      });
  }, [serviceId]);

  return (
    <div className='container mx-auto py-8'>
      {collegeLoading ? (
        <Spinner />
      ) : (
        <Tabs defaultActiveKey='1'>
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                Service Info
              </span>
            }
            key='1'
          >
            <MainDetails data={collegeData} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Address
              </span>
            }
            key='2'
          >
            <Address data={collegeData} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Other Information
              </span>
            }
            key='3'
          >
            <OtherInfo data={collegeData} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Owner Information
              </span>
            }
            key='4'
          >
            <OwnerInfo data={collegeData} />
          </TabPane>
        </Tabs>
      )}
    </div>
  );
}

export default ServiceDetail;
