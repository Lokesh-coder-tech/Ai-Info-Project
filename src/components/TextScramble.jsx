import { useState, useRef } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const TextScramble = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 0.3;

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 20);
  };

  return (
    <p
      onMouseEnter={handleMouseEnter}
      style={{ cursor: "pointer", letterSpacing: "2px" }}
    >
      {displayText}
    </p>
  );
};

export default TextScramble;
