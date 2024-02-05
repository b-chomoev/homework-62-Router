import NavigationBar from './container/NavigationBar.tsx';
import PersonalInfo from './container/AboutMe.tsx';
import {Route, Routes} from 'react-router-dom';
import Footer from './container/Footer.tsx';

function App() {

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className='container-fluid'>
        <Routes>
          <Route path='/' element={(
            <PersonalInfo />
          )}/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
