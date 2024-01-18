import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Java from './Pages/Java';
import Sql from './Pages/Sql';
import Python from './Pages/Python';


function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/java' element={<Java/>} />
    <Route path='/python' element={<Python/>} />
    <Route path='/sql' element={<Sql/>} />
    </Routes>
    </div>
  )
  
}

export default App;
