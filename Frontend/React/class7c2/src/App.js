import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/UserPage" element={<UserPage />} />          
     </Routes>
    </div>
  );
}

export default App;
