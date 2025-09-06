import Videos from './components/Videos';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/navBar';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route الأب */}
        <Route path="/" element={<OutletFun />}>
          {/* Routes الأبناء */}
          <Route index element={<HomePage />} />
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
