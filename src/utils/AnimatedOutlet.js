import { useOutlet } from "react-router-dom";
import { useState } from "react";
export const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);
    return <>{outlet}</>;
}