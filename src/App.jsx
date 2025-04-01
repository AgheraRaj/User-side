import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Route, Routes, useLocation } from 'react-router-dom';


import Home from "./pages/Home"
import Footer from './components/Footer';
import Login from './pages/Login'
import JobList from './pages/JobList';
import Talent from './pages/Talent';
import ProjectDetail from './components/Work&Talent-components/ProjectDetail';
import MyProfile from './pages/Header-page/MyProfile';
import SignUpPage from './pages/Signup';
import FreelancerProfile from './components/Work&Talent-components/freelancerprofile';
import BySkill from './pages/Header-page/BySkill';
import Header from './components/header';
import MyJobs from './pages/Header-page/Manage-work/MyJobs';


const App = () => {

  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <MantineProvider>
      <Notifications position="top-center" zIndex={2077} />
      {!hideLayout && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/job-list' element={<JobList />} />
        <Route path='/talent' element={<Talent />} />
        <Route path="/project/:jobId" element={<ProjectDetail />} />
        <Route path="/freelancer-profile/:id" element={<FreelancerProfile />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path="/by-skill/:skill" element={<BySkill />} />
        <Route path='/freelancer/my-jobs' element={<MyJobs/>}/>
      </Routes>
      {!hideLayout && <Footer />}
    </MantineProvider>
  )
}

export default App;