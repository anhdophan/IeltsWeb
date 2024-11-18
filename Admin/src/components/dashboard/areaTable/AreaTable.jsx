import React, { useState, useEffect } from "react";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Khóa Học",
  "Số lượt đăng ký",
  "Mô tả",
  "Ngày bắt đầu",
  "Ngày kết thúc",
  "Giá",
  "Action",
];

const AreaTable = () => {
  const [tableData, setTableData] = useState([]); // Dữ liệu từ API
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Hàm fetch dữ liệu từ API
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
        // Giả sử API trả về danh sách đơn hàng:
        const formattedData = data.map((item) => ({
          id: item.id || Math.random(), // ID phải là duy nhất
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

  useEffect(() => {
    fetchTableData();
  }, []);

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
        <AreaTableAction id={dataItem.id} /> {/* Truyền id vào AreaTableAction */}
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;