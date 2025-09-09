import Videos from './components/Videos';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/navBar';
import Proposal from './components/Proposal';
import Skills from './components/Skills';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletFun />}>
          <Route index element={<HomePage />} />
          <Route path='propos' element={<Proposal />} />
          <Route path='skills' element={<Skills />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </Router>
  );
};

function OutletFun() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
