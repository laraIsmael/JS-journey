import { useState } from "react";
import NavigationButtons from "../NavigatorButtons";
import CodeBlock from "../codeBlock";

export default function Variables() {
  const [showKeywords, setShowKeywords] = useState(false);

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

  const letTitle = "Declaring a variable";
  const letDescription = `Variables are declared with the keyword 'let'. You can declare first and assign a value later, or do both at once. Let's see some examples:`;
  const letCode = `// Declaration only:
let hello;

// Assigning a value to the variable we just created:
hello = "Hello,";

// Both steps combined:
let name = "JavaScript";

// Accessing the values:
console.log(hello, name);
`;

  const constTitle = "Const vs Let";
  const constDescription = `Variables can also be declared with 'const'. That way the value of the variable, as the name suggests, is constant and cannot be reassigned.
— Note: objects or arrays declared with 'const' can still have their contents modified. This is because of how JavaScript stores those values. More on this later.
Use 'const' when you want a variable to remain bound to the same reference:`;
  const constCode = `// Declaring a constant:
const myBirthday = "01/25/1988";

// Trying to reassign will cause an error:
// Remove the // in front of the line below to see the error
// myBirthday = "01/25/2000"; // ❌ Error

// Objects and arrays are mutable even when declared with const:
const arr = [1, 2];
arr.push(3); // ✅ Allowed
// arr = [4,5]; // ❌ Not allowed

console.log(arr);
`;

  const taskTitle = "Now it's your turn";
  const taskDescription = `1. Declare two variables: 'admin' and 'name'.
2. Assign the value 'JavaScript' to 'name'.
3. Copy the value from 'name' to 'admin'.
Hint: Use 'let' for the variables so you can assign values step by step.`;
  const taskCode = `// Write your code starting on line 2:


console.log(name);
console.log(name, admin);
`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6 sm:p-10 transition-all duration-300">
      <div className="w-full flex justify-between mb-6">
        <NavigationButtons />
      </div>

      <div className="w-full max-w-3xl flex-1">
        <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 my-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-400 mb-6 text-center">
            Variables
          </h1>

          {/* Introduction */}
          <section className="text-gray-400 text-lg sm:text-xl text-left mb-10">
            <p className="whitespace-pre-wrap">
              Variables are JavaScript's unique labels. They store data and make
              it accessible throughout your program. There are additional
              details regarding variable accessibility, which we’ll cover later.
              {"\n"}
              Variable names can include: <strong>letters</strong>,{" "}
              <strong>numbers</strong>, <strong>_</strong>, <strong>$</strong>{" "}
              but cannot start with a <strong>number</strong>.{"\n"}
              There are also a few reserved keywords in JavaScript that cannot
              be used as variable names.
            </p>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowKeywords(true)}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                Keyword List
              </button>
            </div>
            {/* Popup Modal */}
            {showKeywords && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gray-800 rounded-2xl shadow-xl p-6 max-w-2xl w-full overflow-y-auto max-h-[90vh]">
                  {/* Header with Title + Close Button */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-green-400">
                      Reserved Words in JavaScript
                    </h2>
                    <button
                      onClick={() => setShowKeywords(false)}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-gray-300 mb-6">
                    In JavaScript, there are several words that have a special
                    meaning to the language's interpreter and cannot be used as
                    variable names. If you try to use one of these words, you'll
                    get a syntax error.
                  </p>

                  {/* Reserved Keywords */}
                  <h3 className="text-xl font-semibold text-green-300 mb-2">
                    Reserved Keywords
                  </h3>
                  <p className="text-gray-400 mb-4">
                    These are words with a specific purpose, such as defining
                    variables or controlling the flow of a program.
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
                      <span
                        key={word}
                        className="bg-gray-900 px-2 py-1 rounded"
                      >
                        {word}
                      </span>
                    ))}
                  </div>

                  {/* Future Reserved */}
                  <h3 className="text-xl font-semibold text-green-300 mb-2">
                    Future Reserved Keywords
                  </h3>
                  <p className="text-gray-400 mb-4">
                    These words are not currently in use in all JavaScript
                    implementations but are reserved for potential future use.
                    It's a good practice to avoid them to prevent future
                    conflicts.
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
                      onClick={() => setShowKeywords(false)}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            <p className="whitespace-pre-wrap">
              {"\n\n"}
              To declare a variable, use the keyword{"  "}
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono">
                let
              </code>
              {"  "}
              followed by the name you want JavaScript to remember it by.
              {"\n\n"}
              Example that will work:
            </p>
            <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
              let $name;
              {"\n"}let name;
              {"\n"}let _name;
            </code>
            <p className="whitespace-pre-wrap mt-4">
              Example that will not work:
            </p>
            <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
              let 1name;
              {"\n"}let let;
              {"\n"}let const;
            </code>
            <p className="whitespace-pre-wrap mt-4">
              {"\n"}After creating the variable, you can assign data to it using
              the assignment operator{"  "}=
            </p>
            <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
              let name = "JavaScript";
            </code>
            <p className="whitespace-pre-wrap mt-4">
              Now we can access it by the variable name.
            </p>
            <code className="bg-gray-900 px-2 py-1 rounded font-mono block whitespace-pre">
              <span className="text-green-400">alert(name);</span>{" "}
              <span className="text-gray-400">
                // shows the variable content
              </span>
            </code>
            <p className="whitespace-pre-wrap mt-4">
              Think of variables as drawers, and JavaScript as a dresser that
              contains multiple drawers. When we create a variable by giving it
              a name, JavaScript labels one of its drawers and puts whatever
              value you set inside it.
              <br />
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
                let name = "JavaScript";
              </code>
              <br />
              So following our dresser analogy above, we now have a drawer
              labeled <code>name</code> and inside it the value "JavaScript."
              Now let’s say you want to change the value inside the variable
              <code> name</code>. That’s no problem—JavaScript would open the
              drawer, take out the value "JavaScript," and put the new value
              there. Let’s make it have the value "Hello, World!" instead:
              <br />
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
                let name = "Hello, World!";
              </code>
              <br />
              Now when we try to use the variable <code>name</code>, we will see{" "}
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono">
                "Hello, World!"
              </code>{" "}
              and no longer{" "}
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono">
                "JavaScript"
              </code>
              . We can also declare two variables and copy the data from one to
              the other:
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
                <span className="text-green-400">
                  let name = "Hello, World!";
                  {"\n"}
                  let hello;
                </span>
                <span className="text-gray-400">
                  {"\n"}
                  // copy the value of name into hello
                </span>
                <span className="text-green-400">
                  {"\n"}
                  hello = name;
                </span>
                <span className="text-gray-400">
                  {"\n"}
                  // now the value of hello is "Hello, World!"
                </span>
              </code>
            </p>
            <p className="whitespace-pre-wrap mt-4">
              Let’s jump into some code to understand it better:
            </p>
          </section>

          {/* Let example */}
          <CodeBlock
            title={letTitle}
            description={letDescription}
            initialCode={letCode}
          />

          <hr className="my-8 border-gray-700" />

          {/* Const example */}
          <CodeBlock
            title={constTitle}
            description={constDescription}
            initialCode={constCode}
          />

          <hr className="my-8 border-gray-700" />

          {/* Task */}
          <CodeBlock
            title={taskTitle}
            description={taskDescription}
            initialCode={taskCode}
          />
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>Built with React, Vite, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
