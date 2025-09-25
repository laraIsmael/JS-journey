import { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "prismjs";
import "prismjs/components/prism-javascript";

type CodeBlockProps = {
  title: string;
  description: string;
  initialCode: string;
};

export default function CodeBlock({
  title,
  description,
  initialCode,
}: CodeBlockProps) {
  const storageKey = `codeblock-${title.replace(/\s+/g, "-").toLowerCase()}`;
  const [output, setOutput] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState<string>(() => {
    if (typeof window !== "undefined") {
      // Get saved code from localStorage, fallback to initialCode
      return localStorage.getItem(storageKey) ?? initialCode;
    }
    return initialCode; // fallback for SSR
  });

  // Save to localStorage whenever code changes
  useEffect(() => {
    localStorage.setItem(storageKey, code);
  }, [code, storageKey]);

  const runCode = () => {
    const logs: string[] = [];
    try {
      const customLog = (...args: unknown[]) => {
        logs.push(
          args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" ")
        );
      };

      const originalLog = console.log;
      console.log = customLog;

      new Function(code)(); // run current editable code

      console.log = originalLog;
    } catch (err) {
      logs.push(`❌ Error: ${(err as Error).message}`);
    }

    setOutput(logs.join("\n"));
  };

  const resetCode = () => {
    setCode(initialCode); // reset editor
    localStorage.removeItem(storageKey); // clear saved version
    setOutput("");
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner text-base sm:text-lg">
      <h2 className="flex justify-center text-2xl sm:text-3xl font-bold text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-300 whitespace-pre-wrap mb-4">{description}</p>

      {/* Editable code area */}
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={(code) => (
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            PreTag="div" // ✅ important: prevent extra <pre>
            customStyle={{
              background: "transparent",
              padding: 0,
              margin: 0,
            }}
            codeTagProps={{
              className: "font-mono text-lg leading-6",
            }}
          >
            {code}
          </SyntaxHighlighter>
        )}
        padding={16}
        className="rounded-lg bg-gray-800 font-mono leading-6 text-gray-100"
      />

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <button
          onClick={runCode}
          className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
        >
          Run Code
        </button>
        <button
          onClick={resetCode}
          className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold text-white transition-colors duration-200"
        >
          Reset
        </button>
        <button
          onClick={copyCode}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors duration-200"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Output */}
      <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap max-h-60 overflow-y-auto">
        {output || "Output will appear here..."}
      </pre>
    </section>
  );
}
