import {Route, Routes} from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import PersonalInfo from './components/AboutMe/AboutMe.tsx';
import Contacts from './components/Contacts/Contacts.tsx';
import Resume from './components/Resume/Resume.tsx';
import Home from './components/Home/Home.tsx';

function App() {

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={(
            <Home />
          )}/>
          <Route path='about-me' element={(
            <PersonalInfo />
          )}/>
          <Route path='contacts' element={(
            <Contacts />
          )}/>
          <Route path='resume' element={(
            <Resume/>
          )} />
          <Route path='*' element={<h1 className='mt-5 text-center'>Oops! I guess it is the wrong path</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
