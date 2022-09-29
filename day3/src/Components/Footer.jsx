import React from 'react'
import Icons from './Icons'
import PaymentIcons from './PaymetICons'

const Footer = () => {
  return (
    <div>
    <div style={{display:"flex",wight:"80%",marginTop:"20px",justifyContent:"space-around"}} >
        <div style={{textAlign:"start",fontSize:"12px",color:"#808080"}}>
            <div><a style={{color:"#6CD138"}} href="/">bigbasket</a></div>
            <div><p>About us</p></div>
            <div><p>In News</p></div>
            <div><p>Green bigbasket</p></div>
            <div><p>Privacy Policy</p></div>
            <div><p>Affiliate</p></div>
            <div><p>Terms and Conditions</p></div>
            <div><p>Careers At bigbasket</p></div>
            <div><p>bb Instant</p></div>
            <div><p>bb Daily</p></div>
            <div><p>bb Blog</p></div>
            <div><p>bbnow</p></div>
        </div>
        <div style={{textAlign:"start",fontSize:"12px",color:"#808080"}}>
            <div><a style={{color:"#6CD138"}} href="/">Help</a></div>
            <div><p>FAQs</p></div>
            <div><p>Contact Us</p></div>
            <div><p>bb Wallet FAQs</p></div>
            <div><p>bb Wallet T&Cs</p></div>
            <div><p>Vendor Connect</p></div>

        </div>
        <div style={{textAlign:"start",fontSize:"12px",color:"#808080"}}>
            <div><a style={{color:"#6CD138"}} href="/">Download Our App</a></div>
            <div>
                <img src="https://www.bbassets.com/static/v2590/custPage/build/content/img/Google-App-store-icon.png" alt="" height={"30px"} width={"100px"} />
                <img src="https://www.bbassets.com/static/v2590/custPage/build/content/img/Apple-App-store-icon.png" alt="" height={"30px"} width={"100px"}/>
            </div>
            <div>bigbasket</div>

        </div>
        <div style={{textAlign:"start",fontSize:"12px",color:"#808080"}}>
            <div style={{color:"#6CD138"}}>Get Social With Us</div>
            <div><Icons/></div>

        </div>
    </div>
    <div style={{width:"80%",margin:"auto"}}>
            <div>
                <h4 style={{textAlign:"start",fontSize:"14px",color:"#6CD138"}}>POPULAR CATEGORIES:</h4>
                <span style={{textAlign:"start",fontSize:"10px"}}>
                        Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes,</span>
            </div>
            <div>
                <h4 style={{textAlign:"start",fontSize:"14px",color:"#6CD138"}}>POPULAR CATEGORIES:</h4>
                <span style={{textAlign:"start",fontSize:"10px"}}> 
                        Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes,</span>
            </div>
            <div>
                <h4 style={{textAlign:"start",fontSize:"14px",color:"#6CD138"}}>CITIES WE SERVE:</h4>
                <span style={{textAlign:"start",fontSize:"10px"}}>
                    
                    Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra, 
                </span>
            </div>
            <div>
                <h4 style={{textAlign:"start",fontSize:"14px",color:"#6CD138"}}>PAYMENT OPTIONS:</h4>
                <span><PaymentIcons/></span>
            </div>
        </div>
</div>
  )
}

export default Footer

