import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import RequestOtpPage from '../pages/RequestOTPPage/RequestOTPPage'

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}  >
      <Routes>
        <Route exact path='/' element={<div>Home Page</div>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/request-otp' element={<RequestOtpPage/>}/>
        <Route path='/*' element={<div>Error Page</div>}/>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
