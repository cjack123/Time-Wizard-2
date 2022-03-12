import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { Home } from "./Home"
import  { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import { ProjectCard } from './project/ProjectCard';

export const ApplicationViews = () => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("TimeWizard_users", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("TimeWizard_users") !== null)
    }

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                {/* Renders auth and login */}
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />


                <Route path="/projects" element={<ProjectCard />} />
            </Routes>
        </>
    )






}