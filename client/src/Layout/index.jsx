import React, { useState, useContext, useEffect } from 'react';
import { Menu, Input, Select, Button, Dropdown } from 'antd';
import {
  DotChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  SettingOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import axios from 'axios';
import Logo from './Logo';
import { GlobalContext } from '../Context/GlobalContext';
import API from '../api';
import { getArrayParams, setUrlString } from '../utils/paramsConvert';

const { Option } = Select;

const { SubMenu } = Menu;

function Index({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { data, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { search: urlSearch, pathname } = useLocation();
  const [isHide, setIsHide] = useState(false);

  const [search, setSearch] = useState({
    name: '',
    state: 'all',
    city: '',
    category: 'all',
  });

  const fieldOnChange = (key, value) => {
    setSearch({ ...search, [key]: value });
  };

  const toggleCollapsed = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const secondURL = pathname.split('/')[2];
  useEffect(() => {
    if (secondURL === 'addCategory' || secondURL === 'addService')
      setIsHide(true);
    else setIsHide(false);
  }, [secondURL]);
  useEffect(() => {
    setSearch(getArrayParams(urlSearch));
  }, [urlSearch]);
  useEffect(() => {
    axios
      .get(API.categories)
      .then((res) => {
        if (res.data.success) {
          dispatch({ type: 'SET_CATEGORIES', payload: res.data.data });
        }
      })
      .catch((e) => console.error(e));
    axios
      .get(API.states)
      .then((res) => {
        if (res.data.success) {
          dispatch({ type: 'SET_STATES', payload: res.data.data });
        }
      })
      .catch((e) => console.error(e));
  }, [dispatch]);

  const menu = (
    <Menu>
      <Menu.Item key='1' icon={<ProfileOutlined />}>
        <Link to='/home-services/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item key='2' icon={<SettingOutlined />}>
        <Link to='/home-services/setting'>Setting</Link>
      </Menu.Item>
      <Menu.Item
        key='3'
        icon={<LogoutOutlined />}
        onClick={() => dispatch({ type: 'LOGOUT' })}
      >
        <Link to='/signin'>Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='flex min-h-screen'>
      <div
        className={`w-64 bg-gray-900 text-white ${
          collapsed ? 'collapsed' : ''
        } md:overflow-y-auto`}
      >
        <div className='flex items-center justify-center py-4'>
          <Logo />
        </div>
        <Menu
          theme='dark'
          defaultOpenKeys={['13', 'category', 'Services']}
          defaultSelectedKeys={['13']}
          mode='inline'
          className='text-sm'
        >
          <SubMenu key={'1'} title='Categories' icon={<UserOutlined />}>
            <Menu.Item key='66' icon={<UserOutlined />}>
              <Link to='/home-services/allCategories?category=all&state=all&city=&name='>
                All Categories
              </Link>
            </Menu.Item>
            {data.isMerchant && (
              <Menu.Item key='67' icon={<UserOutlined />}>
                <Link to='/home-services/addCategory'>Add Category</Link>
              </Menu.Item>
            )}
          </SubMenu>
          <SubMenu key={'2'} title='Services' icon={<TeamOutlined />}>
            <Menu.Item key='6' icon={<TeamOutlined />}>
              <Link to='/home-services/allServices?category=all&state=all&city=&name='>
                All Services
              </Link>
            </Menu.Item>
            {data.isMerchant && (
              <Menu.Item key='8' icon={<TeamOutlined />}>
                <Link to='/home-services/addService'>Add Service</Link>
              </Menu.Item>
            )}
          </SubMenu>
          <SubMenu key='13' icon={<PieChartOutlined />} title='Charts'>
            <Menu.Item key='1' icon={<RadarChartOutlined />}>
              <Link to='/home-services/charts/categories'>
                Categories charts
              </Link>
            </Menu.Item>
            <Menu.Item key='10' icon={<DotChartOutlined />}>
              <Link to='/home-services/charts/services'>Services charts</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className='flex-1 min-h-screen bg-gray-100'>
        <header className='bg-white shadow-md p-4 flex justify-between items-center'>
          <Button
            icon={<MenuOutlined />}
            className='md:hidden'
            onClick={toggleCollapsed}
          />
          {!isHide && (
            <div className='flex'>
              <Select
                className='mr-2'
                value={search.category}
                onChange={(value) => {
                  fieldOnChange('category', value);
                }}
              >
                <Option value='all'>Category (All)</Option>
                {data.categories.length > 0 &&
                  data.categories.map((category) => (
                    <Option key={category.id} value={category.id}>
                      {category.name}
                    </Option>
                  ))}
              </Select>
              <Select
                className='mr-2'
                value={search.state}
                onChange={(value) => fieldOnChange('state', value)}
              >
                <Option value='all'>State (All)</Option>
                {data.states.length > 0 &&
                  data.states.map((state) => (
                    <Option key={state.id} value={state.id}>
                      {state.state}
                    </Option>
                  ))}
              </Select>
              <Input
                className='mr-2'
                value={search.city}
                onChange={(value) => fieldOnChange('city', value.target.value)}
                placeholder='Enter your location'
              />
              <Input
                className='mr-2'
                placeholder={'ex "shree ram"'}
                value={search.name}
                onChange={(value) => {
                  fieldOnChange('name', value.target.value);
                }}
              />
              <Button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded flex items-center'
                icon={<SearchOutlined />}
                onClick={() => {
                  navigate(`/home-services/allServices${setUrlString(search)}`);
                  dispatch({ type: 'SET_SEARCH_PARAMS', payload: search });
                }}
              >
                Search
              </Button>
            </div>
          )}
          <Dropdown overlay={menu}>
            <Avatar size='large' src='../images/team_01.jpg' />
          </Dropdown>
        </header>
        <main className='p-4'>{children}</main>
        <footer className='text-center bg-white py-4'>
          Bhavya Design ©{new Date().getFullYear()} Created by bhavyabhut
        </footer>
      </div>
    </div>
  );
}

export default Index;
