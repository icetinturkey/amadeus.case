import React from 'react';
import { motion } from "framer-motion";
import sun from '../resources/sun.svg';
import moon from '../resources/moon.svg';
import {useState,useEffect,useRef} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import ship0 from "../resources/arrival.svg";
import ship1 from "../resources/departure.svg";
import ship2 from "../resources/slash.svg";
import ship3 from "../resources/ruler.svg";

function Header() {
    const location = useLocation();
    const inputElement = useRef();
    if(inputElement.current && location.pathname==="/"){
        inputElement.current.value = "";
    }
    const letters = ['A','M','A','D','E','U','S'];
    const [dark, setDark] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('dark')){
            document.body.classList.add('dark');
            setDark(true);
        }
        window.addEventListener('scroll', () => {setTooltip(false)});
    },[]);
    const changeTheme = () => {
        if(dark) localStorage.removeItem("dark");
        else localStorage.setItem("dark","true");
        document.body.classList.toggle("dark");
        setDark(prev => !prev);
    }
    const doSearch = (e) => {
        e.preventDefault();
        const searched = e.currentTarget.elements.text.value.replace(/ /g,'-');
        navigate("/search/"+searched);
    }
    const openTooltip = () => {
        setTooltip(!tooltip);
    }

    return (
        <div className="border-b border-white/[.4] grid grid-cols-1 md:grid-cols-6">
            <div className="flex justify-center h-14 col-span-2 pl-0 md:pl-8">
                <div className="flex items-center gap-3">
                    {letters.map((item, index) => (
                        <motion.span animate={{y: [0, -2, 0]}} transition={{delay: index/10, duration: 0.5, ease: "easeInOut", times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 2}} key={index} className="h-10 text-black/[.7] text-2xl dark:text-white/[.9]" style={{fontFamily:"Star Jedi Outline"}}>{item}</motion.span>
                    ))}
                </div>
            </div>
            <div className="h-14 col-span-3 flex flex-col justify-center">

            </div>
            <div className="h-14 flex items-center justify-evenly">
                <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} type="button" className="w-6 h-6" onClick={changeTheme}><img className="w-full h-full block" src={dark?sun:moon} alt="" /></motion.button>
                {/* TOOLTIP - start */}
                <button className="relative" onClick={openTooltip}>
                    <motion.svg whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block fill-gray-800 dark:fill-slate-200" viewBox="0 0 512 512">
                        <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM296 336H280V248C280 234.75 269.25 224 256 224H224C210.75 224 200 234.75 200 248S210.75 272 224 272H232V336H216C202.75 336 192 346.75 192 360S202.75 384 216 384H296C309.25 384 320 373.25 320 360S309.25 336 296 336ZM256 192C273.674 192 288 177.672 288 160C288 142.326 273.674 128 256 128S224 142.326 224 160C224 177.672 238.326 192 256 192Z"/>
                    </motion.svg>
                    <div className="tooltip" style={{opacity:`${tooltip?'1':'0'}`,visibility:`${tooltip?'visible':'hidden'}`}}>
                        <div className="font-font1 tracking-widest">amadeus case</div>
                        <div className="mt-3 font-font1 text-xs tracking-widest">Powered by React {React.version}</div>
                        <div className="mt-2 italic text-xs text-black dark:text-white font-thin">Tap here for close this bubble.</div>
                    </div>
                </button>
                {/* TOOLTIP - start */}
            </div>
        </div>
    );
}
export default Header;