import { useEffect, useRef, useState } from "react";

export default function Copy() {
  const [text, setText] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onmessage = (e) => {
      setText(e.data);
    };

    return () => ws.current.close();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    ws.current.send(value);
  };

  return (
    <div style={styles.container}>
      <h2>📝 Live Notes – /copy</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        style={styles.textarea}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    background: "#f1f5f9",
    display: "flex",
    flexDirection: "column"
  },
  textarea: {
    flex: 1,
    width: "100%",
    border: "none",
    outline: "none",
    resize: "none",
    padding: 20,
    fontSize: 16,
    boxSizing: "border-box"
  }
};

