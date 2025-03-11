import React, { useState } from 'react';
import { Button, Input, Form, notification } from 'antd';
import { useNavigate ,Link} from 'react-router-dom';
import { SendOutlined } from '@ant-design/icons';
import axios from 'axios';
import Logo from '../../Layout/Logo';
import API from '../../api';
import PublicLayout from '../../Layout/PublicLayout';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const sendOtp = () => {
    setLoading(true);
    axios
      .post(API.sendOtp, form.getFieldsValue())
      .then((res) => {
        if (res.data.success) {
          notification.open({
            message: res.data.message,
            type: 'success',
          });

          setLoading(false);
          navigate('/verifyOtp');
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
    <PublicLayout>
    <div className='w-full  p-8 bg-white rounded-lg shadow-lg text-center'>
      <div className='flex align-middle justify-center items-center'>
        <Logo />
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
        <Link to={'/'}>Back</Link>
    </div>
  </PublicLayout>
    
  );
}

export default ForgotPassword;
