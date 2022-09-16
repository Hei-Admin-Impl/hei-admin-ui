import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/page/LoginPage';
import NewEvent from './components/page/NewEvent';
import NavHaapi from './components/NavHaapi';

function App() {
  return (
    <>
       <NavHaapi />
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Event" element={<NewEvent />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;