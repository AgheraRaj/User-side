import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Route, Routes, useLocation } from 'react-router-dom';


import Header from "./components/Header";
import Home from "./pages/Home"
import Footer from './components/Footer';
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {

  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname)
  ;

  return (
    <MantineProvider>
      {!hideLayout && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {!hideLayout && <Footer />}
    </MantineProvider>
  )
}

export default App;