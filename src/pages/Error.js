import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
 const Error = () => {
  return (
    
   
    <Hero >
    <Banner title="Error 404" subtitle='page not found'>
    <Link to='/' className='btn-primary'>Return Home</Link>
    </Banner>
  </Hero>
  
  )
}

export default Error;