import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import CompletedTasks from './components/CompletedTasks';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';

axios.defaults.baseURL = 'https://server-azure-two.vercel.app';

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/completedTasks" element={<CompletedTasks />} />
        <Route path="*" element={<div className="h-[100vh] mx-auto mt-40">Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
