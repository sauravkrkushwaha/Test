import React from "react";
import { ListGroup, Image, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ChatList.css";

function ChatList() {
    const navigate = useNavigate();

    const chats = [
        { id: 1, name: "John Doe", message: "Hey, how are you?", time: "10:30 AM", avatar: "https://via.placeholder.com/50", unread: 2 },
        { id: 2, name: "Jane Smith", message: "Let's catch up later!", time: "9:15 AM", avatar: "https://via.placeholder.com/50", unread: 0 },
        { id: 3, name: "Michael Brown", message: "Can you send me the files?", time: "Yesterday", avatar: "https://via.placeholder.com/50", unread: 1 },
    ];

    return (
        <div className="chat-list-container">
            <h2 className="text-center mb-4">Chats</h2>
            <ListGroup>
                {chats.map((chat) => (
                    <ListGroup.Item
                        key={chat.id}
                        className="chat-item d-flex align-items-center"
                        onClick={() => navigate(`/chat/${chat.id}`)} // Navigate to chat inbox
                    >
                        <Image src={chat.avatar} roundedCircle className="chat-avatar" />
                        <div className="chat-details flex-grow-1 ms-3">
                            <div className="d-flex justify-content-between">
                                <h5 className="chat-name">{chat.name}</h5>
                                <small className="chat-time text-muted">{chat.time}</small>
                            </div>
                            <p className="chat-message text-truncate mb-0">{chat.message}</p>
                        </div>
                        {chat.unread > 0 && (
                            <Badge bg="primary" pill>
                                {chat.unread}
                            </Badge>
                        )}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default ChatList;