import axios from "axios";
import { getUser } from "./context/AuthActions";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post("auth/login", userCredentials);
        console.log(res.data);
        dispatch(getUser(res.data._id));
        window.location = "/";
    }catch(err){
        console.log(err);
        //dispatch({type: "LOGIN_FAILURE", payload: err});
    }
};