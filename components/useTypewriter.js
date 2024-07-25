import { useEffect, useState } from "react";

const useTypewriter = (words, typingSpeed = 100, pauseDuration = 1000) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const i = loop % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingInterval = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [text, isDeleting]);

  return text;
};

export default useTypewriter;
