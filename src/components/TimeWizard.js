import React,  {useState} from "react";
import { Navbar } from "./nav/nav";
import { ApplicationViews } from "./ApplicationViews"
import "./TimeWizard.css"

export const TimeWizard = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    
    return (
        <>
            <Navbar clearUser={clearUser} isAuthenticated={isAuthenticated} />
            <ApplicationViews
            setAuthUser={setAuthUser}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            />
        </>
    )
    
}