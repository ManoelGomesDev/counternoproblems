import  { useState, useEffect } from "react";

const targetDate = new Date("2024-09-12T00:00:00");

const Counter = () => {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateTimeElapsed = () => {
      const now = new Date();
      const diff = now - targetDate;

      const totalMinutes = Math.floor(diff / (1000 * 60));
      const totalHours = Math.floor(totalMinutes / 60);
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;

      setTimeElapsed({
        days,
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
      });
    };

    updateTimeElapsed();
    const intervalId = setInterval(updateTimeElapsed, 60000); // Atualiza a cada minuto

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      {timeElapsed.days} dias {timeElapsed.hours}:{timeElapsed.minutes} horas
    </span>
  );
};

export default Counter;
