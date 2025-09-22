import { useState } from "react";

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
  const [codeText, setCodeText] = useState(initialCode);
  const [output, setOutput] = useState<string>("");

  const runCode = () => {
    const logs: string[] = [];
    try {
      // Intercept console.log
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

      // Run the user's code
      new Function(codeText)();

      console.log = originalLog;
    } catch (err) {
      logs.push(`Error: ${(err as Error).message}`);
    }

    setOutput(logs.join("\n"));
  };

  return (
    <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner">
      <h2 className="flex justify-center text-2xl sm:text-3xl font-bold text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Editable code area */}
      <textarea
        className="w-full h-40 p-4 bg-gray-900 text-yellow-400 font-mono rounded-lg resize-y"
        value={codeText}
        onChange={(e) => setCodeText(e.target.value)}
      />

      <div className="flex justify-center mt-4">
        <button
          onClick={runCode}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
        >
          Run Code
        </button>
      </div>

      <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap">
        {output || "Output will appear here..."}
      </pre>
    </section>
  );
}
