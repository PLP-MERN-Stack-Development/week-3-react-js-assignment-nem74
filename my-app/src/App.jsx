import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './home';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}
