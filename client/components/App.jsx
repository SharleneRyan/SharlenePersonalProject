import React from 'react'
import Buttons from './Buttons'
import Contact from './Contact'
import Footer from './Footer'
import Grid from './Grid'
import Header from './Header'
import Sound from './Sound'


const App = () => (
  <div className='container'>
  <Header />
  <Sound />
  <Grid />
  <Contact />
  <Buttons  />
  <Footer />
  </div>
  
)



// function showBox (contact) {
//   return <Box name={Box.name} service={Box.service} compony ={Box.compony } images={Box.images}cellphone={Box.cellphone} landline ={Box.landline } email={Box.email}website ={Box.website } address={Box.address}/>
// }

// const App = () => (
//   <div className='container'>
//     <img className='spinner' src='/image/logo.png'/>
//     <Subtitle text=''/>
//     <div>{Box.map(showBox)}</div>
//   </div>
  
// )


// const App = () => {
//   return (
//     <div>
//       <div className="nav-bar">
//        <h1 font color = 'white'>COMMUNITY SERVICE APP</h1>
//        </div>
//     </div>
   
//   )
// }

export default App






