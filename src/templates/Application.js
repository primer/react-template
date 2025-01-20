import React from 'react'
import { AppHeader } from '../components/header.jsx'

function Application({ children }) {
    return (
      <React.Fragment>
        <AppHeader />
        {children}
      </React.Fragment>
    )
}

export default Application
