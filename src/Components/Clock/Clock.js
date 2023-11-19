import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array ensures that the effect runs only on mount and unmount
    
      // Format the date according to the specified format
      const formattedTime = currentTime.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Asia/Ho_Chi_Minh', // Change to your desired time zone
      });

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  )
}
