import React, { useEffect, useState } from "react";
import axios from "axios";

const AreaProgressChart = () => {
  const [data, setData] = useState([]);  // State to store the API data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ieltsweb.onrender.com/api/Course");
        // Mapping courseName to name and courseSignUp to percentValues
        const mappedData = response.data.map(course => ({
          id: course.id,
          name: course.courseName,
          percentValues: course.courseSignUp,
        }));
        setData(mappedData);  // Set the data
      } catch (error) {
        setError("Failed to load data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);  // Empty dependency array means this runs once on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Số lượt đăng ký các Khóa Học</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">{progressbar.percentValues}</p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
