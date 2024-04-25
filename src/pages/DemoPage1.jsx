import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DemoPage1 = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/demo-page-2");
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    console.log({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    //fonction de cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Demo Page 1</h1>
      <a href="/demo-page-2">Go to Demo Page 2</a>
      <Link to="/demo-page-2">Go to Demo Page 2</Link>
      <button onClick={redirect}>go to page</button>
      <div>
        <h1>Mouse Move</h1>
        <p>x: {position.x}</p>
        <p>y: {position.y}</p>
      </div>
    </div>
  );
};

export default DemoPage1;
