import React, { useState } from 'react';
import { Button, Input, Form, notification } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { SendOutlined } from '@ant-design/icons';
import axios from 'axios';
import Logo from '../../Layout/Logo';
import API from '../../api';

function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const [form] = Form.useForm();
  const sendOtp = () => {
    setLoading(true);
    axios
      .post(API.changePassword, {
        email: params.email,
        ...form.getFieldsValue(),
      })
      .then((res) => {
        if (res.data.success) {
          notification.open({
            message: res.data.message,
            type: 'success',
          });

          setLoading(false);
          navigate(`/`);
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
        <p className='loginIntoAccount'>Enter new password for </p>
        <div>
          <Form form={form} layout='vertical'>
            <Form.Item label='Password' name='password'>
              <Input placeholder='Password' />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder='Confirm Password' />
            </Form.Item>

            <Form.Item style={{ width: '100%' }}>
              <Button
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
                onClick={sendOtp}
              >
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='signin-image-div' />
    </div>
  );
}

export default ChangePassword;
