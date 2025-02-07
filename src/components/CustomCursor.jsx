import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(24);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isVisible, setIsVisible] = useState(window.innerWidth > 768); // Hide on small screens

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 768);
    };

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hoverButton = () => {
      setSize(50);
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

    window.addEventListener("resize", handleResize);
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
      window.removeEventListener("resize", handleResize);
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

  if (!isVisible) return null; // Hide cursor on mobile/tablet

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none border"
      animate={{
        x: position.x - size / 2,
        y: position.y - size / 2,
        width: size,
        height: size,
        backgroundColor: isHoveringLink
          ? "rgba(0, 0, 0, 0)"
          : isHoveringButton
          ? "rgba(0, 0, 0, 0.2)"
          : "rgba(0, 0, 0, 0.4)",
        borderColor: isHoveringButton ? "black" : "rgba(0, 0, 0, 0.5)",
        borderWidth: isHoveringButton ? "2px" : "1px",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
      style={{ zIndex: 1000 }}
    />
  );
};

export default CustomCursor;
