import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header  from '../component/Header/Header.js'

const Root = () => {
  return (
    <Fragment>
      <Header />
      <div className='main'><Outlet /></div>
    </Fragment>
  )
}
export default Root;


