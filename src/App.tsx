import NavigationBar from './container/NavigationBar.tsx';
import PersonalInfo from './container/AboutMe.tsx';
import {Route, Routes} from 'react-router-dom';;
import Contacts from './container/Contacts.tsx';

function App() {

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={(
            <PersonalInfo />
          )}/>
          <Route path='contacts' element={(
            <Contacts />
          )}/>
          <Route />
          <Route />
        </Routes>
      </main>
    </>
  );
}

export default App;
