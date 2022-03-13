import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {AboutScreen} from './AboutScreen'
import {LoginScreen} from './LoginScreen'
import {HomeScreen} from './HomeScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />


                <div className='container'>
                    <Routes>
                        <Route path='/' element={<HomeScreen />}/>
                        <Route path='/about' element={<AboutScreen />}/>
                        <Route path='/login' element={<LoginScreen />}/>
                        <Route path='*' element={<Navigate replace to='/' />}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
