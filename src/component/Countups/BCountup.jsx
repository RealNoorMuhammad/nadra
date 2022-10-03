import React, { useState, useRef, useEffect } from "react";

const BCountup = ({ start = 0, end, timer = 50 }) => {
  const [state, setstate] = useState(null);
  const ref = useRef(start);

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setstate(end);
      setstate(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => (isMounted = false);
  }, [end, start]);
  return (
    <div>
      <h1 style={{ justifyContent: "center", textAlign: "center" , color:"rgb(14, 203, 129)"  }}>
        {" "}
       Visit Today
      </h1>

      <h4 style={{ justifyContent: "center", textAlign: "center" }}>{state}</h4>
    </div>
  );
};

export default BCountup;
