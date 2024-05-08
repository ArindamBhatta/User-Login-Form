import React, { useState } from 'react'
import { Layout, Avatar, Space, Card, List, Badge } from 'antd'
import { DeleteOutlined, BellOutlined } from '@ant-design/icons'
import VirtualList from 'rc-virtual-list'
import './Dashboard.css'
import AlertModal from '../components/AlertModal/Modal'

interface UserData {
  email: string
  name: {
    last: string
  }
  picture: {
    large: string
  }
}
const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'
const ContainerHeight = 230

const { Content } = Layout

const Dashboard: React.FC = () => {
  const [data, setData] = useState<UserData[]>([])
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const appendData = async () => {
    try {
      const res = await fetch(fakeDataUrl)
      const body = await res.json()
      setData((prevData: UserData[]) => prevData.concat(body.results as UserData[]))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const fetchData = async () => {
    try {
      await appendData()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  fetchData().catch((error) => {
    console.error('Error in fetchData promise:', error)
  })

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    try {
      if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
        appendData().catch((error) => {
          console.error('Error fetching more data:', error)
        })
      }
    } catch (error) {
      console.error('Error in onScroll:', error)
    }
  }
  return (
    <Layout>
      <Content className="content">
        <Card
          title={
            <Space className="space">
              <div className="div-notifications">Notifications</div>
              <div className="div-add-alert">
                <AlertModal />
              </div>
              <div className="div-mark-all-read">
                <Badge dot>Mark All Read</Badge>
              </div>
            </Space>
          }
          className="card-1"
        >
          <div className="div-list">
            <List>
              <VirtualList data={data} height={ContainerHeight} itemHeight={47} itemKey="email" onScroll={onScroll}>
                {(item: UserData) => (
                  <List.Item
                    key={item.email}
                    style={{
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      backgroundColor: hoveredItem === item.email ? '#e6e6e6' : 'transparent'
                    }}
                    onMouseEnter={() => {
                      setHoveredItem(item.email)
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null)
                    }}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} />}
                      title={
                        <div
                          className="div-list item meta"
                          style={{ display: 'flex', justifyContent: 'space-between', width: '98%' }}
                        >
                          <a
                            href="https://ant.design"
                            className="div-list item meta a"
                            style={{ color: hoveredItem === item.email ? 'blue' : 'black' }}
                          >
                            {item.name.last}
                          </a>
                          {hoveredItem === item.email && (
                            <Space>
                              <DeleteOutlined
                                className="div-space deleteoutlined"
                                style={{ fontSize: '20px', marginRight: '10px' }}
                              />
                              <BellOutlined className="div-space belloutlined" style={{ fontSize: '20px' }} />
                            </Space>
                          )}
                        </div>
                      }
                      description={item.email}
                    />
                  </List.Item>
                )}
              </VirtualList>
            </List>
          </div>
        </Card>

        <Card
          title={
            <Space className="space">
              <div>Alerts</div>
              <AlertModal />
            </Space>
          }
          className="card-2"
        >
          <div className="div-list">
            <List>
              <VirtualList data={data} height={ContainerHeight} itemHeight={47} itemKey="email" onScroll={onScroll}>
                {(item: UserData) => (
                  <List.Item
                    key={item.email}
                    className="list-item"
                    style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} />}
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description={item.email}
                    />
                  </List.Item>
                )}
              </VirtualList>
            </List>
          </div>
        </Card>
      </Content>
    </Layout>
  )
}
export default Dashboard
