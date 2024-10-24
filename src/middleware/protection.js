import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function Protection() {
  const User = true
  return !!User? <Outlet />: <Navigate to = {"/login"} />
}

export default Protection
