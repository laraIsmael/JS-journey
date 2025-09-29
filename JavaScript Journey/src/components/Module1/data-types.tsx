import { useState } from "react";
import CourseNavigation from "../CourseNavigation";
import NavigationButtons from "../NavigatorButtons";

export default function DataTypes() {
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
        <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 my-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-400 mb-6 text-center">
            Data Types
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl text-left mb-2">
            Every value in JavaScript belong to a data type. So that makes this
            a very fundamental and importat consept, there are eight data types:
          </p>
          <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono">
            [Number, BigInt, String, Boolean, null, undefined, Symbol, Object]
          </code>
          <p className="text-gray-400 text-lg sm:text-xl text-left mb-2 mt-2">
            the first seven are Primitive data types and Object, yes you guessed
            it, is a Non-Primitive data type.
            {"\n"} We also get to use our the variable skills we just learn on
            last chapter.
          </p>
          <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
            JavaScript is a{" "}
            <code className="bg-gray-900 px-2 py-1  rounded text-green-400 font-mono text-base sm:text-lg">
              dynamically typed
            </code>{" "}
            language. What does that means?, you ask.
            {"\n"} It means that you can assign a variable a value of one data
            type and later on reassign it to a different one. In the example
            bellow you can see a string variable that then gets assign to a
            number data type.
            {"\n"}
          </p>
          <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
            let greeting = "Hello!";
            {"\n"}greeting = 123;
          </code>
          <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
            One of the main criticizme of <strong>dinamically typed</strong>{" "}
            languages is that it can be error prone as if you are expecting one
            data type and you can't assume it eill{" "}
          </p>

          {/* --- String Section --- */}

          {/* --- Number Section --- */}

          {/* --- BigInt Section --- */}

          {/* --- Boolean Section --- */}

          {/* --- null Section --- */}

          {/* --- undefined Section --- */}
        </div>
      </div>
      <div className="w-full flex justify-between mb-6">
        <NavigationButtons />
      </div>
      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>Built with React, Vite, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
