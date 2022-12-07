import React, { useState } from 'react';
import { Button, Input, Form, Switch, Divider, notification } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { SendOutlined } from '@ant-design/icons';
import axios from 'axios';
import Logo from '../../Layout/Logo';
import API from '../../api';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [form] = Form.useForm();
  const sendOtp = () => {
    setLoading(true);
    axios
      .post(API.sendOtp, form.getFieldsValue())
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          console.log(res.data.data);
          notification.open({
            message: res.data.message,
            type: 'success',
          });

          setLoading(false);
          history.push('/verifyOtp');
        } else {
          notification.open({
            message: res.data.message,
            type: 'error',
          });
        }
      })
      .catch((e) => {
        if (e.response) {
          notification.open({
            message: e.response.data.msg,
            type: 'error',
          });
        }
        setLoading(false);
        console.log(e.response);
      });
  };
  return (
    <div className='signin'>
      <div className='signin-form'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            right: '1rem',
          }}
        >
          <Logo /> <h1 className='title'>HomeServices</h1>
        </div>
        <h2 className='welcomeBack'>Welcome back</h2>
        <p className='loginIntoAccount'>
          Enter your email to recover your account
        </p>
        <div>
          <Form form={form} layout='vertical'>
            <Form.Item label='Email' name='email'>
              <Input placeholder='johndoe@gmail.com' />
            </Form.Item>

            <Form.Item style={{ width: '100%' }}>
              <Button
                onClick={sendOtp}
                type='primary'
                shape='round'
                icon={<SendOutlined />}
                style={{
                  width: '100%',
                  height: '2.5rem',
                  backgroundColor: 'rgb(0, 132, 137)',
                  borderColor: 'rgb(0, 132, 137)',
                }}
                loading={loading}
              >
                Send Email
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='signin-image-div' />
    </div>
  );
}

export default SignIn;
