import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Products() {
  const [quant ,setquant] = useState(0)
  const handledec=()=>{
    setquant(quant-1)
  }
  return (
    <Container>
      <Row>
      <Col>
        <div style={{textAlign:"end",color:"#BA5253",fontSize:"10px",border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>GET 37% OFF<span style={{color:"red"}}>*</span></div>
        <img src="https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg" alt="" width={"120px"} height={"150px"}/>
        <h6 style={{color:"#99999",fontSize:"5px",textAlign:"start",paddingLeft:"5px"}}>Fresho</h6>
        <a style={{color:"black",textDecoration:"none",fontSize:"9px"}} href="/">Carrot - Orange (Loose)</a>
        <select style={{border:"0.5px solid grey",fontSize:"9px",padding:"0px 15px "}} name="" id="">
          <option value="">1kg -Rs 750</option>
        </select>
        <div>
          <span style={{fontSize:"8px"}}>MRP</span> <span style={{textDecoration:"lineThrough",fontSize:"8px"}}>RS-124.00</span> <span style={{fontSize:"12px"}}>Rs-78</span>
          <br />
          <span style={{fontSize:"8px",color:"#333333"}}>Standard Delivery: Tomorrow</span><br />
          <span style={{fontSize:"8px",color:"#333333"}}>3:00PM - 7:30PM</span>
          <div><button onClick={handledec} disabled={quant==0} style={{fontSize:"10px",padding:"0px 3px",color:"grey",border:"0.5px solid grey"}}>-</button><input style={{fontSize:"10px",border:"0.5px solid grey",backgroundColor:"#FCE681",width:"40%",color:"black"}} type="text" placeholder={`${quant} Items`} /><button onClick={()=>setquant(quant+1)} style={{fontSize:"10px",color:"grey",padding:"0px 3px",border:"0.5px solid grey"}}>+</button></div>
        </div>
      </Col>
      <Col>
        <div style={{textAlign:"end",color:"#BA5253",fontSize:"10px",border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>GET 37% OFF<span style={{color:"red"}}>*</span></div>
        <img src="https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg" alt="" width={"120px"} height={"150px"}/>
        <h6 style={{color:"#99999",fontSize:"5px",textAlign:"start",paddingLeft:"5px"}}>Fresho</h6>
        <a style={{color:"black",textDecoration:"none",fontSize:"9px"}} href="/">Carrot - Orange (Loose)</a>
        <select style={{border:"0.5px solid grey",fontSize:"9px",padding:"0px 15px "}} name="" id="">
          <option value="">1kg -Rs 750</option>
        </select>
        <div>
          <span style={{fontSize:"8px"}}>MRP</span> <span style={{textDecoration:"lineThrough",fontSize:"8px"}}>RS-124.00</span> <span style={{fontSize:"12px"}}>Rs-78</span>
          <br />
          <span style={{fontSize:"8px",color:"#333333"}}>Standard Delivery: Tomorrow</span><br />
          <span style={{fontSize:"8px",color:"#333333"}}>3:00PM - 7:30PM</span>
          <div><button disabled={quant==0} style={{fontSize:"10px",padding:"0px 3px",color:"grey",border:"0.5px solid grey"}}>-</button><input style={{fontSize:"10px",border:"0.5px solid grey",backgroundColor:"#FCE681",width:"40%",color:"black"}} type="text" placeholder={`0 Items`} /><button  style={{fontSize:"10px",color:"grey",padding:"0px 3px",border:"0.5px solid grey"}}>+</button></div>
        </div>
      </Col>
      <Col>
        <div style={{textAlign:"end",color:"#BA5253",fontSize:"10px",border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>GET 37% OFF<span style={{color:"red"}}>*</span></div>
        <img src="https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg" alt="" width={"120px"} height={"150px"}/>
        <h6 style={{color:"#99999",fontSize:"5px",textAlign:"start",paddingLeft:"5px"}}>Fresho</h6>
        <a style={{color:"black",textDecoration:"none",fontSize:"9px"}} href="/">Carrot - Orange (Loose)</a>
        <select style={{border:"0.5px solid grey",fontSize:"9px",padding:"0px 15px "}} name="" id="">
          <option value="">1kg -Rs 750</option>
        </select>
        <div>
          <span style={{fontSize:"8px"}}>MRP</span> <span style={{textDecoration:"lineThrough",fontSize:"8px"}}>RS-124.00</span> <span style={{fontSize:"12px"}}>Rs-78</span>
          <br />
          <span style={{fontSize:"8px",color:"#333333"}}>Standard Delivery: Tomorrow</span><br />
          <span style={{fontSize:"8px",color:"#333333"}}>3:00PM - 7:30PM</span>
          <div><button disabled={quant==0} style={{fontSize:"10px",padding:"0px 3px",color:"grey",border:"0.5px solid grey"}}>-</button><input style={{fontSize:"10px",border:"0.5px solid grey",backgroundColor:"#FCE681",width:"40%",color:"black"}} type="text" placeholder={`0 Items`} /><button  style={{fontSize:"10px",color:"grey",padding:"0px 3px",border:"0.5px solid grey"}}>+</button></div>
        </div>
      </Col>
      <Col>
        <div style={{textAlign:"end",color:"#BA5253",fontSize:"10px",border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>GET 37% OFF<span style={{color:"red"}}>*</span></div>
        <img src="https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg" alt="" width={"120px"} height={"150px"}/>
        <h6 style={{color:"#99999",fontSize:"5px",textAlign:"start",paddingLeft:"5px"}}>Fresho</h6>
        <a style={{color:"black",textDecoration:"none",fontSize:"9px"}} href="/">Carrot - Orange (Loose)</a>
        <select style={{border:"0.5px solid grey",fontSize:"9px",padding:"0px 15px "}} name="" id="">
          <option value="">1kg -Rs 750</option>
        </select>
        <div>
          <span style={{fontSize:"8px"}}>MRP</span> <span style={{textDecoration:"lineThrough",fontSize:"8px"}}>RS-124.00</span> <span style={{fontSize:"12px"}}>Rs-78</span>
          <br />
          <span style={{fontSize:"8px",color:"#333333"}}>Standard Delivery: Tomorrow</span><br />
          <span style={{fontSize:"8px",color:"#333333"}}>3:00PM - 7:30PM</span>
          <div><button disabled={quant==0} style={{fontSize:"10px",padding:"0px 3px",color:"grey",border:"0.5px solid grey"}}>-</button><input style={{fontSize:"10px",border:"0.5px solid grey",backgroundColor:"#FCE681",width:"40%",color:"black"}} type="text" placeholder={`0 Items`} /><button  style={{fontSize:"10px",color:"grey",padding:"0px 3px",border:"0.5px solid grey"}}>+</button></div>
        </div>
      </Col>
      <Col>
        <div style={{textAlign:"end",color:"#BA5253",fontSize:"10px",border:"1px solid white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>GET 37% OFF<span style={{color:"red"}}>*</span></div>
        <img src="https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg" alt="" width={"120px"} height={"150px"}/>
        <h6 style={{color:"#99999",fontSize:"5px",textAlign:"start",paddingLeft:"5px"}}>Fresho</h6>
        <a style={{color:"black",textDecoration:"none",fontSize:"9px"}} href="/">Carrot - Orange (Loose)</a>
        <select style={{border:"0.5px solid grey",fontSize:"9px",padding:"0px 15px "}} name="" id="">
          <option value="">1kg -Rs 750</option>
        </select>
        <div>
          <span style={{fontSize:"8px"}}>MRP</span> <span style={{textDecoration:"lineThrough",fontSize:"8px"}}>RS-124.00</span> <span style={{fontSize:"12px"}}>Rs-78</span>
          <br />
          <span style={{fontSize:"8px",color:"#333333"}}>Standard Delivery: Tomorrow</span><br />
          <span style={{fontSize:"8px",color:"#333333"}}>3:00PM - 7:30PM</span>
          <div><button disabled={quant==0} style={{fontSize:"10px",padding:"0px 3px",color:"grey",border:"0.5px solid grey"}}>-</button><input style={{fontSize:"10px",border:"0.5px solid grey",backgroundColor:"#FCE681",width:"40%",color:"black"}} type="text" placeholder={`0 Items`} /><button  style={{fontSize:"10px",color:"grey",padding:"0px 3px",border:"0.5px solid grey"}}>+</button></div>
        </div>
      </Col>
      </Row>
    </Container>
  );
}

export default Products;