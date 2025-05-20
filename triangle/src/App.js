import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ClubNameBox from './components/ClubNameBox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClubNameBox/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
