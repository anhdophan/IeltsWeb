import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import "../styles/Other/CustomerChatPopupStyle.css"

const CustomerChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [customerId, setCustomerId] = useState(() => {
        const savedCustomerId = localStorage.getItem('customerId');
        return savedCustomerId || '';
    });

    const generateUniqueCustomerId = () => {
        const newCustomerId = `cus${Date.now()}`;
        localStorage.setItem('customerId', newCustomerId);
        setCustomerId(newCustomerId);
    };

    useEffect(() => {
        if (isOpen && customerId) {
            const connect = new HubConnectionBuilder()
                .withUrl("https://ieltsweb.onrender.com/chatHub")
                .withAutomaticReconnect()
                .build();

            setConnection(connect);

            connect.start()
                .then(() => {
                    console.log("Connected to chat");
                    connect.invoke("SendCustomerIdToAdmin", customerId);
                })
                .catch(err => console.log("Connection failed: ", err));

            connect.on("ReceiveMessage", (fromUser, receivedMessage) => {
                if (fromUser === 'Admin' || fromUser === customerId) {
                    setMessages(prevMessages => [...prevMessages, { user: fromUser, message: receivedMessage }]);
                }
            });

            return () => {
                connect.stop();
            };
        } else if (isOpen && !customerId) {
            generateUniqueCustomerId();
        }
    }, [isOpen, customerId]);

    const sendEmail = async (customerEmail) => {
        const subject = "Chào mừng bạn đến với Jumbo Book Store";
        const message = "Chúng tôi rất vui được phục vụ bạn. Cảm ơn vì đã đăng ký!";
    
        try {
            const emailResponse = await axios.post('https://ieltsweb.onrender.com/api/SendEmail', {
                customerEmail,
                subject,
                message,
            });
    
            if (emailResponse.status === 200) {
                console.log('Email sent successfully');
                await axios.post('https://ieltsweb.onrender.com/api/Email', {
                    customerEmail,
                    subject,
                    message,
                    sentTime: new Date().toISOString(), // Send timestamp for logging
                });
                console.log('Email log saved successfully');
            }
        } catch (error) {
            console.error('Error sending email or saving log:', error);
        }
    };
    

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-container">
            {/* Nút Open Chat */}
            <button className="open-chat-btn" onClick={toggleModal}>
                💬
            </button>

            {/* Khung chat chỉ hiển thị khi isOpen true */}
            {isOpen && (
                <div className="chat-modal">
                    <h2>Customer Chat</h2>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.user === 'Admin' ? 'admin-message' : 'customer-message'}>
                                <strong>{msg.user === 'Admin' ? 'Admin' : 'You'}: </strong>{msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input-container">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={sendMessage} disabled={!message}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerChatPopup;
