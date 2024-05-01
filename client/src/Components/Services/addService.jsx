import React, { useState, useEffect } from 'react';
import { Input, Button, Select, Row, Col, Collapse, notification } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import API from '../../api';

const { Panel } = Collapse;
const { Option } = Select;

export default function AddServices() {
  const [field, setField] = useState({});
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const [categoryOption, setCategoryOption] = useState([]);
  const [stateOption, setStateOption] = useState([]);
  const [cityOption, setCityOption] = useState([]);

  const [state, setState] = useState({
    error: false,
    message: '',
    heading: '',
    type: 'error',
  });

  const validationError = (message) => {
    setState({ error: true, message, heading: 'Validation Error' });
  };

  useEffect(() => {
    if (state.error) {
      notification.open({
        message: state.heading,
        type: state.type,
        description: state.message,
      });
      setState({ ...state, error: false });
    }
  }, [state.error]);

  const submitData = () => {
    if (
      !field.name ||
      !field.type ||
      !field.experiance ||
      !field.description ||
      !field.street1 ||
      !field.country ||
      !field.state ||
      !field.city ||
      !field.zipcode
    ) {
      validationError('Please fill in all required fields');
      return;
    }
    setLoader(true);
    const {
      street1,
      street2,
      type,
      city,
      country,
      state,
      name,
      description,
      experiance,
      tag,
      zipcode,
    } = field;
    const cityObj = cityOption.filter((c) => c.id === city)[0];
    const categoryObj = categoryOption.filter((c) => c.id === type)[0];
    const stateObj = stateOption.filter((c) => c.id === state)[0];

    const data = {
      name,
      tag: tag.split(','),
      experiance,
      type,
      description,
      service_id: name + type + experiance,
      address: name + street1 + city + experiance,
      customers_served: (+city * 12).toString(),
      addressObj: {
        id: name + street1 + city + experiance,
        street1,
        street2,
        country,
        state,
        city,
        zipcode,
        newCountry: { country: 'India', calling_code: '91' },
        newCity: cityObj,
        newState: stateObj,
      },
      typeObj: categoryObj,
    };

    axios
      .post(API.addService, data)
      .then((res) => {
        if (res.data.success) {
          setState({
            error: true,
            message: 'Service/Shop added successfully!!',
            heading: 'Success',
            type: 'success',
          });
          navigate(
            '/home-services/allServices?category=all&state=all&city=&name=',
          );
        } else {
          setState({
            error: true,
            message: 'Server Error !!',
            heading: 'Oops',
            type: 'error',
          });
        }
        setLoader(false);
      })
      .catch((e) => {
        setState({
          error: true,
          message: 'Server Error !!',
          heading: 'Oops',
          type: 'error',
        });
        console.log(e);
        setLoader(false);
      });
  };

  const setFieldFn = (name, value) => {
    setField({ ...field, [name]: value });
  };

  useEffect(() => {
    axios
      .get(API.categories)
      .then((res) => {
        if (res.data.success) {
          setCategoryOption(res.data.data);
        }
      })
      .catch((e) => console.log(e));
    axios
      .get(API.getAllCity)
      .then((res) => {
        if (res.data.success) {
          setCityOption(res.data.data);
        }
      })
      .catch((e) => console.log(e));
    axios
      .get(API.states)
      .then((res) => {
        if (res.data.success) {
          setStateOption(res.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className='w-[100%] h-[80vh] flex items-start justify-center mt-8'>
      <div className='w-[50%] p-8 bg-white rounded-lg shadow-lg'>
        <Collapse defaultActiveKey={['1', '2']} bordered={false}>
          <Panel header='Service/Shop Information' key='1'>
            <Row gutter={24}>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Service/Shop Name: *
                  </div>
                  <Input
                    value={field.name}
                    onChange={(e) => setFieldFn('name', e.target.value)}
                    placeholder='Service/Shop Name'
                  />
                </div>
              </Col>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Category/Type: *
                  </div>
                  <Select
                    value={field.type}
                    onChange={(e) => setFieldFn('type', e)}
                    placeholder='Select Category/Type'
                    style={{ width: '100%', fontWeight: 'normal' }}
                  >
                    {categoryOption.map((c) => (
                      <Option key={c.id}>{c.name}</Option>
                    ))}
                  </Select>
                </div>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Total experience: *
                  </div>
                  <Input
                    value={field.experiance}
                    onChange={(e) => setFieldFn('experiance', e.target.value)}
                    placeholder='1 year 6 months'
                  />
                </div>
              </Col>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Tags:
                  </div>
                  <Input
                    value={field.tag}
                    onChange={(e) => setFieldFn('tag', e.target.value)}
                    placeholder='Cheap, Awesome'
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col offset={1} span={21}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Description: *
                  </div>
                  <Input.TextArea
                    value={field.description}
                    onChange={(e) => setFieldFn('description', e.target.value)}
                    placeholder='Enter Description'
                  />
                </div>
              </Col>
            </Row>
          </Panel>
          <Panel header='Address' key='2'>
            <Row gutter={24}>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Address Line 1: *
                  </div>
                  <Input
                    value={field.street1}
                    onChange={(e) => setFieldFn('street1', e.target.value)}
                    placeholder='Address Line 1'
                  />
                </div>
              </Col>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Address Line 2:
                  </div>
                  <Input
                    value={field.street2}
                    onChange={(e) => setFieldFn('street2', e.target.value)}
                    placeholder='Address Line 2'
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Country: *
                  </div>
                  <Select
                    value={field.country}
                    onChange={(e) => setFieldFn('country', e)}
                    placeholder='Select Country'
                    style={{ width: '100%', fontWeight: 'normal' }}
                  >
                    <Option key='91'>India</Option>
                  </Select>
                </div>
              </Col>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    State: *
                  </div>
                  <Select
                    value={field.state}
                    onChange={(e) => setFieldFn('state', e)}
                    placeholder='Select State'
                    style={{ width: '100%', fontWeight: 'normal' }}
                  >
                    {field.country &&
                      stateOption.map((c) => (
                        <Option key={c.id}>{c.state}</Option>
                      ))}
                  </Select>
                </div>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    City: *
                  </div>
                  <Select
                    value={field.city}
                    onChange={(e) => setFieldFn('city', e)}
                    placeholder='Select City'
                    style={{ width: '100%', fontWeight: 'normal' }}
                  >
                    {field.state &&
                      cityOption
                        .filter((c) => c.state === field.state)
                        .map((c) => <Option key={c.id}>{c.city}</Option>)}
                  </Select>
                </div>
              </Col>
              <Col span={10} offset={1}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ paddingBottom: '0.5rem', fontWeight: 'bold' }}>
                    Zip code:
                  </div>
                  <Input
                    value={field.zipcode}
                    onChange={(e) => setFieldFn('zipcode', e.target.value)}
                    placeholder='Zip code'
                  />
                </div>
              </Col>
            </Row>
          </Panel>
        </Collapse>
        <div className='flex justify-end mt-4'>
          <Button
            onClick={() => navigate('/home-services/allServices')}
            className='mr-2'
          >
            Cancel
          </Button>
          <Button
            loading={loader}
            type='primary'
            onClick={() => submitData()}
            className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex items-center'
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
