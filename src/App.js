import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Notes from './routes/Notes';
import Note from './routes/Note';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/note" element={<Note/>} />

        {/* Other routes can be added here */}
    </Routes>
  );
}

export default App;
