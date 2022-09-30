import Container from 'react-bootstrap/esm/Container'
import React from 'react'
import { Link } from 'react-router-dom'
import CartIcons from './CartIcon'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Navbar = () => {
  const {authState} = useContext(AppContext)
  console.log(authState.token,"token")
  return (
    <div>
        <Container style={{postion:"fixed"}}>
            <div style={{display:"flex",justifyContent:"space-between",height:"50px"}}>
              <div><Link to="/"><img src="https://tse2.mm.bing.net/th?id=OIP.kqElrV8y9kt64NDnfwqf6gHaFQ&pid=Api&P=0" alt="" width={"75px"} height={"200px"} /></Link></div>
              <input type="text" placeholder='Search for Products..' style={{border:"0.5px solid grey" ,height:"20px", width:"530px",marginTop:"10px"}}/>
              <div style={{marginTop:"10px"}}><Link to="/login">{authState.token===null?"Login/Signup":"Sateesh"}</Link></div>
              <span><Link to="/Cart"><CartIcons/></Link></span>
            </div>
        </Container>
    </div>
  )
}

export default Navbar