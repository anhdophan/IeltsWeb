import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

// Define table column headings
const TABLE_HEADS = [
  "Khóa Học",
  "Số lượt đăng ký",
  "Mô tả",
  "Ngày bắt đầu",
  "Ngày kết thúc",
  "Giá",
  "Action",
];

const CourseTable = () => {
  const [tableData, setTableData] = useState([]); // Data from API
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" }); // Sorting configuration

  // Function to fetch data from the API
  const fetchTableData = async () => {
    try {
      const response = await fetch("https://ieltsweb.onrender.com/api/Course", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data); // Debug log to check the data

        const formattedData = data.map((item) => ({
          id: item.id || Math.random(),
          name: item.courseName || "Unknown Product",
          amount: item.price || 0,
          description: item.courseDescription || "N/A",
          dateStr: item.startTime || new Date().toLocaleDateString(),
          dateEnd: item.endTime || new Date().toLocaleDateString(),
          signup: item.courseSignUp || "0",
        }));

        setTableData(formattedData);
      } else {
        console.error("Error fetching data:", response.statusText);
        setError("Lỗi khi tải dữ liệu!");
      }
    } catch (error) {
      console.error("Lỗi kết nối:", error);
      setError("Lỗi khi tải dữ liệu!");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle sorting
  const sortTableData = (key) => {
    console.log(`Sorting by: ${key}`); // Debug log for sorting key
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...tableData].sort((a, b) => {
      if (typeof a[key] === "string") {
        return direction === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      } else if (typeof a[key] === "number") {
        return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
      } else if (key === "dateStr" || key === "dateEnd") {
        return direction === "asc"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }
      return 0;
    });
    

    setSortConfig({ key, direction });
    setTableData(sortedData);
    console.log("Sorted data:", sortedData); // Debug log for sorted data
  };
 
  // Use useEffect to load data when the component mounts
  
  useEffect(() => {
    fetchTableData();
  }, []);

  const navigate = useNavigate();
  const handleCreateCourse = () => {
    navigate("/course/create");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Các Khóa Học</h4>
        <button
          className="create-course-btn"
          onClick={handleCreateCourse} // Call the navigate function when clicked
        >
          Tạo Khóa Học Mới
        </button>
      </div>

      <div className="data-table-sort">
        <span>Sort by: </span>
        <button
          onClick={() => sortTableData("name")}
          className={`sort-btn ${sortConfig.key === "name" ? "active" : ""} ${sortConfig.key === "name" && sortConfig.direction === "asc" ? "asc" : sortConfig.key === "name" && sortConfig.direction === "desc" ? "desc" : ""}`}
        >
          Tên Khóa Học
          <span className="sort-arrow">{sortConfig.key === "name" && sortConfig.direction === "asc" ? "↑" : "↑"}</span>
        </button>
        <button
          onClick={() => sortTableData("amount")}
          className={`sort-btn ${sortConfig.key === "amount" ? "active" : ""} ${sortConfig.key === "amount" && sortConfig.direction === "asc" ? "asc" : sortConfig.key === "amount" && sortConfig.direction === "desc" ? "desc" : ""}`}
        >
          Giá
          <span className="sort-arrow">{sortConfig.key === "amount" && sortConfig.direction === "asc" ? "↑" : "↑"}</span>
        </button>
        <button
          onClick={() => sortTableData("signup")}
          className={`sort-btn ${sortConfig.key === "signup" ? "active" : ""} ${sortConfig.key === "signup" && sortConfig.direction === "asc" ? "asc" : sortConfig.key === "signup" && sortConfig.direction === "desc" ? "desc" : ""}`}
        >
          Số lượt đăng ký
          <span className="sort-arrow">{sortConfig.key === "signup" && sortConfig.direction === "asc" ? "↑" : "↑"}</span>
        </button>
        <button
          onClick={() => sortTableData("dateStr")}
          className={`sort-btn ${sortConfig.key === "dateStr" ? "active" : ""} ${sortConfig.key === "dateStr" && sortConfig.direction === "asc" ? "asc" : sortConfig.key === "dateStr" && sortConfig.direction === "desc" ? "desc" : ""}`}
        >
          Ngày bắt đầu
          <span className="sort-arrow">{sortConfig.key === "dateStr" && sortConfig.direction === "asc" ? "↑" : "↑"}</span>
        </button>
      </div>


      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.name}</td>
                <td>{dataItem.signup}</td>
                <td>{dataItem.description}</td>
                <td>{dataItem.dateStr}</td>
                <td>{dataItem.dateEnd}</td>
                <td>${dataItem.amount.toFixed(2)}</td>
                <td className="dt-cell-action">
                  <AreaTableAction id={dataItem.id} /> {/* Pass id into AreaTableAction */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CourseTable;
