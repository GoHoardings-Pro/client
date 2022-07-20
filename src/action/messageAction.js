import axios from "axios";

export const getMessage = () => async(dispatch)=>{
    try{
        dispatch({type: "MessageRequest"});

        const config = { headers : { "Content-Type" : "application/json"}};

        const { data } = await axios.get(`http://localhost:8080/users/profile`, config)

        dispatch({ type: "MessageSuccess", payload: data[0]});

    }catch(error){
        dispatch({type: "MessageFail", payload: error.response.data })
    }
} 