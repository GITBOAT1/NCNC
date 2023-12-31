import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, query, where, onSnapshot, orderBy } from 'firebase/firestore'
import { auth, db } from "../../config/firebase-config"
import './Chat.css'
import Header from "../Header/Header";

export const Chat = (props) => {
  const {room} = props
  const [newMessage, setNewMessage] = useState("");

  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const queryMessage = query(messagesRef, where("room","==" , room), orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id})
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  },);


  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  }
  
  return (

    <>
      <Header />
      <div className="chat-app" style={{marginLeft: '300px', marginTop: '43px'}}>
        <div className="header">
          <h1>Welcome to: {room ? room.toUpperCase() : "No Room Selected"}</h1>
        </div>
          <div className="messages">
            {messages.map((message) => (
              <div className="message" key={message.id}>
                <span className="user">{message.user}</span>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="new-message-form">
            <input
              className="new-message-input"
              placeholder="Type your message here..."
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
      </div>
    </>
  );
}