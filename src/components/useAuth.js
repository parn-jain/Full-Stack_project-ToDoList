import axios from "axios";
import { useEffect,useState } from "react";
export default ()=>{
    const [ auth , setAuth] = useState();
    const verifyAuth = async () =>{
        try{
            const res = await axios.get("http://localhost:5000/is_logged_in",{withCredentials: true})
            return res.data
        }
        catch(err)
        {
            console.log(err)
            return false;
        }
    };
    useEffect(() =>{
        (
            async () => {
                const data = await verifyAuth()
                // console.log("new useEffect")
                 setAuth(data)
            }
        )()
    })
return {auth}
};