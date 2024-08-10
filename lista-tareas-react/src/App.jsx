import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { ControlTasks } from './components/ControlTasks'
import { Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import './App.css'

function App() {

  return (
    <>
      <div className="custom-div">
        <div className="custom-inner-div"></div>
      </div>
      <div className='pageMain'>
        <Header />
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/control-tasks" element={<ControlTasks />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </>
  )
}

export default App
