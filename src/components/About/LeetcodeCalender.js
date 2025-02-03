import React, { useState, useEffect } from 'react';

const LeetCodeCalendar = () => {
  const [calendarData, setCalendarData] = useState({});
  const [today, setToday] = useState(new Date());
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()));
  const [lastDayOfWeek, setLastDayOfWeek] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay())));

  useEffect(() => {
    fetch('https://leetcode.com/api/v1/user/calendar/')
      .then(response => response.json())
      .then(data => {
        setCalendarData(data.calendar);
      });
  }, []);

  const getCompletedStatus = (date) => {
    const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    return calendarData[dateStr] ? 'completed' : '';
  };

  return (
    <div className="leetcode-calendar">
      <h2>LeetCode Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {Array(7).fill(0).map((_, i) => {
            const date = new Date(firstDayOfWeek.getTime() + i * 24 * 60 * 60 * 1000);
            return (
              <tr key={i}>
                <td className={getCompletedStatus(date)}>{date.getDate()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeetCodeCalendar;