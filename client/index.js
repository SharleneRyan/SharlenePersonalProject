import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    <Buttons />,
    <Contacts />,
    <Footer />,
    <Grid />,
    <Header />,
    <Sound />,

    document.getElementById('app')
  )
})

