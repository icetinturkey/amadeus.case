import { motion,AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AnimatedOutlet} from "../utils/AnimatedOutlet";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    const location = useLocation();
    return(
        <div className="flex justify-center m-0 sm:m-4">
            {/* BACKGROUND IMAGE - start */}
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="fixed w-full h-screen top-0 left-0 z-0" viewBox="10 10 80 80">
                <motion.path className="fill-cyan-500 dark:fill-cyan-600" animate={{rotate: [0, 360]}} transition={{duration: 20,ease: "easeInOut",times: [0, 1],repeat: Infinity,repeatDelay: 1}}
                             d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
                <motion.path className="fill-sky-400 dark:fill-sky-600" animate={{rotate: [0, 360]}} transition={{duration: 10,ease: "easeInOut",times: [0, 1],repeat: Infinity,repeatDelay: 1}}
                             d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
                <motion.path className="fill-blue-400 dark:fill-blue-600" animate={{rotate: [0, 360]}} transition={{duration: 20,ease: "easeInOut",times: [0, 1],repeat: Infinity,repeatDelay: 1}}
                             d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
                <motion.path className="fill-indigo-400 dark:fill-indigo-600" animate={{rotate: [0, 360]}} transition={{duration: 10,ease: "easeInOut",times: [0, 1],repeat: Infinity,repeatDelay: 1}}
                             d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
            </svg>
            {/* BACKGROUND IMAGE - end */}
            <div className="w-full sm:w-auto bg-white/30 dark:bg-black/40 max-w-screen-xl rounded-none sm:rounded-xl backdrop-blur-md z-10">
                <Header />
                <AnimatePresence mode="wait">
                <motion.div key={location.pathname} initial={{ opacity: 0, scale: 0.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.1 }}>
                    <AnimatedOutlet />
                </motion.div>
                </AnimatePresence>
                <Footer />
            </div>
        </div>
    )
}
export default App;