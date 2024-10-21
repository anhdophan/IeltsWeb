import React, { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';

const adminChatContainerStyle = {
    width: '80%',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
};

const chatMessagesAdminStyle = {
    height: '400px',
    overflowY: 'scroll',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginBottom: '20px'
};

const chatInputContainerAdminStyle = {
    display: 'flex',
    alignItems: 'center'
};

const chatInputAdminStyle = {
    flexGrow: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px'
};

const chatButtonAdminStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

const AdminChat = () => {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [admin, setAdmin] = useState('Admin');

    useEffect(() => {
        // Thiết lập kết nối với SignalR
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5009/chatHub")
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);

        console.log("Khởi tạo kết nối WebSocket...");

        newConnection.start()
            .then(result => {
                console.log("Kết nối thành công với Hub!");
                
                // Khi nhận tin nhắn từ server, cập nhật vào state chat
                newConnection.on("ReceiveMessage", (user, message) => {
                    console.log(`Đã nhận tin nhắn từ ${user}: ${message}`);
                    setChat(prevChat => [...prevChat, { user, message }]);
                });
            })
            .catch(e => console.log("Kết nối thất bại: ", e));

    }, []);

    const sendMessage = async () => {
        if (connection.connectionStarted) {
            try {
                console.log("Gửi tin nhắn: ", message);
                await connection.send('SendMessage', admin, message);
                setMessage('');
            } catch (e) {
                console.error(e);
            }
        } else {
            console.log('Chưa kết nối với server.');
        }
    };

    return (
        <div style={adminChatContainerStyle}>
            <h2>Chat với khách hàng</h2>
            <div style={chatMessagesAdminStyle}>
                {messages.map((m, index) => (
                    <div key={index}>
                        <strong>{m.user}:</strong> {m.message}
                    </div>
                ))}
            </div>
            <div style={chatInputContainerAdminStyle}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={chatInputAdminStyle}
                    placeholder="Nhập tin nhắn..."
                />
                <button onClick={sendMessage} style={chatButtonAdminStyle}>
                    Gửi
                </button>
            </div>
        </div>
    );
};

export default AdminChat;
