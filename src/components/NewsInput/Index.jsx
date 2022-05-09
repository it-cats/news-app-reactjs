import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const NewsInput = () => {
  const [form] = Form.useForm()
  const [requiredMark,
    setRequiredMarkType] = useState('optional')

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}>
      <Form.Item label="Required Mark" name="requiredMarkValue"></Form.Item>
      <Form.Item label="Title" required tooltip="This is a required field">
        <Input placeholder="Enter title" />
      </Form.Item>
      <Form.Item
        label="Text"
        tooltip={{
          title: 'Enter text',
          icon: <InfoCircleOutlined />
        }}>
        <Input placeholder="Enter text" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default () => <NewsInput />
