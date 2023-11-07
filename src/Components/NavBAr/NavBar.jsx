import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <Link to = {'/'}  className = 'navbar-brand'> <i className='fa fa-mobile text-warning'/>Contact <span className='text-warning'>Manager</span></Link>
            
        </nav>
    </React.Fragment>
    </div>
  )
}

export default NavBar
