import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader, Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import axios from 'axios';
import MainDetails from './MainDetails';
import CollegeStudent from './CollegeStudent';
import Address from './Address';
import Spinner from '../../Spinner';
import API from '../../../api';
import SimilarCollege from './SimilarColleges';

const { TabPane } = Tabs;

function CollegeProfile() {
  const [collegeData, setCollegeData] = useState([]);
  const [collegeLoading, setCollegeLoading] = useState(false);

  const { serviceId } = useParams();
  useEffect(() => {
    setCollegeLoading(true);
    axios
      .get(API.getServiceById.replace(':serviceId', serviceId))
      .then((data) => {
        console.log(data);
        if (data.data.success) {
          setCollegeData(data.data.data[0]);
          setCollegeLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setCollegeLoading(false);
      });
  }, [serviceId]);
  return (
    <>
      {collegeLoading ? (
        <Spinner />
      ) : (
        <>
          <PageHeader title={collegeData.name} />
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
              key='3'
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
              key='2'
            >
              <CollegeStudent data={collegeData} loading={collegeLoading} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Owner Information
                </span>
              }
              key='5'
            >
              <SimilarCollege data={collegeData} />
            </TabPane>
          </Tabs>
        </>
      )}
    </>
  );
}

export default CollegeProfile;
