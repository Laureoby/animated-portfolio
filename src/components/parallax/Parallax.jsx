import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const yText = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "10%"]);

    return (  
        <motion.div className="parallax" 
        ref={ref}
        style={{background: type==="services" ? 
        "linear-gradient(180deg, #0c0c1d, #111132)" :
        "linear-gradient(180deg, #0c0c1d, #505064)"}}>
            <motion.h1 style={{y: yText}}>
                {type === "services" ? "What we do? ": "What we did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{
                y: yBg,
                backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`
            }}></motion.div>
            <motion.div style={{x: yBg}} className="stars"></motion.div>
        </motion.div>
    );
}
 
export default Parallax;