import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(24);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hoverButton = () => {
      setSize(50); // Bigger cursor on hover
      setIsHoveringButton(true);
    };

    const leaveButton = () => {
      setSize(24);
      setIsHoveringButton(false);
    };

    const hoverLink = () => {
      setSize(50);
      setIsHoveringLink(true);
    };

    const leaveLink = () => {
      setSize(24);
      setIsHoveringLink(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button").forEach((el) => {
      el.addEventListener("mouseenter", hoverButton);
      el.addEventListener("mouseleave", leaveButton);
    });
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", hoverLink);
      el.addEventListener("mouseleave", leaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button").forEach((el) => {
        el.removeEventListener("mouseenter", hoverButton);
        el.removeEventListener("mouseleave", leaveButton);
      });
      document.querySelectorAll("a").forEach((el) => {
        el.removeEventListener("mouseenter", hoverLink);
        el.removeEventListener("mouseleave", leaveLink);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none border"
      animate={{
        x: position.x - size / 2,
        y: position.y - size / 2,
        width: size,
        height: size,
        backgroundColor: isHoveringLink
          ? "rgba(0, 0, 0, 0)" // Fully transparent on link hover
          : isHoveringButton
          ? "rgba(0, 0, 0, 0.2)" // Slightly dark on button hover
          : "rgba(0, 0, 0, 0.4)", // Default slightly dark
        borderColor: isHoveringButton ? "border-gray-500" : "rgba(0, 0, 0, 0.5)",
        borderWidth: isHoveringButton ? "2px" : "1px",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
      style={{ zIndex: 1000 }}
    />
  );
};

export default CustomCursor;
