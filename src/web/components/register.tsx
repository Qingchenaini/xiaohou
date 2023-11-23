import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './register.scss'
import { registerApi } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


interface loginParam {
    username: string,
    password: string,
    token: any,
}

const Register: React.FC = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values: loginParam) => {
        try {
            const register = await registerApi({ username: values.username, password: values.password });

            if (register) {
                console.log('register successful');
                toast.success('注册成功');
                navigate('/Login');
            } else {
                console.log('register failed');
            }
        } catch (error) {
            console.log('Error:', error.message);
        }
    };


    return (

        <div className="register">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;