import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginComponent from '../pages/LoginPageComponent/LoginPageComponent'

const AppRoutes = () => {
  return (
    <div className=''>
      <Suspense fallback={<div>Loading...</div>}  >
      <Routes>
        <Route exact path='/' element={<div>Home Page</div>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/signup' element={<div>Signup</div>}/>
        <Route path='/*' element={<div>Error Page</div>}/>
      </Routes>
    </Suspense>
    </div>
  )
}

export default AppRoutes
