import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ChatContext = createContext();

const ChatProvider = ({children}) => {
    // Live Chat => We will Need Define members And Hospitals To GET Messages
    const [members,setMember] = useState()
    const [message,setMessage] = useState([]);

    useEffect(()=>{
        const getMessages = async () =>{
            try{
                // GET Messages From its Route In API
                const res = await axios.get('/api/messages');
                setMessage(res.data)
            }catch(error){
                // Print Error (For Test Only) 
                // Here We should Make Icon Or any Thing else 
                console.log('error');
            }
        }
    },[]);

    // Handle Send Messages
    const handleSendMessage = async() => {
        // We Should Make Message Here of member and Hospital and type it To handle Message Correctly
        try{
            const msg = await axios.post('/api/message/send');
            setMessage(prevMessage => [...prevMessage, msg.data])
        }catch(error){
            console.log(error)
        }
    }
return(
    <ChatContext.Provider value={{message,members}}>{children}</ChatContext.Provider>
)
}

export{ChatContext,ChatProvider}