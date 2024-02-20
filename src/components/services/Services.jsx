import { useRef } from "react";
import "./services.scss";
import { animate, color, motion} from "framer-motion";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:2,
            staggerChildren:0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();
    // const isInView = useInView(ref, {margin:"-100px"});

    return ( 
        <div className="services" 
        variants={variants} 
        initial="initial" 
        animate="animate"
        ref={ref}>
            <div className="textContainer" variants={variants}>
                <p>I'm focus to helping your brand grow 
                    <br />and move forward</p><hr />
            </div>
            <div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Idea</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>For your</motion.b> Business!</h1>
                </div>
                <button>WHAT WE DO?</button>
            </div>
            <div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                    <h2>Web site</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Exercitationem, ullam, aliquid rem laboriosam nobis eaque dicta mollitia omnis 
                        facere ad sunt quas dolor tenetur consequatur reiciendis, laudantium temporibus
                        dolore? Repudiandae.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                    <h2>Web site</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Exercitationem, ullam, aliquid rem laboriosam nobis eaque dicta mollitia omnis 
                        facere ad sunt quas dolor tenetur consequatur reiciendis, laudantium temporibus
                        dolore? Repudiandae.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                    <h2>Web site</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Exercitationem, ullam, aliquid rem laboriosam nobis eaque dicta mollitia omnis 
                        facere ad sunt quas dolor tenetur consequatur reiciendis, laudantium temporibus
                        dolore? Repudiandae.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
                    <h2>Web site</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Exercitationem, ullam, aliquid rem laboriosam nobis eaque dicta mollitia omnis 
                        facere ad sunt quas dolor tenetur consequatur reiciendis, laudantium temporibus
                        dolore? Repudiandae.</p>
                    <button>Go</button>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Services;