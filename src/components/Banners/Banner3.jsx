import React from 'react';
import BannerPng from "../../assets/fruits/banner-bg.jpg";
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';
import { IoBagHandleOutline } from "react-icons/io5";

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
};


const Banner3 = () => {
    return (
    <section className='container mb-12'>
        <div style={bgStyle} 
        className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl'>
            <div></div>
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}

                className='text-3xl lg:text-6xl font-bold uppercase'>{" "}
                    get fresh fruit today</motion.h1>
                <motion.p
                    variants={FadeLeft(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                    
                >Order now and enjoy the freshest fruits delivered straight 
                to your doorstep! At Fruity Delights, we guarantee top-quality, 
                handpicked fruits for your delight. Don't wait savor the taste 
                of nature's best today.Experience the convenience of fresh fruit 
                delivered right to your door with Fruity Delights! Our "Order Now" 
                feature ensures you get the best selection of handpicked, premium 
                fruits with just a few clicks. Whether you're craving seasonal 
                favorites or exotic varieties, we promise top-quality, delicious 
                fruits every time. Don't wait click "Order Now" and treat yourself 
                to nature's finest today!</motion.p>

                    
                    <motion.div
                        variants={FadeLeft(1.1)}
                        initial="hidden"
                        animate="visible"

                        className='flex justify-center md:justify-start'>
                            <button className='primary-btn flex items-center gap-2'>
                            <span>
                            <IoBagHandleOutline></IoBagHandleOutline>
                            </span>
                            Order Now</button>
                    </motion.div>
                    </div>

            </div>

        </div>
    </section>
)
};

export default Banner3;