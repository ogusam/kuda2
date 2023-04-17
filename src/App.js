
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Kuda from './components/pages/Kuda';
import Company from './components/pages/Company';
import Developer from './components/pages/developer';
import Help from './components/pages/Help';
import SignIn from './components/pages/Sigin';
import ResetPassword from './components/pages/ResetPassword';
import Button from './components/Button';

function App() {
  return (
  <div>
    
   <BrowserRouter>
  
    <Navbar/>
  
   
   <Routes>
    
     
     <Route path='/' element={<Kuda/>}/>
     <Route path="reset password" element={<ResetPassword/>}/>
     <Route path='company' element={<Company/>}/>
     <Route path='sign-In' element={<SignIn/>}/>
     <Route path='help' element={<Help/>}/>
     <Route path='join kuda' element={<Button/>}/>
     <Route path='developer' element={<Developer/>}/>
     <Route path='developer' element={<Developer/>}/>
     <Route path='developer' element={<Developer/>}/>
     <Route path='developer' element={<Developer/>}/>
     <Route path='developer' element={<Developer/>}/>
     <Route path='developer' element={<Developer/>}/>
     <Route path='developer' element={<Developer/>}/>
     <Route path='developer' element={<Developer/>}/>




      </Routes>
      
   </BrowserRouter>
   </div>
  
    );
}

export default App;
