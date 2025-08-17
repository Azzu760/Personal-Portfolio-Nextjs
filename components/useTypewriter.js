import { useEffect, useState, useRef } from "react";

const useTypewriter = (words, typingSpeed = 100, pauseDuration = 1000) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const loopRef = useRef(0);

  useEffect(() => {
    const currentIndex = loopRef.current % words.length;
    const fullText = words[currentIndex];

    const handleType = () => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        loopRef.current += 1;
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, words, typingSpeed, pauseDuration]);

  return text;
};

export default useTypewriter;
