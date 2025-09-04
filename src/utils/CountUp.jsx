// src/components/countUp.jsx
import CountUp from "react-countup";

const CountUpText = ({ end, duration = 3, className = "" }) => {
  return (
    <span className={className}>
      <CountUp end={end} duration={duration} />
    </span>
  );
};

export default CountUpText;
