import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Route, Routes, useLocation } from 'react-router-dom';


import Header from "./components/Header";
import Home from "./pages/Home"
import Footer from './components/Footer';
import Login from './pages/Login'
import Signup from './pages/Signup'
import JobList from './pages/JobList';
import Talent from './pages/Talent';
import ProjectDetail from './components/Work&Talent-components/ProjectDetail';
import FreelancerProfile from './components/Work&Talent-components/FreelancerProfile';


const App = () => {

  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <MantineProvider>
      {!hideLayout && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/job-list' element={<JobList />} />
        <Route path='/talent' element={<Talent />} />
        <Route path='/project-detail' element={<ProjectDetail />} />
        <Route path='/freelancer-profile' element={<FreelancerProfile />} />
      </Routes>
      {!hideLayout && <Footer />}
    </MantineProvider>
  )
}

export default App;