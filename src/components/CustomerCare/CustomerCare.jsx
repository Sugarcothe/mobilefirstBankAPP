import React, { useState } from "react";
import "./CustomerCare.css"; // We'll generate this CSS in the next step
import Footbar from "../Footbar/Footbar";
import Topbar from "../Topbar/Topbar";

function CustomerCare() {
  const [messages, setMessages] = useState([
    { text: "Hello!, My name is Sarafina", sender: "user" },
    {
      text: "Hi there!, how can we help you, ticket for this chat is #3435627",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = { text: inputText, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputText(""); // Clear the input field

    // Simulate bot's response after a short delay
    setTimeout(() => {
      const botResponse = {
        text: "Thank you for contacting us, our technicians are currently on their way to assist you",
        sender: "bot",
      };
      setMessages([...messages, botResponse]);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <Topbar />
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <textarea
              className="textArea"
              type="text"
              placeholder="Type you issue..."
              value={inputText}
              onChange={handleInputChange}
            />
            <button className="chat-btn" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
        <Footbar />
      </div>
    </>
  );
}

export default CustomerCare;
