import { IconName } from "react-icons/bs";

 import { RiVisaLine } from "react-icons/ri";
import { SiPaytm } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";

const PaymentIcons = () => {
  return (
    <div style={{display:"flex",margin:"10px"}}>
    <RiVisaLine style={{margin:"10px",backgroundColor:"#D83236"}}/>
    <FaCcMastercard style={{margin:"10px",backgroundColor:"#3B5998"}} />
    <SiPaytm style={{margin:"10px",backgroundColor:"blue"}} />
    < BsPaypal style={{margin:"10px",backgroundColor:"#grey"}} />
</div>
  )
}

export default PaymentIcons