import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigateTo = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: values.username,
        password: values.password
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.access);
      // Redirect to dashboard
      navigateTo('/');
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      setLoading(false);
      setError(error.response.data.detail || 'An error occurred');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '100px' }}>
      <Title level={3} style={{ marginBottom: '30px' }}>Login</Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Form>
    </div>
  );
};

export default LoginPage;
