import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import CompletedTasks from './components/CompletedTasks';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

axios.defaults.baseURL = 'http://localhost:5000';

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/completedTasks" element={<CompletedTasks />} />
        <Route path="*" element={<div className="h-[100vh] mx-auto mt-40">Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
