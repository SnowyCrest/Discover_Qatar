import { useState, useEffect, useRef } from "react";
import "./card-hover-effect.css";
const Card = ({
  imageUrl = "https://example.com/new-image.jpg",
}) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 300, height: 400 });
  const [imageOrientation, setImageOrientation] = useState("portrait"); // Default to portrait
  let bounds = null;

  // Function to load the image and determine its dimensions
  const loadImage = () => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const isLandscape = img.width > img.height;
      setImageDimensions({
        width: img.width,
        height: img.height,
      });
      setImageOrientation(isLandscape ? "landscape" : "portrait");
    };
  };

  const rotateToMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };

  useEffect(() => {
    loadImage();

    const handleMouseEnter = () => {
      bounds = cardRef.current.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", rotateToMouse);
      cardRef.current.style.transform = "";
      glowRef.current.style.backgroundImage = "";
    };

    const cardElement = cardRef.current;

    cardElement.addEventListener("mouseenter", handleMouseEnter);
    cardElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      cardElement.removeEventListener("mouseenter", handleMouseEnter);
      cardElement.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", rotateToMouse);
    };
  }, [imageUrl]); // Dependency array to trigger effect when imageUrl changes

  // Adjust card styles based on the image orientation and dimensions
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
    width: "100%", // Changed to be responsive
    height: "100%", // Changed to be responsive
  };
  

  return (
    <div
      className={`card ${imageOrientation}`} // Apply either 'landscape' or 'portrait' class
      ref={cardRef}
      style={cardStyle}
    >

      <div className="glow" ref={glowRef} />
    </div>
  );
};

export default Card;
