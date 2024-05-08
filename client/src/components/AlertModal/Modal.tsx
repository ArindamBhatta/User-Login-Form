import React, { useState } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Modal, Button, Form, Input, message, Space } from 'antd'

const AlertModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [form] = Form.useForm()

  const reset = form.resetFields

  const onFinish = async (values: any) => {
    try {
      const data = {
        title: values.title,
        userId: 'id',
        careerSiteUrl: values.careerSiteUrl,
        filter: values.users
      }

      const finalData = JSON.stringify(data)
      const res = await fetch('http://localhost:8111/api/v1/create-alerts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: finalData
      })
    } catch (err) {
      console.log(err)
    }
    handleOk()
    reset()
    void message.success('Submit success!')
  }

  const onFinishFailed = () => {
    void message.error('Submit failed!')
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    reset()
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Alerts
      </Button>

      <Modal onCancel={handleCancel} footer={null} title="Add Alert" open={isModalOpen}>
        <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item
            name="title"
            label="Enter Title of role here"
            rules={[{ required: true }, { type: 'string', min: 3 }]}
          >
            <Input placeholder="title" />
          </Form.Item>
          <Form.Item
            name="careerSiteUrl"
            label="Enter Website URL"
            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
          >
            <Input placeholder="https://taobao.com/" />
          </Form.Item>
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                <div style={{ height: '200px', overflowY: 'auto' }}>
                  {fields.map(({ key, name, ...restField }) => {
                    return (
                      <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                        <Form.Item
                          {...restField}
                          name={[name, 'key']}
                          rules={[{ required: true, message: 'missing key' }]}
                        >
                          <Input placeholder="Filter Key" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'value']}
                          rules={[{ required: true, message: 'Missing value' }]}
                        >
                          <Input placeholder="Filter Value" />
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(name)
                          }}
                        />
                      </Space>
                    )
                  })}
                </div>
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add()
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add fields for Job
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AlertModal
