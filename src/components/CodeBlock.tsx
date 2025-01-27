import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ children, language }: { children: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar!", err);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        marginBottom: "1rem",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
      }}
    >
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: copied ? "#4CAF50" : "#008CBA",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
          zIndex: 1,
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
        }}
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
      <SyntaxHighlighter language={language} style={docco}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
