import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button size="large">Click me</Button>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
