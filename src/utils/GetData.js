import axios from "axios";
export const flightplans = async ({ queryKey }) => {
    const res = await axios.get(process.env.REACT_APP_URL + queryKey[0]).catch(function (error) {
        throw new Error(error.message);
    });
    return res.data
}