import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader, Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import MainDetails from './MainDetails';
import CollegeStudent from './CollegeStudent';
import Address from './Address';
import Spinner from '../../Spinner';
import API from '../../../api';
import SimilarCollege from './SimilarColleges';

const { TabPane } = Tabs;

function CollegeProfile() {
  const [collegeData, setCollegeData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [collegeLoading, setCollegeLoading] = useState(false);
  const [studentLoading, setStudentLoading] = useState(false);

  const { collegeId } = useParams();
  useEffect(() => {
    setCollegeLoading(true);
    setStudentLoading(true);
    fetch(API.college.replace(':collegeId', collegeId)).then((data) =>
      data.json().then((data) => {
        setCollegeData(data.data);
        setCollegeLoading(false);
      }),
    );
    fetch(API.collegeStudent.replace(':collegeId', collegeId)).then((data) =>
      data.json().then((data) => {
        setStudentData(data.data);
        setStudentLoading(false);
      }),
    );
  }, [collegeId]);
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
                  College Info
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
                  Students
                </span>
              }
              key='2'
            >
              <CollegeStudent data={studentData} loading={studentLoading} />
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
                  Similar colleges
                </span>
              }
              key='5'
            >
              <SimilarCollege
                id={collegeData?._id}
                location={collegeData?.city}
              />
            </TabPane>
          </Tabs>
        </>
      )}
    </>
  );
}

export default CollegeProfile;
