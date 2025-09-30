import { useState } from "react";
import CodeBlock from "../codeBlock";
import ReservedKeywordPopUp from "./jsReservedKeywords";
import ComponentBase from "../componentBase";

export default function Variables() {
  const [showKeywords, setShowKeywords] = useState(false);

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
    <ComponentBase title="Variables" color="green">
      {/* Introduction */}
      <section className="text-gray-400 text-lg sm:text-xl text-left mb-10">
        <p className="whitespace-pre-wrap">
          Let’s talk <strong>variables</strong> — JavaScript’s little name tags
          for your data. Think of them as labeled drawers in a dresser: slap a
          label on, toss something inside, and pull it back out whenever you
          need it. Clean, simple, and way more organized than my actual dresser.
          {"\n"}
          Variable names can include: <strong>letters</strong>,{" "}
          <strong>numbers</strong>,<strong>_</strong>, and <strong>$</strong> —
          but don’t get too wild: they can’t <em>start</em> with a number. Also,
          some words are off-limits because JavaScript already uses them
          (looking at you, <code>let</code> and <code>const</code>).
        </p>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowKeywords(true)}
            className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-colors duration-200"
          >
            Reserved Keyword List
          </button>
        </div>

        {showKeywords && (
          <ReservedKeywordPopUp onClose={() => setShowKeywords(false)} />
        )}

        <p className="whitespace-pre-wrap mt-6">
          To declare a variable, you usually start with{" "}
          <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono text-base sm:text-lg">
            let
          </code>{" "}
          followed by the name you want JavaScript to remember it by.
        </p>

        <p className="mt-4">✅ Works fine:</p>
        <code className="mt-2 bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
          let $name;
          {"\n"}let name;
          {"\n"}let _name;
        </code>

        <p className="mt-4">❌ Throws errors:</p>
        <code className="mt-2 bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
          let 1name;
          {"\n"}let let;
          {"\n"}let const;
        </code>

        <p className="whitespace-pre-wrap mt-6">
          Once the variable exists, you can assign a value to it with the{" "}
          <code>=</code> (assignment operator). You can declare and assign in
          two steps or do it all at once:
        </p>

        <code className="mt-2 bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre-wrap">
          let name = "JavaScript";{" "}
          <span className="text-gray-400 text-sm">
            // declaring AND assigning in one go
          </span>
          {"\n\n"}
          let name;
          <span className="text-gray-400 text-sm">
            // declaring the variable name
          </span>
          {"\n"}name = "JavaScript";{" "}
          <span className="text-gray-400 text-sm">
            // now assigning a value to it
          </span>
        </code>

        <p className="whitespace-pre-wrap mt-6">
          Back to our dresser analogy: if we write{" "}
          <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono text-base sm:text-lg">
            let name = "JavaScript";
          </code>
          , that’s like putting a sticky note on one drawer that says{" "}
          <strong>name</strong> and dropping <strong>"JavaScript"</strong>{" "}
          inside. Later, we can swap the contents — JavaScript just opens the
          drawer, tosses the old value, and puts in the new one.
        </p>

        <code className="mt-2 bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre-wrap">
          name = "Hello, World!";{" "}
          <span className="text-gray-400">
            // the drawer now holds "Hello, World!"
          </span>
        </code>

        <p className="whitespace-pre-wrap mt-6">
          You can even copy values from one drawer to another:
        </p>

        <code className="mt-2 bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
          let name = "Hello, World!";
          {"\n"}let hello;
          {"\n"}hello = name;{" "}
          <span className="text-gray-400">
            // hello now has the same value as name
          </span>
        </code>

        <p className="whitespace-pre-wrap mt-6">
          Alright, plot twist — what happens if we change the value of{" "}
          <code className="bg-gray-900 px-1 py-0.5 rounded text-green-400 font-mono">
            name
          </code>
          to be <strong>"some new value"</strong>? Take a guess: what do you
          think{" "}
          <code className="bg-gray-900 px-1 py-0.5 rounded text-green-400 font-mono">
            hello
          </code>
          will hold now?
        </p>

        <code className="mt-2 bg-gray-900 px-2 py-1 rounded text-green-400 font-mono block whitespace-pre">
          let name = "some new value";
        </code>

        <p className="whitespace-pre-wrap mt-6">
          Trick question! Changing{" "}
          <code className="bg-gray-900 px-1 py-0.5 rounded text-green-400 font-mono">
            name
          </code>{" "}
          doesn’t magically update{" "}
          <code className="bg-gray-900 px-1 py-0.5 rounded text-green-400 font-mono">
            hello
          </code>
          . JavaScript basically just slaps a new label on a fresh drawer for{" "}
          <strong>name</strong> and stuffs <strong>"some new value"</strong>{" "}
          inside it. Meanwhile, <strong>hello</strong> is still chilling in its
          old drawer with
          <strong>"Hello, World!"</strong>. No mind-reading variables here.
        </p>

        <p className="whitespace-pre-wrap mt-6">
          That’s the core idea: variables let us name, reuse, and shuffle around
          values instead of hard-coding them everywhere. Without them,
          programming would feel like playing Jenga blindfolded.
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
    </ComponentBase>
  );
}
