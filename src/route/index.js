import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from "../login/index"
import Register from './register/index';

function Router() {

  return (
    <div>
     
     <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />
     </Routes>

    </div>
  )

}

export default Router;