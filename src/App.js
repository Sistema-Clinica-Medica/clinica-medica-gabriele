import './App.css';
import Login from './pages/Login';
import ForgotPassword from './pages/Forgotpassword';
import DefaultPage from './components/DefaultPage';
import Home from './pages/Home';
import Form from './pages/Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App flex">
      <Router>
        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;