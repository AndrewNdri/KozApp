import axios from 'axios';

export const GET_USER = "GET_USER";

export const getUser = (uid)=>{
    return (dispatch)=>{
        return axios
            .get(`/users?userId=${uid}`)
            .then((res)=>{
                dispatch({type: GET_USER, payload: res.data})
            })
            .catch((err)=> console.log(err))
    }
}
// export const loginSt = (userCredentials)=>({
//     type: "LOGIN_START",
// });

// export const LoginSuccess = (user)=>({
//     type: "LOGIN_SUCCESS",
//     payload: user
// });

// export const LoginFailure = (error)=>({
//     type: "LOGIN_FAILURE",
//     payload: error
// });

export const Follow = (userId, idToFollow)=>{
    return (dispatch) =>{
        return axios.patch("/users/"+idToFollow+"/follow", {userId: userId})
            .then((res) => {
                dispatch({
                    type: "FOLLOW",
                    payload: {idToFollow}
                })
            });
    }
};

export const Unfollow = (userId, idToFollow)=>{
    return (dispatch) =>{
        
        return axios.patch("/users/"+idToFollow+"/unfollow", {userId: userId})
            .then((res) => {
                dispatch({
                    type: "UNFOLLOW",
                    payload: {idToFollow}
                })
            });
    }
};