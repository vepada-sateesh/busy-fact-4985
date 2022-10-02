import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const ProductPage = () => {
  return (
    <div>
        <Container style={{display:"flex"}}>
            <div style={{width:"300px"}}><img src="https://www.bigbasket.com/media/uploads/p/l/40072320_2-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg" alt="" height="100px" width="450px"/></div>
            <div>
                <a href="/" style={{color:"#666666",fontSize:'12px',textAlign:"start"}}>Fresho</a>
                <br />
                <h1 style={{color:"#222222",width:"60%",marginLeft:"40%",textAlign:"start"}}>Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 12 pcs</h1>
                <sapn style={{marginLeft:"15%"}}>MRP</sapn> <span style={{color:"#666666"}}>Price:Rs 82</span><span style={{fontSize:"7px"}}>(Rs.6.83/pc)</span>
                <br />
                <span style={{color:"#BA5252",fontSize:"7px",fontWeight:"bold"}}>You Save:25%</span>
                
                <span style={{color:"#666666",fontSize:"7px"}}>(Inclusive of all taxes)</span>
                <br />
                <button onClick={()=>{alert("item added to the cart successfully")}} style={{backgroundColor:"#84C225",padding:"2px 30px",color:"white",fontSize:"10px"}}>ADD TO BASKET</button><button style={{border:"0.3px solid grey",padding:"2px 3px",fontSize:"10px"}}>SAVE</button>
                <div style={{color:"#979797",fontSize:"8px"}}>Standard: Tomorrow 3:00PM - 7:30PM</div>
                <span>Pack Sizes</span>
                <div style={{backgroundColor:"#84C22533",display:"flex",justifyContent:"space-between",width:"50%",marginLeft:"30%"}}>
                    <div><p>12 pcs</p></div>
                    <div><span>Rs 82</span><span style={{color:"#BA5252",fontSize:"7px",fontWeight:"bold"}}>25% off</span></div>
                    <div style={{backgroundColor:"#9CC63D",padding:"0px 5px"}}>🗸</div>
                </div>
            </div>
        </Container>
        <div ><h3>Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free</h3></div>
        <p style={{fontSize:"7px",width:"80%",textAlign:"start",marginLeft:"10%"}}>Eggs are one of the common food items in most of the households. From breakfast to dinner, eggs are indulged in various ways. Poached, boiled, fried; we all have our own favourite choices. Not only are they delicious, but they are also crammed with health benefits. It is one of the most in-expensive sources of high protein. These are one of nature's most wholesome and cost-effective foods. An egg can give you a health kick in no time at all! It is the ideal ingredient to add to your child's breakfast for growth and development. </p>
        <ul style={{textAlign:"start",fontSize:"7px",marginLeft:"10%"}}>
            <li>Antibiotic free </li>
            <li>Free from growth hormones </li>
            <li>Carefully selected </li>
            <li>Rich in omega 3 </li>
        </ul>
        <p style={{fontSize:"7px",width:"80%",textAlign:"start",marginLeft:"10%"}}>Fresho is our in-house brand of fresh meat, poultry, and seafood. We take utmost care in selecting the best suppliers to provide you with high quality and succulent products. Every product is stored in our cold storage right until your doorstep ensuring freshness and utmost hygiene.</p>

    </div>
  )
}

export default ProductPage