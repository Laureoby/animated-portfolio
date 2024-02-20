import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return ( <div className="navbar">
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration:0.7}}><img src="/logoBlanc.png" alt="logo" id="logo"/></motion.span>
            <div className="social">
                <a href="#"><img src="/email_blanc.png" alt="" /></a>
                <a href="#"><img src="/linkedin.png" alt="" /></a>
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/github_blanc.png" alt="" /></a>
            </div>
        </div>
    </div> );
}
 
export default Navbar;