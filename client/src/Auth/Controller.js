
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import {Login} from './Login';
import {Signup} from './SignUp';
import { Dashboard } from '../Dashboard/Dashboard'


const Controller = () => {
    const auth = useAuth();
    return (
        <>  
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {auth.isLoggedIn && auth.user && (
                        <>
                        <Route path= "/dashboard" element={<Dashboard/>} />
                        </>
                    )}

                    {/* <Route path='/home' element = {<Home/>} /> */}

                </Routes>
            </BrowserRouter>
        </>
    )
}

export { Controller };