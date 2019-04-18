import React from 'react'
import FooterData from '../../data/footer'

const Footer = props => {
  return (
    <div className="Footer">
    <footer>
      {FooterData.copyright}
      {FooterData.author}
    </footer>
  </div>
  )
}
export default Footer