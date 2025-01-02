import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div className=''>
      <Suspense fallback={<div>Loading...</div>}  >
      <Routes>
        <Route exact path='/' element={<div>Home Page</div>}/>
        <Route path='/login' element={<div>Login page</div>}/>
        <Route path='/signup' element={<div>Signup</div>}/>
        <Route path='/*' element={<div>Error Page</div>}/>
      </Routes>
    </Suspense>
    </div>
  )
}

export default AppRoutes
