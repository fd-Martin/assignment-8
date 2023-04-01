import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../component/Header/Header';
import Blog from '../component/Blog/Blog';
import QA from '../component/QA/QA';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Header></Header>
      <Blog ></Blog>
      <QA></QA>
    </div>
  )
}

export default App
