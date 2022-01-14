import React, {useEffect, useState} from 'react';
import './Navigation.scss'
import {motion} from "framer-motion";
import {useWindowScrollPosition} from "rooks";

import instagram from "../../assets/vector/Elean-Instagram.svg";
import vk from "../../assets/vector/Elean-VK.svg";
import facebook from "../../assets/vector/Elean-Facebook.svg";
import logo from "../../assets/vector/Elean-Logo.svg";
import heart from "../../assets/vector/Elean-Heart.svg";
import bag from "../../assets/vector/Elean-Bag.svg";

export const Navigation = (props) => {
    const [anim, setAnim] = useState(false)
    const {scrollX, scrollY} = useWindowScrollPosition();
    useEffect(() => {
        scrollY > 250 ? setAnim(true) : setAnim(false)
    }, [scrollY])

    return (
        <>
            <nav>
                <motion.div className="nav-menu"
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
                </motion.div>
            </nav>
        </>
    )
}