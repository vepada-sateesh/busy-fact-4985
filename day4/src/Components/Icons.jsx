import { IconName } from "react-icons/bs";

 import { BsPinterest } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Icons = () => {
  return (
    <div style={{display:"flex",margin:"10px"}}>
    <BsPinterest style={{margin:"10px",backgroundColor:"#D83236"}}/>
    <FaFacebook style={{margin:"10px",backgroundColor:"#3B5998"}} />
    <IoLogoTwitter style={{margin:"10px",backgroundColor:"blue"}} />
    <DiGithubBadge style={{margin:"10px",backgroundColor:"#grey"}} />
</div>
  )
}

export default Icons