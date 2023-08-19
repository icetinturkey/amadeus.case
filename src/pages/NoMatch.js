import {Link} from "react-router-dom";
import exclamation from "../resources/exclamation.svg";

function NoMatch() {
    return(
        <div className="text-center dark:text-slate-50 my-20">
            <div className="flex justify-center"><img src={exclamation} alt="pagenotfound" className="w-20 h-20 dark:invert" /></div>
            <div className="mt-1">The page you are trying to reach does not exist !</div>
            <div className="mt-8"><Link className="btn-blue" to="/">Go back to mainpage</Link></div>
        </div>
    )
}
export default NoMatch;