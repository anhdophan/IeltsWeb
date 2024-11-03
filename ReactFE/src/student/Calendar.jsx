import React from 'react';

const Calendar = () => {
  return (
    <aside className="calendar-column">
      <div className="calendar-wrapper">
        <div className="calendar-container">
          <div className="calendar">
            <div className="calendar-header">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6ca12a02e5e1c59bc114de2e360cbc6d37e301e0e325da61be20103224a27f5?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Calendar" className="calendar-icon" />
              <span>Calendar</span>
            </div>
            <div className="date-picker">
              <div className="date-picker-header">
                <div className="date-range">
                  <span className="date-text">3/28/2024 - 12/28/2024</span>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b91fbc17b78819073a33a46050846fe1fa388fd1d9b134bcdf48d09974b911?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Date range" className="date-icon" />
                </div>
              </div>
              <div className="date-picker-body">
                <div className="date-picker-content">
                  <div className="year-selector">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccbfd11deffc00cff7a44d890706ad37966f0dd68213762bcc4420dce905712?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Previous" className="year-arrow" />
                    <span className="year-text">September 2024</span>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e42d43cb9e95e5b1267a149024663b84a40603bc2321f627fab89c194bf4ffea?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Next" className="year-arrow" />
                  </div>
                  <div className="weekdays">
                    <span>S</span>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                  </div>
                  {/* Calendar days would be dynamically generated here01 */}
                </div>
              </div>
            </div>
            <div className="calendar-event">
              06: Khóa Ielts 5.0 - 5.5+:<br />Speaking
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f124b4dd3c5433638a7168eee0cb3d35d6ad56398cd59550c8e29e6ae755f484?placeholderIfAbsent=true&apiKey=2bafca70f25c4ac98fe13370d7763994" alt="Event icon" className="event-icon" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Calendar;