'use client'
import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Radio, RadioChangeEvent } from 'antd';
import { users } from '@/constants';




const EditProfileForm = () => {
    const [value, setValue] = useState(1);

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            password: '${label} is not a valid password!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };


    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const dateFormat = "YYYY/MM/DD";

    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <div className='mt-12'>
            <Form
                layout='vertical'
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                className='bg-[#1b1b1b] mt-[40px] p-5 cntc-form rounded-[15px]'
                validateMessages={validateMessages}
            >
                <h2 className='text-[20px] mb-5 font-bold text-white'>Edit Profile</h2>
                <Form.Item initialValue={users[0].first_name} name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item initialValue={users[0].dateOfBirth} name={['user', 'date']} label="Date of Birth" rules={[{ required: true }]}>
                    <DatePicker format={dateFormat} style={{ width: "100%" }} size='large' />
                </Form.Item>
                <Form.Item initialValue={users[0].email} name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    initialValue={users[0].password}
                    rules={[{ message: 'Please input your password!' }]}
                >
                    <Input.Password
                        style={{ width: '100%' }}
                        size='large'
                    />
                </Form.Item>
                <div className='mt-2  mb-5 flex flex-col gap-3'>
                    <span className='text-[#99a2ab] text-xs'>GENDER</span>
                    <Radio.Group style={{ color: "white!important" }} onChange={onChange} value={value}>
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                        <Radio value={3}>Prefer not to say</Radio>
                    </Radio.Group>
                </div>
                <Form.Item className='!w-100' >
                    <Button type="primary" className='!bg-[#e3694a] text-[1rem] font-bold h-[50px] !outline-none !ring-0 w-full !shadow-none' htmlType="submit">
                        SAVE
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditProfileForm