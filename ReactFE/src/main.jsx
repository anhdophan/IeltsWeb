// src/main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; // Nhập file CSS để áp dụng kiểu cho ứng dụng
import App from "./App"; // Nhập component App

import CourseCreate from "./pages/CourseCreate";
import CourseRegistrationPopup from "./components/CourseRegistrationPopup";
import Dashboard from "./student/Dashboard";

import CourseDetails from "./coursedetails/CourseDetails"
import IntroductionSection from "./L&TIntroduce/IntroductionSection";
import IELTSResults from "./studentSection/IeltsResults";
import TeacherSection from "./teacherSection/TeacherSection";
import CourseDetailsTeacher from "./courseDetailsTeacher/CourseDetailsTeacher";
import TeacherDashboard from "./teacherDashboard/TeacherDashboard";
import LandingPage from "./LandingPage/LandingPage";

// Tạo router với các route cần thiết
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Trang chính với danh sách khóa học
  },
  {
    path: "/Course", //  trang danh sách khóa học
    element: <App />, 
  },
 
  {
    path: "/CourseCreate", // Trang tạo khóa học
    element: <CourseCreate />, // Hiển thị trang CourseCreate
  },
  {
    path: "/SignUp/:id", // Trang tạo khóa học
    element: <CourseRegistrationPopup />, // Hiển thị trang CourseCreate
  },

  {
    path: "/StudentDashboard/*", 
    element: <Dashboard/>, 
  },
  {
    path: "/CourseDetails",
    element: <CourseDetails/>,
  },
  {
    path: "/Introduce",
    element: <IntroductionSection/>,
  },
  {
    path: "/StudentSection",
    element: <IELTSResults/>,
  },
  {
    path: "/TeacherSection",
    element: <TeacherSection/>,
  },
  {
    path: "/CourseDetailsTeacher",
    element: <CourseDetailsTeacher/>,
  },
  {
    path: "/TeacherDashboard",
    element: <TeacherDashboard/>,
  },
  {
    path: "/LandingPage",
    element: <LandingPage/>,
  },



]);

// Render ứng dụng
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
