import { useEffect, useRef, useState } from "react";
import "./Typewriter.css";

function Typewriter({ html, speed = 95 }) {
  const ref = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const fullText = tempDiv.textContent;
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [html, speed]);

  useEffect(() => {
    if (!ref.current) return;

    const original = document.createElement("div");
    original.innerHTML = html;

    const result = document.createElement("div");
    result.innerHTML = html;

    const fillText = (node, remaining) => {
      for (let child of node.childNodes) {
        if (child.nodeType === 3) {
          const slice = remaining.slice(0, child.textContent.length);
          child.textContent = slice;
          remaining = remaining.slice(slice.length);
        } else if (child.nodeType === 1) {
          remaining = fillText(child, remaining);
        }
      }
      return remaining;
    };

    fillText(result, text);
    ref.current.innerHTML = result.innerHTML;
  }, [text, html]);

  return <h1 className="typewriter" ref={ref}></h1>;
}

export default Typewriter;
