import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography, Box } from '@mui/material';
import '../styles/Other/CourseRegistrationPopupStyle.css'; // Import the CSS file
import axios from 'axios'; // Make sure axios is imported

export default function CourseRegistrationPopup({ open, onClose, course }) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({ email: '', phone: '' });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone number validation (only digits and exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;

    

    const handleCreateSignUp = async () => {
        let isValid = true;
        const newErrors = { email: '', phone: '' };
    
        // Email validation
        if (!emailRegex.test(email)) {
            newErrors.email = 'Email không hợp lệ';
            isValid = false;
        }
    
        // Phone number validation
        if (!phoneRegex.test(phone)) {
            newErrors.phone = 'Số điện thoại phải là 10 chữ số';
            isValid = false;
        }
    
        setErrors(newErrors);
    
        if (isValid) {
            console.log('Registering:', { name, email, phone, courseId: course.id }); // Use course.id here
            const signUpData = {
                nameSt: name,
                emailSt: email,
                phoneSt: phone,
            };
    
            // Send the request to the API
            try {
                const response = await fetch(`https://ieltsweb.onrender.com/api/SignUpInfor/${course.id}`, { // Updated to use course.id
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(signUpData),
                });
    
                if (response.ok) {
                    const createdSignUp = await response.json();
                    console.log('Đăng Ký Thành Công:', createdSignUp);
                    onClose(); // Close pop-up after successful registration
                    navigate('/Course'); // Navigate back after success
                } else {
                    const errorData = await response.json();
                    console.error('Lỗi tạo đăng ký:', errorData);
                    alert('Có lỗi xảy ra khi đăng ký.');
                }
            } catch (error) {
                console.error('Lỗi kết nối:', error);
                alert('Lỗi kết nối đến máy chủ.');
            }
        } else {
            alert('Vui lòng sửa lỗi trước khi đăng ký.');
        }
    };
    
    // Hàm gửi email
    const sendEmail = async (customerEmail) => {
        const subject = "Chào mừng bạn đến với Jumbo Book Store"; // Customize email subject here
        const message = "Chúng tôi rất vui được phục vụ bạn. Cảm ơn vì đã đăng ký!"; // Customize email content here
    
        try {
            const response = await axios.post('https://ieltsweb.onrender.com/api/Email/send-email', {
                customerEmail,
                subject,
                message,
                
            });
            
            if (response.status === 200) {
                console.log('Email sent successfully:', response.data.message);
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            PaperProps={{ className: 'dialog-paper' }} // Apply dialog-paper class
        >
            <DialogTitle className="dialog-title">
                Đăng ký khóa học: {course.courseName}
            </DialogTitle>

            <DialogContent className="dialog-content">
                {/* Course details */}
                <Typography variant="h6" gutterBottom className="course-description">
                    Mô tả khóa học:
                </Typography>
                <Typography variant="body2" paragraph className="course-paragraph">
                    {course.courseDescription ? course.courseDescription : 'Không có mô tả.'}
                </Typography>

                {/* Registration form */}
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        marginTop: 2
                    }}
                >
                    <TextField
                        label="Tên đầy đủ"
                        variant="outlined"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field" // Apply input-field class
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field" // Apply input-field class
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Số điện thoại"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-field" // Apply input-field class
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                </Box>
            </DialogContent>

            <DialogActions className="actions-container">
                <Button 
                    onClick={onClose} 
                    className="cancel-button" // Apply cancel-button class
                >
                    Hủy
                </Button>
                <Button 
                    onClick={() => {
                        handleCreateSignUp();  // Call this function first
                        sendEmail(email);   // Then call sendEmail with the customer's email
                       
                    }} 
                    className="register-button" // Apply register-button class
                >
                    Đăng ký
                </Button>
            </DialogActions>
        </Dialog>
    );
}
