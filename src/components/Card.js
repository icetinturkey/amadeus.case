import { Link } from "react-router-dom";
import imgArrival from "../resources/arrival.svg";
import imgDeparture from "../resources/departure.svg";
import imgSlash from "../resources/slash.svg";
import imgRuler from "../resources/ruler.svg";
import imgPrice from "../resources/tag.svg";
import imgArrow from "../resources/arrow-right-long.svg";
import { Reorder } from "framer-motion";

function Card({data}) {
    return(
        <Reorder.Item value={data.name} id={data.name} className="" dragListener={false}>
        <div className="relative bg-slate-50 dark:bg-slate-800 rounded-3xl w-full shadow-xl">
            <div className="flex mx-4 py-4">
                <div className="flex-auto w-96 flex flex-col xl:flex-row">
                    <div className="flex mx-auto">
                        <div className="w-8 h-24 mr-4 flex flex-col justify-center">
                            <img src={imgDeparture} className="h-8 w-8 dark:invert" alt="icon" />
                        </div>
                        <div className="h-24 w-full flex flex-col justify-center dark:text-slate-200">
                            <div>{data.departureAirport}</div>
                            <div><i>{data.departureCity}</i></div>
                            <div>{new Date(data.departureDate).toLocaleString().substring(0,16)}</div>
                        </div>
                    </div>
                    <div className="mx-auto flex flex-col justify-center"><img src={imgArrow} className="h-8 w-8 dark:invert" alt="icon" /></div>
                    <div className="flex mx-auto">
                        <div className="w-8 h-24 mr-4 flex flex-col justify-center">
                            {data.isOneWay ? (
                                <img src={imgSlash} className="h-8 w-8 dark:invert" alt="icon" />
                            ) : (
                                <img src={imgArrival} className="h-8 w-8 dark:invert" alt="icon" />
                            )}
                        </div>
                        <div className="h-24 w-full flex flex-col justify-center dark:text-slate-200">
                            <div>{data.arrivalAirport}</div>
                            <div><i>{data.arrivalCity}</i></div>
                            <div>{!data.isOneWay && (new Date(data.arrivalDate).toLocaleString().substring(0,16))}</div>
                        </div>
                    </div>
                </div>
                <div className="flex-auto w-16 flex flex-col justify-between dark:text-slate-200">
                    <div className="flex flex-col md:flex-row justify-end">
                        <div className="h-8 mx-auto md:mx-2 font-bold">{data.flightLength}&nbsp;km</div>
                        <div className="h-8 mx-auto md:mx-0"><img src={imgRuler} className="w-8 h-8 dark:invert" alt="rulericon" /></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-end">
                        <div className="h-8 mx-auto md:mx-2 font-bold">{data.flightPrice}&nbsp;₺</div>
                        <div className="h-8 mx-auto md:mx-0"><img src={imgPrice} className="w-8 h-8 dark:invert" alt="rulericon" /></div>
                    </div>
                </div>
            </div>
        </div>
        </Reorder.Item>
    )
}
export default Card;