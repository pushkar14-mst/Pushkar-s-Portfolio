// import { useEffect } from "react";
import "./AboutSection.css";

import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
const snippet = `
  import React, { useState } from "react";
  import "./WhatDoIDo.css";
  interface WhatDoIDoProps {
    about: string;
  }
  const WhatDoIDo: React.FC<WhatDoIDoProps> = (props) => {
    const [showAbout, setShowAbout] = useState(false);

    const handleRunClick = () => {
      setShowAbout(true);
    };

    return (
      <div className="container">
        <button className="run-button" onClick={handleRunClick}>
          Run
        </button>
        <div className={"about-section"}>
          <h2>About Me</h2>
          <p>
            {props.about}
          </p>
        </div>
      </div>
    );
  };
  export default WhatDoIDo;
`;
const AboutSection = () => {
  const [code, setCode] = useState(snippet);
  return (
    <section id="about-section">
      <div className="code-block">
        <CodeEditor
          value={code}
          language="tsx"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          data-color-mode="dark"
          padding={15}
          // minHeight={200}
          style={{
            backgroundColor: "#0B0D0F",
            color: "#86525F",
            width: "720px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
