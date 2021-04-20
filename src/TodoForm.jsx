import React, { useEffect } from 'react'
import { Button, Form, Input, InputNumber } from 'antd'
import api from './api'
const { Item, useForm } = Form

const TodoForm = ({
  item,
  loadData,
  //  setTodos
}) => {
  const [form] = useForm()

  useEffect(() => {
    if (item) {
      form.setFieldsValue({ ...item })
    }
    // eslint-disable-next-line
  }, [item])

  const onFinish = async (values) => {
    if (item) {
    } else {
      try {
        await api.createTodo(values)
        // setTodos((currentTodos) => [...currentTodos, data])
        form.resetFields()
      } catch (error) {}
    }
    loadData()
  }

  return (
    <Form form={form} layout='vertical' onFinish={onFinish}>
      <div className='row'>
        <div className='col'>
          <Item name='text' label='Text' rules={[{ required: true }]}>
            <Input />
          </Item>
        </div>
        <div className='col'>
          <Item name='hours' label='Hours' rules={[{ required: true }]}>
            <InputNumber />
          </Item>
        </div>
      </div>
      <Item noStyle>
        <Button type='primary' block htmlType='submit'>
          {item ? 'Edit' : 'Create'}
        </Button>
      </Item>
    </Form>
  )
}

export default TodoForm
