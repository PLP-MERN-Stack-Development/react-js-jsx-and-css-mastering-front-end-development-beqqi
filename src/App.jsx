
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Posts from './pages/Posts.jsx';
import Layout from './components/Layout.jsx';
import TaskManager from './components/TaskManager.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </Layout>
  );
}

export default App;