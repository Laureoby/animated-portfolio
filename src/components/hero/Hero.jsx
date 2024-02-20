import { motion } from "framer-motion";
import "./hero.scss";

//aninamtion texte de présentation du Hero
const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1, 
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity,
        },
    },
};

//pour le texte qui défile en arrière plan
const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};

//code principal
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
            <motion.div 
                className="txtContainer" 
                variants={textVariants} 
                initial="initial" 
                animate="animate">
                <motion.h2 variants={textVariants}>LAURE OBY</motion.h2>
                <motion.h1 variants={textVariants}>Front-end developer <br />
                    and graphic designer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>See the latest works</motion.button>
                    <motion.button variants={textVariants}>Contact me</motion.button>
                </motion.div>
                <motion.img src="/scroll.png" alt="scroll image" variants={textVariants} animate="scrollButton"/>
            </motion.div>
            </div>
            <motion.div 
                className="slidingTxtContainer" 
                variants={sliderVariants} 
                initial="initial" 
                animate="animate">
                Creative, passionate, hard worker
            </motion.div>
            <div className="imgContainer">
                <img src="/oby.png" alt="hero image" />
            </div>
        </div>
    );
}
 
export default Hero;