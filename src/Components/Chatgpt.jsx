import React, { useState } from "react";

const Chatgpt = () => {
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const handleGradeCheck = (e) => {
    if (e.key === "Enter") {
      const numGrade = parseInt(grade, 10);
      if 
    }
  };
  return (
    <div>
      <h2>Grade Level Checker</h2>
      <p>Enter your grade number (1 to 12) and press Enter:</p>
      <input
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        onKeyDown={handleGradeCheck}
        placeholder="Enter your grade..."
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Chatgpt;
