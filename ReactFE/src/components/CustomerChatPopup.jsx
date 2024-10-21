import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import Modal from 'react-modal';
import "../styles/Other/CustomerChatPopupStyle.css"

// Set modal root element
Modal.setAppElement('#root');

const CustomerChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [customerId, setCustomerId] = useState(() => {
        // Lấy customerId từ localStorage nếu đã tồn tại
        const savedCustomerId = localStorage.getItem('customerId');
        return savedCustomerId || ''; // Nếu không có, trả về chuỗi rỗng
    });

    // Khởi tạo customerId nếu chưa có và lưu vào localStorage
    const generateUniqueCustomerId = () => {
        const newCustomerId = `cus${Date.now()}`; // Tạo ID duy nhất dựa trên timestamp
        localStorage.setItem('customerId', newCustomerId); // Lưu vào localStorage
        setCustomerId(newCustomerId);
    };

    useEffect(() => {
        // Nếu có customerId, tạo kết nối khi người dùng mở chat
        if (isOpen && customerId) {
            const connect = new HubConnectionBuilder()
                .withUrl("http://localhost:5009/chatHub") // URL Hub của bạn
                .withAutomaticReconnect()
                .build();
            
            setConnection(connect);
        
            connect.start()
                .then(() => {
                    console.log("Connected to chat");
                    connect.invoke("SendCustomerIdToAdmin", customerId); // Gửi ID khách hàng khi kết nối thành công
                })
                .catch(err => console.log("Connection failed: ", err));

            // Nhận tin nhắn từ phía server
            connect.on("ReceiveMessage", (fromUser, receivedMessage) => {
                // Chỉ hiển thị tin nhắn từ Admin hoặc của chính customerId hiện tại
                if (fromUser === 'Admin' || fromUser === customerId) {
                    setMessages(prevMessages => [...prevMessages, { user: fromUser, message: receivedMessage }]);
                }
            });

            return () => {
                connect.stop();
            };
        } else if (isOpen && !customerId) {
            // Nếu chưa có customerId, tạo mới và lưu lại
            generateUniqueCustomerId();
        }
    }, [isOpen, customerId]); // Kết nối chỉ khi isOpen và customerId thay đổi

    const sendMessage = async () => {
        if (message && connection) {
            try {
                await connection.invoke("SendMessageFromCustomer", customerId, message); // Gửi tin nhắn tới admin
                setMessages(prevMessages => [...prevMessages, { user: "Customer", message }]);
                setMessage('');
            } catch (err) {
                console.error("Error sending message: ", err);
            }
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen); // Chỉ mở kết nối khi khách hàng mở chat
    };

    return (
        <>
            <button onClick={toggleModal}>Open Chat</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Chat Popup"
                className="chat-modal"
                overlayClassName="chat-overlay"
            >
                <h2>Customer Chat</h2>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.user === 'Admin' ? 'admin-message' : 'customer-message'}>
                            <strong>{msg.user === 'Admin' ? 'Admin' : 'You'}: </strong>{msg.message}
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage} disabled={!message}>Send</button>
                <button onClick={toggleModal}>Close</button>
            </Modal>
        </>
    );
};

export default CustomerChatPopup;
