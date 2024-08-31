import React from 'react';
import BannerPng from "../../assets/fruits/fruits-splash.png";
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';


const Banner = () => {
    return (
    <section className='bg-secondary/10'>
        <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
            <div className='flex justify-center items-center'>
                <motion.img
                    initial={{ opacity :0, scale: 0.5}}
                    whileInView={{ opacity: 1, scale: 1}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2}}
                    viewport={{ once: true}}
                    
                    src={BannerPng} alt='' className='w-[330px] md:max-w-[430px] h-full object-cover drop-shadow'>
                </motion.img>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}

                className='text-3xl lg:text-6xl font-bold uppercase'>{" "}
                    Brand Info</motion.h1>
                <motion.p
                    variants={FadeUp(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                    
                >Welcome to Fruity Delights, where the essence of 
                    nature’s bounty comes alive in every bite. At 
                    Fruity Delights, we are passionate about bringing 
                    you the freshest, highest quality fruits sourced 
                    from the finest orchards and farms around the world. 
                    Our commitment to excellence ensures that every 
                    fruit we offer is ripe, delicious, and packed with 
                    nutrients. Whether you crave the sweet juiciness 
                    of a perfectly ripened peach, the crisp snap of a 
                    fresh apple, or the exotic flavors of tropical fruits, 
                    Fruity Delights has something to satisfy every palate. 
                    Join us in celebrating the vibrant colors, tantalizing 
                    tastes, and healthful benefits of nature’s sweetest 
                    gifts. At Fruity Delights, freshness is our promise, 
                    and your delight is our mission.</motion.p>

                    
                    <motion.div
                        variants={FadeUp(1.1)}
                        initial="hidden"
                        animate="visible"

                        className='flex justify-center md:justify-start'>
                        <button className='primary-btn'>
                                Learn More</button>
                    </motion.div>
                    </div>

            </div>

        </div>
    </section>
)
};

export default Banner;