import 'antd/dist/antd.css'
import 'bootstrap-4-grid/css/grid.min.css'
import './css/app.css'
import { Table, Tag } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import api from './api'
import TodoForm from './TodoForm'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await api.getTodos()
      if (data) {
        setTodos(data)
      }
    } catch (error) {}
    setLoading(false)
  }, [])

  useEffect(() => {
    if (loadData) {
      loadData()
    }
  }, [loadData])

  const columns = [
    {
      key: 'text',
      title: 'Text',
      dataIndex: 'text',
    },
    {
      key: 'hours',
      title: 'Hours',
      dataIndex: 'hours',
      render: (hours) => (
        <Tag color={hours > 5 ? 'cyan' : 'green'}>{hours}h</Tag>
      ),
    },
  ]

  return (
    <div className='container mt-4'>
      <h1>Todos</h1>
      <div className='row'>
        <div className='col-12 col-md-6 pb-4 pb-md-0'>
          <TodoForm loadData={loadData} loadData={loadData} />
        </div>
        <div className='col-12 col-md-6'>
          <Table
            rowKey={(row) => row._id}
            columns={columns}
            dataSource={todos}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default App
