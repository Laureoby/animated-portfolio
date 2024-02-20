import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"React website",
        img:"/site1.jpg",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptatibus odit ad, iste ea quod tempora. Consequuntur laudantium ut corporis id animi cupiditate, in sint, sed iusto amet nisi distinctio!",
    },
    {
        id:2,
        title:"Wordpress website",
        img:"/site2.jpg",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptatibus odit ad, iste ea quod tempora. Consequuntur laudantium ut corporis id animi cupiditate, in sint, sed iusto amet nisi distinctio!",
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"/site3.jpg",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptatibus odit ad, iste ea quod tempora. Consequuntur laudantium ut corporis id animi cupiditate, in sint, sed iusto amet nisi distinctio!",
    },
    {
        id:4,
        title:"Mobile App",
        img:"/site4.jpg",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptatibus odit ad, iste ea quod tempora. Consequuntur laudantium ut corporis id animi cupiditate, in sint, sed iusto amet nisi distinctio!",
    },
];
   
const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        //offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0,1], [-100,100]);
    return(
        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imgContainer" ref={ref}>
                <img src={item.img} alt="image site" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
    return ( 
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{scaleX}}></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
     );
}
 
export default Portfolio;