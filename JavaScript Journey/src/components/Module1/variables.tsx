import NavigationButtons from "../NavigatorButtons";
import CodeBlock from "../codeBlock";

export default function Variables() {
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
              Variables are JavaScript's labels. They store data and make it
              accessible throughout your program.
              {"\n\n"}
              <span className="text-gray-400 text-sm italic">
                There are additional details regarding variable accessibility,
                which we’ll cover later.
              </span>
              {"\n\n"}
              Variable names can include letters, numbers, _, and $, but cannot
              start with a number. There are also a few reserved keywords in
              JavaScript that cannot be used as variable names.
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
              To declare a variable, use the keyword{" "}
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono">
                let
              </code>{" "}
              or{" "}
              <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono">
                const
              </code>
              , followed by the variable name. Let’s look at examples below.
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
