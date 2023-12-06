'use client'
import React from 'react';
import { Button, Form, Input } from 'antd';


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};


const onFinish = (values: any) => {
    console.log(values);
};

const ContactForm: React.FC = () => (
    <Form
        layout='vertical'
        name="nest-messages"
        onFinish={onFinish}

        style={{ maxWidth: 600 }}
        className='bg-[#1b1b1b] mt-[40px] p-5 cntc-form rounded-[15px]'
        validateMessages={validateMessages}
    >
        <h2 className='text-[20px] mb-5 font-bold text-white'>Contact Form</h2>
        <Form.Item name={['user', 'fullname']} label="Full name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email address" rules={[{ type: 'email', required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ message: 'Please input your phone number!' }]}
        >
            <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name={['user', 'message']} rules={[{ required: true }]} label="Message">
            <Input.TextArea cols={5} rows={5} />
        </Form.Item>
        <Form.Item className='!w-100' >
            <Button type="primary" className='!bg-[#e3694a] text-[1rem] font-bold h-[50px] !outline-none !ring-0 w-full !shadow-none' htmlType="submit">
                SUBMIT
            </Button>
        </Form.Item>
    </Form>
);

export default ContactForm;