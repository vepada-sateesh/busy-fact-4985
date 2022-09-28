import React from 'react'
import Navbar from '../Components/Navbar'
import IndividualIntervalsExample from "../Components/Slideshow"
import RowColLayoutColWidthBreakpointExample from "../Components/fleximages"
import Paymentflex from "../Components/paymetflex"
import Button from 'react-bootstrap/Button';
import Products from "../Components/Products"
import Mostpopular from "../Components/Mostpopular"
import Topoffer from "../Components/Topoffer"
import Fruits from "../Components/Fruits"
import Snackstore from "../Components/Snacksstore"
import Cleaning from "../Components/Cleaning"
import Beauty from '../Components/Beauty'
import Staples from '../Components/Staples'
import HomeKitchen from "../Components/HomeKitchen"
import OffersSlider from "../Components/OffersSlider"
import Brands from '../Components/Brands'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <IndividualIntervalsExample/>
      <RowColLayoutColWidthBreakpointExample/>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Bank Offers</div>
      <Paymentflex/>
      {/* <Products/> */}
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Most Popular</div>
      <Mostpopular/>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Top Offer</div>
      <Topoffer/>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Your Daily Staples</div>
      <Staples/>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Beverages</div>
      <Fruits/>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Snacks Store</div>
      <Snackstore/>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Cleaning & Household</div>
     <Cleaning/>
     <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Beauty and Hygiene</div>
     <Beauty/>
     <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Home and Kitchen</div>
    <HomeKitchen/>
    <OffersSlider/>
    <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",marginTop:"15px"}}>Brand Store</div>
    <Brands/>
    </div>

    
  )
}

export default Home