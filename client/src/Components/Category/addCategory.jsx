import React, { useState, useEffect } from 'react';
import { Upload, Button, Input, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API from '../../api';

function getBase64(file) {
  if (file)
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  return new Promise((resolve, reject) => {
    reject();
  });
}
export default function AddCategory() {
  const [loader, setLoader] = useState(false);
  const [fieldData, setFieldData] = useState({ name: '', description: '' });
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const history = useHistory();
  const [state, setState] = useState({
    loader: false,
    error: false,
    message: '',
  });
  const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const sendData = () => {
    if (
      fieldData.name === '' ||
      fieldData.name === null ||
      !fieldData.name ||
      fieldData.name.trim() === ''
    ) {
      setState({
        ...state,
        error: true,
        message: 'Please enter category name',
      });
      return;
    }
    if (!file) {
      setState({
        ...state,
        error: true,
        message: 'Please select image for category',
      });
      return;
    }
    setLoader(true);
    const formData = new FormData();
    formData.append('name', fieldData.name);
    formData.append('image', file);
    formData.append('description', fieldData.description);
    axios
      .post(API.addCategory, formData)
      .then((res) => {
        if (res.data.success) {
          history.push(
            '/home-services/allCategories?category=all&state=all&city=&name=',
          );
        }
        setLoader(false);
      })
      .catch((e) => {
        if (e.response) {
          setState({ error: true, message: e.response.data.error });
        } else {
          setState({ error: true, message: 'Server Error' });
        }
        setLoader(false);
      });
  };
  useEffect(() => {
    if (state.error) {
      notification.open({
        message: state.message,
        type: 'error',
      });
      setState({ ...state, error: false });
    }
  }, [state.error]);
  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Add Category</h2>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontWeight: 'bold' }}> Category Image: *</span>
        <Upload
          style={{ marginTop: '1rem' }}
          accept='image/*'
          showUploadList={false}
          customRequest={dummyRequest}
          listType='picture-card'
          onChange={(event) => {
            setFile(event.file.originFileObj);
            getBase64(event.file.originFileObj)
              .then((data) => setUrl(data))
              .catch((e) => console.log(e));
          }}
          name='file'
        >
          {url ? (
            <img src={url} alt='avatar' style={{ width: '100%' }} />
          ) : (
            <PlusOutlined />
          )}
        </Upload>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Category Name: *
        </span>
        {/* {file} */}
        <Input
          value={fieldData.name}
          onChange={(e) => {
            setFieldData({ ...fieldData, name: e.target.value });
          }}
          placeholder='Category Name'
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Category Description:
        </span>
        <Input.TextArea
          value={fieldData.description}
          onChange={(e) => {
            setFieldData({ ...fieldData, description: e.target.value });
          }}
          placeholder='Category Description'
        />
      </div>

      <Button
        onClick={() =>
          history.push(
            '/home-services/allCategories?category=all&state=all&city=&name=',
          )
        }
        style={{ marginRight: '1rem' }}
      >
        Cancel
      </Button>
      <Button loading={loader} type='primary' onClick={sendData}>
        Submit
      </Button>
    </>
  );
}
