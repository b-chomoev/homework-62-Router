import NavigationBar from './container/NavigationBar.tsx';
import PersonalInfo from './container/AboutMe.tsx';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className='container-fluid'>
        <Routes>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </main>
    </>
  );
}

export default App;
