import NavigationBar from './container/NavigationBar.tsx';
import PersonalInfo from './container/AboutMe.tsx';
import {Route, Routes} from 'react-router-dom';
import Contacts from './container/Contacts.tsx';
import Resume from './container/Resume.tsx';
import Home from './container/Home.tsx'

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
