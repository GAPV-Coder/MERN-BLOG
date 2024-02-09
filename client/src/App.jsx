import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingIn from './pages/SignIn';
import SingUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<SingIn />} />
                <Route path="/sign-up" element={<SingUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
