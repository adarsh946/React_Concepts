import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+-={}[]:;'<>,.?/|~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  const copyClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 555);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto text-green-500 bg-gray-700 rounded-lg my-8 px-4 py-3">
        <h1 className="text-center text-white mb-4">Password Generator</h1>
        <div className="rounded-lg mb-4 flex shadow overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="outline-none py-1 px-3 w-full"
            ref={passwordRef}
          />
          <button
            onClick={copyClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <label>Length : {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numAllow"
              onChange={(prev) => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numAllow">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charAllow"
              defaultChecked={charAllow}
              onChange={(prev) => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charAllow">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
