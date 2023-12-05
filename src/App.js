import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import GratitudeNotes from './GratitudeNotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <GratitudeNotes/>

        <LoginButton/>
        <LogoutButton/>
        <Profile/>


      </header>
    </div>
  );
}

export default App;
