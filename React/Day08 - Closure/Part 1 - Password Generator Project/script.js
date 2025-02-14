import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("abc123!@#");
  const [length, setLength] = useState(10);
  const [numberChanged, setNumberChanged] = useState(false);
  const [charChanged, setCharChanged] = useState(false);

  // useCallback leverages Closure functionality
  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberChanged) str += "0123456789";
    if (charChanged) str += "!@#$%^&*()";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberChanged, charChanged]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <h1>Password is: {password}</h1>
      <div>
        <input
          type="range"
          min={5}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label>Length ({length})</label>

        <input
          id="check"
          type="checkbox"
          defaultChecked={numberChanged}
          onChange={() => setNumberChanged(!numberChanged)}
        ></input>
        <label for="check">Number</label>

        <input
          id="char"
          type="checkbox"
          defaultChecked={charChanged}
          onChange={() => setCharChanged(!charChanged)}
        ></input>
        <label for="char">Character</label>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
