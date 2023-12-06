'use client'
import React from 'react'
import { Alert, Form, Input } from 'antd';

const ConfirmPasswordForm = () => {
    const [form] = Form.useForm();
    return (
        <div className='mt-5'>
            <Form
                form={form}
                name="dependencies"
                autoComplete="off"
                style={{ maxWidth: 600 }}
                layout="vertical"
            >
                <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="password2"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>

        </div>
    )
}

export default ConfirmPasswordForm