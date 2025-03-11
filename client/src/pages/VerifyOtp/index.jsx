import React, { useState } from 'react';
import { Button, Input, Form, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UnlockOutlined } from '@ant-design/icons';
import axios from 'axios';
import Logo from '../../Layout/Logo';
import API from '../../api';
import PublicLayout from '../../Layout/PublicLayout';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [counter, setCounter] = React.useState(60);

  const [form] = Form.useForm();
  const sendOtp = () => {
    setLoading(true);
    axios
      .post(API.verifyOtp, form.getFieldsValue())
      .then((res) => {
        if (res.data.success) {
          notification.open({
            message: res.data.message,
            type: 'success',
          });

          setLoading(false);
          navigate(`/changePassword/${res.data.data.email}`);
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
  React.useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);
  return (
    <PublicLayout>
      <div className='w-full  p-8 bg-white rounded-lg shadow-lg text-center'>
        <div className='flex align-middle justify-center items-center'>
          <Logo />
        </div>
        <h2 className='welcomeBack'>Welcome back</h2>
        <p className='loginIntoAccount'>
          Enter your otp to change your password
        </p>
        <div>
          <Form form={form} layout='vertical'>
            <Form.Item
              label='One Time Password'
              //   required
              name='otp'
              //   tooltip="This is a required field"
            >
              <Input placeholder='Enter one time password' />
            </Form.Item>

            <Form.Item style={{ width: '100%' }}>
              <Button
                type='primary'
                shape='round'
                icon={<UnlockOutlined />}
                style={{
                  width: '100%',
                  height: '2.5rem',
                  backgroundColor: 'rgb(0, 132, 137)',
                  borderColor: 'rgb(0, 132, 137)',
                  marginBottom: '1rem',
                }}
                loading={loading}
                onClick={sendOtp}
              >
                Verify Otp
              </Button>
              {counter < 2 ? (
                <Link to='/forgot-password'>Don't get otp? Resend It</Link>
              ) : (
                `Resend after ${counter} second`
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </PublicLayout>
  );
}

export default SignIn;
