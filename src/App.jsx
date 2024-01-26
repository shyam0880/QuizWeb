import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Java from './Pages/Java';
import Sql from './Pages/Sql';
import Python from './Pages/Python';
import { NavLink } from 'react-router-dom';



function App() {
  return (
    <div className='page'>
      <div className='box'>
        <div className='butt'>
          <button className='back'><NavLink to="/" className={"navtext"}>&laquo;</NavLink></button>
        </div>
        <div className='ques'>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/java' element={<Java/>} />
          <Route path='/python' element={<Python/>} />
          <Route path='/sql' element={<Sql/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
  
}

export default App;
