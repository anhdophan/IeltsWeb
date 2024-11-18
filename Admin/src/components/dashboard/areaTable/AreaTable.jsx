import React, { useEffect, useState } from "react";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Name",
  "Email",
  "Phone",
  "Created On",
  "Course ID",
  "Status",
  "Action",
];

const AreaTable = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ieltsweb.onrender.com/api/SignupInfor");
        const data = await response.json();
        const formattedData = data.map((item) => ({
          id: item.id,
          nameSt: item.nameSt,
          emailSt: item.emailSt,
          phoneSt: item.phoneSt,
          creatOn: new Date(item.creatOn).toLocaleDateString(),
          courseId: item.courseId,
          status: item.status ? "success" : "pending",
        }));
        setTableData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle Access (Update)
  const handleAccess = async (id) => {
    try {
      const updateDto = {
        status: true, // Example update
      };
      const response = await fetch(`https://ieltsweb.onrender.com/api/SignUpInfor/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDto),
      });

      if (response.ok) {
        alert("Record updated successfully!");
        // Optionally refetch data
        setTableData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: "success" } : item
          )
        );
      } else {
        alert("Failed to update record.");
      }
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://ieltsweb.onrender.com/api/SignUpInfor/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Record deleted successfully!");
        setTableData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete record.");
      }
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Sign-Up Information</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.nameSt}</td>
                <td>{dataItem.emailSt}</td>
                <td>{dataItem.phoneSt}</td>
                <td>{dataItem.creatOn}</td>
                <td>{dataItem.courseId}</td>
                <td>
                  <div className="dt-status">
                    <span
                      className={`dt-status-dot dot-${dataItem.status}`}
                    ></span>
                    <span className="dt-status-text">{dataItem.status}</span>
                  </div>
                </td>
                <td className="dt-cell-action">
                  <AreaTableAction
                    id={dataItem.id}
                    onAccess={handleAccess}
                    onDelete={handleDelete}
                  />
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
