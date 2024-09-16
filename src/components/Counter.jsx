import  { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateTimeElapsed = () => {
      const now = new Date();
      const diff = now - startDate;

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
  }, [startDate]);

  return (
    <span>
      {timeElapsed.days} dias {timeElapsed.hours}:{timeElapsed.minutes} horas
    </span>
  );
};

Counter.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
};

export default Counter;
