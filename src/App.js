import logo from './logo.svg';

import './App.css';

import { getDatabase, push, ref, set,onChildAdded } from "firebase/database";

import { useEffect, useState } from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

function App() {

const [name,setname]=useState("");
 const [chats,setchats]=useState([]);
 const [msg,setmsg]=useState('');
 const [showChat, setShowChat] = useState(false);

const joinRoom = () => {

if (name !== "" ) {

console.log("click");

console.log(showChat);

 setShowChat(true);

}

};

const db=getDatabase();

const chatListRef=ref(db,'chats');

useEffect((data)=>{

onChildAdded(chatListRef, (data) => {

 setchats(chats=>[...chats,data.val()])




});

setmsg('');

},[])




const sendchat=()=>{

const chatRef=push(chatListRef);

set(chatRef,{

name,message:msg,

 time:

new Date(Date.now()).getHours() +

":" +

 new Date(Date.now()).getMinutes()+
 ":"+ new Date().getSeconds(),

 

})

setmsg('');

}

return (


<div >

{console.log("apppp")}

<div className="App">

{!showChat ? (



<div className="joinChatContainer">

<h3>Join A Chat</h3>

 <input type="text" placeholder='enter your name' onChange={(event)=>setname(event.target.value)} ></input>

{/* <button onClick={(e)=>{setname(e.target.value)} }></button> */}

<button onClick={joinRoom}>join</button>



</div>

):(
<div className='chat-window'>

<div className='chat-header'>

<p>Live chat</p>

</div>




<div className='chat-body'>




<h3>user:{name}</h3>
{name? <div >



<div className='chat-body'>


<ScrollToBottom className="message-container">

{ chats.map((c,i)=><div key={i} className='message' id={name==c.name?"you":"other"}>

<div className="message-content">
<div className='name'>{c.name}</div>
 <div className='msg'>{c.message}</div>
 <div id="time">{c.time}</div>
 </div>
 
 






 

 



</div>)}

 </ScrollToBottom>



 </div>







 <div className='chat-footer'>

<input type="text" onInput={e=>setmsg(e.target.value)} placeholder='enter your chat' value={msg}></input>

 <button onClick={(e) => sendchat()}>&#9658;</button>

 </div>

</div>:null}

</div>

</div>





 )



 }

 </div>













 </div>

 )

}




export default App;