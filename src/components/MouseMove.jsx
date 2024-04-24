import { useEffect, useState } from "react";

const MouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Mouse Move</h1>
      <p>x: {position.x}</p>
      <p>y: {position.y}</p>
    </div>
  );
};

export default MouseMove;
