import { useState } from "react";
import CourseNavigation from "../CourseNavigation";
import NavigationButtons from "../NavigatorButtons";

export default function DataTypes() {
  const [stringOutput, setStringOutput] = useState<string>("");
  const [numberOutput, setNumberOutput] = useState<string>("");
  const [bigIntOutput, setBigIntOutput] = useState<string>("");
  const [booleanOutput, setBooleanOutput] = useState<string>("");
  const [nullOutput, setNullOutput] = useState<string>("");
  const [undefinedOutput, setUndefinedOutput] = useState<string>("");

  // Function to run the String example
  const runStringExample = () => {
    const greeting: string = "Hello, JavaScript!";
    const length: number = greeting.length;
    setStringOutput(`String variable: "${greeting}"\nLength: ${length}`);
  };

  const runNumberExample = () => {
    const price: number = 25.5;
    const quantity: number = 3;
    const total: number = price * quantity;
    setNumberOutput(
      `Price: $${price}\nQuantity: ${quantity}\nTotal: $${total}`
    );
  };

  const runBigIntExample = () => {
    // A number that would be too large for a regular Number.
    // The BigInt constructor is used for compatibility.
    const hugeNumber: bigint = BigInt("9007199254740991") + BigInt("10");
    setBigIntOutput(`The number is: ${hugeNumber}\nType: ${typeof hugeNumber}`);
  };

  // Function to run the Boolean example
  const runBooleanExample = () => {
    const isRaining: boolean = false;
    const canDrive: boolean = 18 > 16;
    setBooleanOutput(`Is it raining? ${isRaining}\nCan you drive? ${canDrive}`);
  };

  // Function to run the null example
  const runNullExample = () => {
    const user: null = null;
    const type: string = typeof user;
    setNullOutput(
      `Value: ${user}\nType: ${type}\nNote: typeof null is an object, a historical bug in JavaScript.`
    );
  };

  // Function to run the undefined example
  const runUndefinedExample = () => {
    let variable: undefined; // Declared but not assigned
    const type: string = typeof variable;
    setUndefinedOutput(`Value: ${variable}\nType: ${type}`);
  };

  const stringCode: string = `const greeting: string = "Hello, JavaScript!";
const length: number = greeting.length;
console.log(greeting, length);`;

  const numberCode: string = `const price: number = 25.50;
const quantity: number = 3;
const total: number = price * quantity;
console.log(total);`;

  const bigIntCode: string = `const hugeNumber: bigint = 9007199254740991n + 10n;
console.log(hugeNumber);`;

  const booleanCode: string = `const isRaining: boolean = false;
const canDrive: boolean = 18 > 16;
console.log(isRaining, canDrive);`;

  const nullCode: string = `let user: null = null;
console.log(user);`;

  const undefinedCode: string = `let variable: any;
console.log(variable);`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6 sm:p-10 transition-all duration-300">
      <div className="w-full flex justify-between mb-6">
        <NavigationButtons />
      </div>

      <div className="w-full max-w-3xl flex-1">
        {/* <CourseNavigation /> */}
        <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 my-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-400 mb-6 text-center">
            Data Types
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl text-center mb-10">
            Every value in JavaScript belong to a data type. There are eight
            basic data types and in this chapter we will look into them. Data
            type is a foundatial consept in JavaScrip, so it is a good place to
            start. So let's jump inot it!
          </p>

          {/* --- String Section --- */}
          <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              String
            </h2>
            <p className="text-gray-300 mb-4">
              Strings are used to store and manipulate text. They are enclosed
              in single quotes (''), double quotes (""), or backticks (``).
            </p>
            <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto font-mono text-yellow-400">
              <code>{stringCode}</code>
            </pre>
            <div className="flex justify-center mt-4">
              <button
                onClick={runStringExample}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                Run String Example
              </button>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap">
              {stringOutput || "Output will appear here..."}
            </pre>
          </section>

          {/* --- Number Section --- */}
          <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Number
            </h2>
            <p className="text-gray-300 mb-4">
              The Number type represents both integer and floating-point
              numbers.
            </p>
            <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto font-mono text-yellow-400">
              <code>{numberCode}</code>
            </pre>
            <div className="flex justify-center mt-4">
              <button
                onClick={runNumberExample}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                Run Number Example
              </button>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap">
              {numberOutput || "Output will appear here..."}
            </pre>
          </section>

          {/* --- BigInt Section --- */}
          <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              BigInt
            </h2>
            <p className="text-gray-300 mb-4">
              BigInt is a new data type that can represent integers of arbitrary
              precision, useful for numbers larger than what the Number type can
              hold. It is denoted by appending 'n' to the end of the number.
            </p>
            <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto font-mono text-yellow-400">
              <code>{bigIntCode}</code>
            </pre>
            <div className="flex justify-center mt-4">
              <button
                onClick={runBigIntExample}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                Run BigInt Example
              </button>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap">
              {bigIntOutput || "Output will appear here..."}
            </pre>
          </section>

          {/* --- Boolean Section --- */}
          <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Boolean
            </h2>
            <p className="text-gray-300 mb-4">
              The Boolean type represents a logical entity and can have only two
              values: `true` or `false`.
            </p>
            <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto font-mono text-yellow-400">
              <code>{booleanCode}</code>
            </pre>
            <div className="flex justify-center mt-4">
              <button
                onClick={runBooleanExample}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                Run Boolean Example
              </button>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap">
              {booleanOutput || "Output will appear here..."}
            </pre>
          </section>

          {/* --- null Section --- */}
          <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              null
            </h2>
            <p className="text-gray-300 mb-4">
              `null` is a special value that represents the intentional absence
              of any object value. It means a variable has been explicitly
              assigned "no value".
            </p>
            <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto font-mono text-yellow-400">
              <code>{nullCode}</code>
            </pre>
            <div className="flex justify-center mt-4">
              <button
                onClick={runNullExample}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                Run null Example
              </button>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap">
              {nullOutput || "Output will appear here..."}
            </pre>
          </section>

          {/* --- undefined Section --- */}
          <section className="mb-10 bg-gray-700 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              undefined
            </h2>
            <p className="text-gray-300 mb-4">
              `undefined` is a variable that has been declared but has not been
              assigned a value. It's the default value for uninitialized
              variables.
            </p>
            <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto font-mono text-yellow-400">
              <code>{undefinedCode}</code>
            </pre>
            <div className="flex justify-center mt-4">
              <button
                onClick={runUndefinedExample}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors duration-200"
              >
                Run undefined Example
              </button>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm text-lime-400 whitespace-pre-wrap">
              {undefinedOutput || "Output will appear here..."}
            </pre>
          </section>
        </div>
      </div>
      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>Built with React, Vite, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
