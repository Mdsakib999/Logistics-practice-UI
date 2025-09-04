// src/components/countUp.jsx
import CountUp from "react-countup";

const CountUpText = ({ end, duration = 3 }) => {
  return (
    <span>
      <CountUp end={end} duration={duration} />
    </span>
  );
};

export default CountUpText;
