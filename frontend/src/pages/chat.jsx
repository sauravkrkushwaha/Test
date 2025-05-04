import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, ListGroup, Image } from "react-bootstrap";
import "./Chat.css";

function Chat() {
    const { chatId } = useParams(); // Get the chatId from the URL

    const chatDetails = {
        1: { name: "John Doe", avatar: "https://via.placeholder.com/50" },
        2: { name: "Jane Smith", avatar: "https://via.placeholder.com/50" },
        3: { name: "Michael Brown", avatar: "https://via.placeholder.com/50" },
    };

    const [messages, setMessages] = useState([
        { id: 1, sender: "coach", text: "Hello! How can I help you today?" },
        { id: 2, sender: "client", text: "I need help with my workout plan." },
        { id: 3, sender: "coach", text: "Sure! Let me create a plan for you." },
    ]);

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            setMessages([...messages, { id: messages.length + 1, sender: "client", text: newMessage }]);
            setNewMessage("");
        }
    };

    const chat = chatDetails[chatId] || { name: "Unknown", avatar: "https://via.placeholder.com/50" };

    return (
        <div className="chat-inbox-container">
            {/* Chat Header */}
            <div className="chat-header d-flex align-items-center">
                <Image src={chat.avatar} roundedCircle className="chat-header-avatar" />
                <div className="chat-header-details ms-3">
                    <h5 className="chat-header-name mb-0">{chat.name}</h5>
                    <small className="chat-header-status text-success">Online</small>
                </div>
            </div>

            {/* Chat Messages */}
            <ListGroup className="chat-messages">
                {messages.map((message) => (
                    <ListGroup.Item
                        key={message.id}
                        className={`chat-message ${message.sender === "client" ? "client" : "coach"}`}
                    >
                        {message.text}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/* Chat Input */}
            <Form onSubmit={handleSendMessage} className="chat-input-form">
                <Form.Control
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="chat-input"
                />
                <Button type="submit" variant="dark" className="chat-send-button">
                    Send
                </Button>
            </Form>
        </div>
    );
}

export default Chat;