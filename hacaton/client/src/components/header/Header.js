import React from 'react'

import MainNav from './MainNav'
import Heart from './Heart'

import './Header.css'

const Header = () => {
  return (
    <header>
      <Heart />
      <MainNav />
    </header>
  )
}

export default Header