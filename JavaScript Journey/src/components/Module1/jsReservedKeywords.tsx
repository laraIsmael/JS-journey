type ReservedKeywordPopUpProps = {
  onClose: () => void;
};

export default function ReservedKeywordPopUp({
  onClose,
}: ReservedKeywordPopUpProps) {
  const reservedKeywords = [
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "let",
    "yield",
    "await",
  ];

  const reservedLiterals = ["null", "true", "false"];

  const futureReserved = [
    "enum",
    "implements",
    "interface",
    "package",
    "private",
    "protected",
    "public",
    "static",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-6 max-w-2xl w-full overflow-y-auto max-h-[90vh]">
        {/* Header with Title + Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-400">
            Reserved Words in JavaScript
          </h2>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-300 mb-6">
          In JavaScript, there are several words that have a special meaning to
          the language's interpreter and cannot be used as variable names. If
          you try to use one of these words, you'll get a syntax error.
        </p>

        {/* Reserved Keywords */}
        <h3 className="text-xl font-semibold text-green-300 mb-2">
          Reserved Keywords
        </h3>
        <p className="text-gray-400 mb-4">
          These are words with a specific purpose, such as defining variables or
          controlling the flow of a program.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 text-gray-300 font-mono">
          {reservedKeywords.map((word) => (
            <span
              key={word}
              className="bg-gray-900 px-2 py-1 rounded text-center"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Reserved Literals */}
        <h3 className="text-xl font-semibold text-green-300 mb-2">
          Reserved Literals
        </h3>
        <p className="text-gray-400 mb-4">
          These are words that represent fixed values in the language.
        </p>
        <div className="flex gap-2 flex-wrap mb-6 text-gray-300 font-mono">
          {reservedLiterals.map((word) => (
            <span key={word} className="bg-gray-900 px-2 py-1 rounded">
              {word}
            </span>
          ))}
        </div>

        {/* Future Reserved */}
        <h3 className="text-xl font-semibold text-green-300 mb-2">
          Future Reserved Keywords
        </h3>
        <p className="text-gray-400 mb-4">
          These words are not currently in use in all JavaScript implementations
          but are reserved for potential future use. It's a good practice to
          avoid them to prevent future conflicts.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 text-gray-300 font-mono">
          {futureReserved.map((word) => (
            <span
              key={word}
              className="bg-gray-900 px-2 py-1 rounded text-center"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Close Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
