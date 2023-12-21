import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Notes from './routes/Notes';
import Note from './routes/Note';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigation/>} >
        <Route index element={<Home/>} />
        <Route path="/notes" element={<Notes/>} />
        </Route>


        {/* Other routes can be added here */}
    </Routes>
  );
}

export default App;
