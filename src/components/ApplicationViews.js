import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from "../components/Home"
import  { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import { ProjectList } from './project/ProjectList';
import { ProjectTask } from './project/ProjectTask'

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("TimeWizard_users", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("TimeWizard_users") !== null)
    }


    return (
        <>
            <Routes>

                {/* This will render the home page when http://localhost:3000/ */}
                <Route path="/" element={<Home />} />


                {/* Renders auth and login */}
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />


                <Route exact path="/projects" element={<PrivateRoute> <ProjectList /></PrivateRoute>} />
                
            </Routes>
        </>
    )






}