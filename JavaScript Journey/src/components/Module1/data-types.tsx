import CodeBlock from "../codeBlock";
import ComponentBase from "../componentBase";

export default function DataTypes() {
  return (
    <ComponentBase title="Data Types" color="teal">
      <p className="text-gray-400 text-lg sm:text-xl text-left mb-2">
        Every value in JavaScript belongs to a <em>data type</em>. If a{" "}
        <strong>variable</strong> is like a drawer you label, then the{" "}
        <strong>data type</strong> is what’s actually inside the drawer—socks,
        snacks, or maybe that one tangle of mystery cables we all own. 🧦🍪🔌
      </p>
      <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono">
        [Number, BigInt, String, Boolean, null, undefined, Symbol, Object]
      </code>
      <p className="text-gray-400 text-lg sm:text-xl text-left mb-2 mt-2">
        The first seven are called <strong>primitive</strong> data types, and
        then there’s <code>Object</code>—the overachiever that refuses to fit
        neatly into the same box. It’s like that one drawer where you keep
        “miscellaneous stuff.”
      </p>
      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
        JavaScript is{" "}
        <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono text-base sm:text-lg">
          dynamically typed
        </code>
        . Translation? Your drawers don’t lock. You can put socks in one moment,
        and next thing you know, it’s full of cookies. The drawer doesn’t mind.
        🍪
      </p>
      <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono block whitespace-pre">
        let greeting = "Hello!";
        {"\n"}greeting = 123;
      </code>
      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
        See that? Your string just shapeshifted into a number. It’s flexible and
        sometimes magical, but also a little reckless.
      </p>
      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6 italic">
        Pro tip: If you don’t love the idea of your drawers constantly swapping
        contents, TypeScript comes to the rescue. It adds labels that say “This
        drawer only holds socks” (or numbers, or strings) and makes sure you
        stick to it. Fewer surprises, fewer bugs, more peace of mind.
      </p>
      {/* --- String Section --- */}
      <h3 className="text-4xl sm:text-3xl font-extrabold text-teal-400 mb-6 text-left">
        Strings
      </h3>

      <code className="bg-gray-900 px-2 py-1 my-4 rounded text-teal-400 font-mono block whitespace-pre">
        let single = 'Hello';
        {"\n"}let double = "World";
        {"\n"}let backtick = `Hi there`;
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
        Strings is JavaScript way of representing text. You will know that it is
        a string because the value will be inside quates. You can use{" "}
        <code className="bg-gray-900 px-2 py-1 mx-2 rounded text-teal-400 font-mono text-base sm:text-lg">
          ''
        </code>{" "}
        single quotes,{" "}
        <code className="bg-gray-900 px-2 py-1 mx-2 rounded text-teal-400 font-mono text-base sm:text-lg">
          ""
        </code>{" "}
        double quotes, or{" "}
        <code className="bg-gray-900 px-2 py-1 mx-2 rounded text-teal-400 font-mono text-base sm:text-lg">
          ``
        </code>
        backticks.
        <br />
        Backticks are special because they allow{" "}
        <strong>template literals</strong> — you can embed variables and
        expressions with{" "}
        <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono">
          ${"{ }"}
        </code>
        .
      </p>

      <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono block whitespace-pre-wrap">
        let name = 'World';{"\n"}
        console.log("Hello " + name);{" "}
        <span className="text-gray-400 text-sm">// concatenation</span>
        {"\n"}
        console.log(`Hello ${"{name}"}`);{" "}
        <span className="text-gray-400 text-sm">// template literal</span>
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left my-6">
        Using the \ backslash inside the string is a sign that the value after
        it is not part of the string but isntead is a code for some action:
        <br />
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          \n
        </code>{" "}
        - n will add a new line
        <br />
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          \"
        </code>{" "}
        - " will add a double quotes to the string{" "}
      </p>

      <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono block whitespace-pre-wrap">
        let greeting = "Hello, World!"
        {"\n"}console.log(greeting.length);{" "}
        <span className="text-gray-400 text-sm">// greeting length = 13</span>
      </code>
      <p className="text-gray-400 text-lg sm:text-xl text-left my-6">
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          .length
        </code>{" "}
        We’ll dive into methods and functions later, but for now think of
        .length as a built-in tool that tells you how many characters are in the
        string.
      </p>

      {/* String practice */}
      <h2 className="flex justify-center text-2xl sm:text-3xl font-bold text-white mb-2 mt-10">
        Want to give it a try?
      </h2>
      <p className="mb-10 text-gray-400 text-lg sm:text-xl text-center">
        Let’s explore how JavaScript treats strings with some quick challenges.
      </p>

      <CodeBlock
        title=" Strings Question 1"
        description={`What do you think "Hello" + " " + "World" will return?
Before hitting Run Code, replace the ___ with your guess.`}
        initialCode={`console.log("Hello" + " " + "World"); 
// What will this return? ___`}
      />

      <CodeBlock
        title="Strings Question 2"
        description={`What will "JavaScript".length return?
Before running, replace the ___ with your guess. `}
        initialCode={`console.log("JavaScript".length); 
// What will this return? ___`}
      />

      <CodeBlock
        title="Strings Question 3"
        description={
          "What do you think `I have ${5 + 5} apples` will return?\n(Hint: backticks allow expressions inside ${ })."
        }
        initialCode={
          "console.log(`I have ${5 + 5} apples`);\n// What will this return? ___"
        }
      />

      <CodeBlock
        title="Strings Question 4"
        description={`What happens if you try "10" + 2 ?
Before running, replace the ___ with your guess. 
HINT: this return value will be of type string`}
        initialCode={`console.log("10" + 2); 
// What will this return? ___`}
      />

      <CodeBlock
        title="Strings Question 5"
        description={`What do you think "\\n" will do?`}
        initialCode={`console.log("hello, \\n World!"); 
// What will this return? ___`}
      />

      {/* --- Number Section --- */}
      <h3 className="text-4xl sm:text-3xl font-extrabold text-teal-400 mb-6 text-center">
        Numbers
      </h3>

      <code className="bg-gray-900 px-2 py-1 my-4 rounded text-teal-400 font-mono block whitespace-pre">
        let int = 123;
        {"\n"}let float = 12.3;
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
        As you can imagine, this data type represents{" "}
        <code className="bg-gray-900 px-2 py-1 mx-2 rounded text-teal-400 font-mono text-base sm:text-lg">
          integers
        </code>{" "}
        but it also represents{" "}
        <code className="bg-gray-900 px-2 py-1 mx-2 rounded text-teal-400 font-mono text-base sm:text-lg">
          floating-point
        </code>{" "}
        numbers. All the expected math operations apply here. Some basics:
      </p>

      <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono block whitespace-pre">
        * <span className="text-gray-400 text-sm"> // multiplication</span>
        {"\n"} / <span className="text-gray-400 text-sm"> // division</span>
        {"\n"} + <span className="text-gray-400 text-sm"> // addition</span>
        {"\n"} - <span className="text-gray-400 text-sm"> // subtraction</span>
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left my-6">
        Besides regular numbers, JavaScript also includes three special numeric
        troublemakers:{" "}
        <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono">
          Infinity
        </code>
        ,{" "}
        <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono">
          -Infinity
        </code>
        , and{" "}
        <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono">
          NaN
        </code>
        .
      </p>

      <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono block whitespace-pre-wrap">
        console.log(1 / 0);{" "}
        <span className="text-gray-400 text-sm">// Infinity</span>
        {"\n"}console.log(-1 / 0);{" "}
        <span className="text-gray-400 text-sm">// -Infinity</span>
        {"\n"}console.log("hello" * 2);{" "}
        <span className="text-gray-400 text-sm">// NaN</span>
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left my-6">
        <strong>Infinity</strong> is like trying to divide a cookie among zero
        friends — your brain just shrugs and says, “Eh, it’s infinite.” <br />
        <strong>-Infinity</strong> is the same idea, but you somehow owe
        cookies. A bottomless cookie debt. 🍪💸 <br />
        And then there’s <strong>NaN</strong> (short for <em>Not a Number</em>).
        It shows up when math goes completely off the rails — like multiplying{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          "hello" * 2
        </code>
        . Spoiler: it won’t magically give you two greetings. 👋👋
      </p>

      <p className="text-gray-400 text-lg sm:text-xl text-left">
        The wildest part? Both{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          Infinity
        </code>{" "}
        and{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          NaN
        </code>{" "}
        still have a type of{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          "number"
        </code>
        . So yes, JavaScript officially thinks “Not a Number” is… a number.
      </p>
      {/* number example*/}
      <h2 className="flex justify-center text-2xl sm:text-3xl font-bold text-white mb-2 mt-10">
        Want to give it a try?
      </h2>
      <p className="mb-10 text-gray-400 text-lg sm:text-xl text-center">
        Let's look at some examples and see how JavaScript treats it.
      </p>
      <CodeBlock
        title="Numbers Question 1"
        description={`What do you think 10 + 5 will return?
Before hitting Run Code, replace the ___ with your answer so you can compare.`}
        initialCode={`console.log(10 + 5); 
// What will 10 + 5 return? ___`}
      />

      <CodeBlock
        title="Numbers Question 2"
        description={`What do you think 7 - 20 will return?
Before hitting Run Code, replace the ___ with your answer so you can compare.`}
        initialCode={`console.log(7 - 20); 
// What will 7 - 20 return? ___`}
      />

      <CodeBlock
        title="Numbers Question 3"
        description={`What do you think 5 * 5 will return?
Before hitting Run Code, replace the ___ with your answer so you can compare.`}
        initialCode={`console.log(5 * 5); 
// What will 5 * 5 return? ___`}
      />

      <CodeBlock
        title="Numbers Question 4"
        description={`What do you think 12 / 0 will return?
Before hitting Run Code, replace the ___ with your answer so you can compare.`}
        initialCode={`console.log(12 / 0); 
// What will 12 / 0 return? ___`}
      />

      <CodeBlock
        title="Numbers Question 5"
        description={`What do you think "10" * 2 will return?
Before hitting Run Code, replace the ___ with your answer so you can compare.`}
        initialCode={`console.log("10" * 2); 
// What will "10" * 2 return? ___`}
      />

      <CodeBlock
        title="Numbers Question 6"
        description={`What do you think "hello" * 2 will return?
Before hitting Run Code, replace the ___ with your answer so you can compare.`}
        initialCode={`console.log("hello" * 2); 
// What will "hello" * 2 return? ___`}
      />

      <CodeBlock
        title="Numbers Question 7"
        description={`What do you think "hello" + 2 will return?
Before hitting Run Code, replace the ___ with your answer so you can compare.`}
        initialCode={`console.log("hello" + 2); 
// What will "hello" + 2 return? ___`}
      />

      {/* --- BigInt Section --- */}
      <h3 className="text-4xl sm:text-3xl font-extrabold text-teal-400 mb-6 text-center">
        BigInt
      </h3>

      <code className="bg-gray-900 px-2 py-1 my-4 rounded text-teal-400 font-mono block whitespace-pre">
        let normal = 123;{" "}
        <span className="text-gray-400 text-sm">// a regular Number</span>
        {"\n"}let big = 123n;{" "}
        <span className="text-gray-400 text-sm">// a BigInt</span>
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
        JavaScript numbers are reliable only up to{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          2^53 - 1
        </code>{" "}
        thats the same as the number:{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          9007199254740991
        </code>{" "}
        or less thean
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          -(2^53 - 1)
        </code>{" "}
        for negatives. Beyond that, you risk losing precision.{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          BigInt
        </code>{" "}
        was added to handle giant integers without rounding errors. Just tack an{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          n
        </code>{" "}
        onto the end of the number and your number will now be of type{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          BigInt{" "}
        </code>
        . To be more precise the number type can handle integers up to:{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          1.7976931348623157 * 10^308
        </code>{" "}
        but outside the range
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          9007199254740991
        </code>{" "}
        to{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          -9007199254740991
        </code>{" "}
        there will be a precision error. That happends because not all digit
        will fit into the fixed storage for numbers, that is 64-bit. So you will
        get an aproximated number.
      </p>

      <code className="bg-gray-900 px-2 py-1 rounded text-teal-400 font-mono block whitespace-pre">
        typeof 123; <span className="text-gray-400 text-sm">// "number"</span>
        {"\n"}typeof 123n;{" "}
        <span className="text-gray-400 text-sm">// "bigint"</span>
        {"\n"}Number.MAX_SAFE_INTEGER + 1;{" "}
        <span className="text-gray-400 text-sm">// 9007199254740992</span>
        {"\n"}Number.MAX_SAFE_INTEGER + 2;{" "}
        <span className="text-gray-400 text-sm">
          // 9007199254740992 😬 (wrong!)
        </span>
        {"\n"}9007199254740991n + 2n;{" "}
        <span className="text-gray-400 text-sm">// 9007199254740993n ✅</span>
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left my-6">
        Did you notice the{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          typeof
        </code>
        ?
        <br />
        We are not gonna go super indepth, but you should know that{" "}
        <strong>typeof</strong> is a JavaScrript <strong>operator</strong>{" "}
        basically it asks JavaScript what type does this value belongs to?
        <br />
        It's important to know that even though both{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          Number
        </code>{" "}
        and{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          BigInt
        </code>{" "}
        are represantations of integers they do not mix.
        <code className="bg-gray-900 px-2 py-1 my-6 rounded text-teal-400 font-mono block whitespace-pre">
          console.log(1n + 2);{" "}
          <span className="text-gray-400 text-sm">
            // Error: Cannot mix BigInt and other types
          </span>
        </code>
        To make sure you are calculating 2 values of the same type you can
        covert the type using:{" "}
        <code className="bg-gray-900 px-1 py-0.5 rounded text-teal-400 font-mono">
          Number() BitInt()
        </code>{" "}
        methods.
      </p>
      <code className="bg-gray-900 px-2 py-1 my-6 rounded text-teal-400 font-mono block whitespace-pre-wrap">
        let i = 1;
        <span className="text-gray-400 text-sm">// Number</span>
        {"\n"}i = BigInt(i);
        {"\n"}
        typeof i;
        <span className="text-gray-400 text-sm">// BitInt</span>
        {"\n"}i = Number(i);
        {"\n"}
        typeof Number(i);
        <span className="text-gray-400 text-sm">// Number</span>
      </code>

      {/* BigInt Example */}
      <h2 className="flex justify-center text-2xl sm:text-3xl font-bold text-white mb-2 mt-10">
        Quick Check
      </h2>
      <p className="mb-10 text-gray-400 text-lg sm:text-xl text-center">
        Try these out and compare <code>typeof</code> along with the values.
      </p>

      <CodeBlock
        title="BigInt Question 1"
        description={`What type will this be?`}
        initialCode={`console.log(typeof 42);
// What will this return? ___`}
      />

      <CodeBlock
        title="BigInt Question 2"
        description={`And what about this one?`}
        initialCode={`console.log(typeof 42n);
// What will this return? ___`}
      />

      <CodeBlock
        title="BigInt Question 3"
        description={`What do you think will happen here?`}
        initialCode={`console.log(Number.MAX_SAFE_INTEGER + 2);
// Will this be precise? ___`}
      />

      <CodeBlock
        title="BigInt Question 4"
        description={`Now compare with BigInt — what’s different?`}
        initialCode={`console.log(9007199254740991n + 2n);
// What will this return? ___`}
      />
      {/* --- Boolean Section --- */}
      {/* --- null Section --- */}
      {/* --- undefined Section --- */}
    </ComponentBase>
  );
}
