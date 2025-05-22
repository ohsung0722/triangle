import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ClubCategoryBox from './components/ClubCategoryBox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClubCategoryBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
