import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {useWindowScrollPosition} from "rooks";
import './App.scss';
import instagram from './assets/vector/Elean-Instagram.svg'
import vk from './assets/vector/Elean-VK.svg'
import facebook from './assets/vector/Elean-Facebook.svg'
import heart from './assets/vector/Elean-Heart.svg'
import bag from './assets/vector/Elean-Bag.svg'
import logo from './assets/vector/Elean-Logo.svg'

import main from './assets/media/main-image.webp'
import main1 from './assets/media/main1.webp'
import main2 from './assets/media/main2.webp'
import main3 from './assets/media/main3.webp'
import main4 from './assets/media/main4.webp'
import main5 from './assets/media/main5.webp'
import main6 from './assets/media/main6.webp'

import {Products} from "./components/Products/Products";
import {About} from "./components/About/About";

export const ImageBlock = (props) => {
    return (
        <div className='image-block'
             style={{
                 width: props.small ? 324 : 662,
                 height: props.small ? 436 : 791
             }}>
            <div className="img-title">
                <h4>{props.titles}</h4>
            </div>
            <div className="image"
                 style={{
                     height: props.small ? 401 : 756
                 }}
            >
                <img src={props.image} alt=""/>
            </div>
        </div>
    )
}


function App() {
    const [anim, setAnim] = useState(false)
    const {scrollX, scrollY} = useWindowScrollPosition();
    useEffect(() => {
        scrollY > 250 ? setAnim(true) : setAnim(false)
    }, [scrollY])
    return (
        <>
            <nav>
                <motion.nav className="nav-menu"
                            transition={{ease: "easeInOut", duration: .4}}
                            animate={{height: anim ? 60 : 100}}>
                    <div className="container">
                        <div className="nav-wrapper">
                            <div className="burger-and-social">
                                <motion.div className="burger-menu"
                                            transition={{ease: "easeInOut", duration: .4}}
                                            animate={{marginRight: anim ? 43 : 61}}
                                >
                                    <span>{}</span>
                                    <span>{}</span>
                                    <span>{}</span>
                                </motion.div>
                                <div className="social-link-icons">
                                    <a href="/">
                                        <img src={instagram} alt=""/>
                                    </a>
                                    <a href="/">
                                        <img src={vk} alt=""/>
                                    </a>
                                    <a href="/">
                                        <img src={facebook} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <motion.div
                                className="logo"
                                transition={{ease: "easeInOut", duration: .4}}
                                animate={{width: anim ? 20 : 221}}
                            >

                                <img src={logo} alt=""/>
                            </motion.div>
                            <div className="contacts-and-cart">
                                <div className="contacts">
                                    <motion.p
                                        transition={{ease: "easeInOut", duration: .4}}
                                        animate={{transform: anim ? 'translateX(100%)'
                                                : 'translateX(0%)'}}
                                    >+7 (495) 150 - 14 - 77
                                    </motion.p>
                                </div>
                                <div className="cart-wrap">
                                    <div className="favorite">
                                        <span>0</span>
                                        <img src={heart} alt=""/>
                                    </div>
                                    <div className="cart">
                                        <span>13</span>
                                        <img src={bag} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <motion.div className="nav-list-menu"
                                        transition={{ease: "easeInOut", duration: .4}}
                                        animate={{bottom: anim ? 20 : 15}}>
                                <motion.ul
                                    transition={{ease: "easeInOut", duration: .4}}
                                    animate={{marginLeft: anim ? 45 : 0}}>
                                    <li>НОВИНКИ</li>
                                    <li>КАТЕГОРИИ</li>
                                    <li>НАШИ КОЛЛЕКЦИИ</li>
                                </motion.ul>
                                <motion.ul
                                    transition={{ease: "easeInOut", duration: .4}}
                                    animate={{marginLeft: anim ? 45 : 0}}>
                                    <li>ПОКУПАТЕЛЯМ</li>
                                    <li>О БРЕНДЕ</li>
                                    <li>ШОУРУМ</li>
                                    <li>КОНТАКТЫ</li>
                                </motion.ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.nav>
            </nav>
            <main>
                <img src={main} alt=""/>
            </main>
            <section>
                <div className="container">
                    <div className="image-flx-wrapper">
                        <div className="image-column-one">
                            <ImageBlock image={main1} titles={'Новинки'}/>
                            <div className="small-images">
                                <ImageBlock image={main2} titles={'Смокинги'} small={true}/>
                                <ImageBlock image={main3} titles={'Брюки'} small={true}/>
                            </div>
                        </div>
                        <div className="image-column-two">
                            <div className="small-images">
                                <ImageBlock image={main4} titles={'Акции'} small={true}/>
                                <ImageBlock image={main5} titles={'Костюмы'} small={true}/>
                            </div>
                            <ImageBlock titles={'Платья'} image={main6}/>
                        </div>
                    </div>
                </div>
            </section>
            <Products/>
            <About/>

        </>
    );
}


export default App;
