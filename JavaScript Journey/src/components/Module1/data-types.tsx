import ComponentBase from "../componentBase";

export default function DataTypes() {
  //   const stringCode: string = `const greeting: string = "Hello, JavaScript!";
  // const length: number = greeting.length;
  // console.log(greeting, length);`;

  //   const numberCode: string = `const price: number = 25.50;
  // const quantity: number = 3;
  // const total: number = price * quantity;
  // console.log(total);`;

  //   const bigIntCode: string = `const hugeNumber: bigint = 9007199254740991n + 10n;
  // console.log(hugeNumber);`;

  //   const booleanCode: string = `const isRaining: boolean = false;
  // const canDrive: boolean = 18 > 16;
  // console.log(isRaining, canDrive);`;

  //   const nullCode: string = `let user: null = null;
  // console.log(user);`;

  //   const undefinedCode: string = `let variable: any;
  // console.log(variable);`;

  return (
    <ComponentBase title="Data Types" color="purple">
      <p className="text-gray-400 text-lg sm:text-xl text-left mb-2">
        Every value in JavaScript belongs to a <em>data type</em>. If a{" "}
        <strong>variable</strong> is like a drawer you label, then the{" "}
        <strong>data type</strong> is what’s actually inside the drawer—socks,
        snacks, or maybe that one tangle of mystery cables we all own. 🧦🍪🔌
      </p>

      <code className="bg-gray-900 px-2 py-1 rounded text-purple-400 font-mono">
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
        <code className="bg-gray-900 px-2 py-1 rounded text-purple-400 font-mono text-base sm:text-lg">
          dynamically typed
        </code>
        . Translation? Your drawers don’t lock. You can put socks in one moment,
        and next thing you know, it’s full of cookies. The drawer doesn’t mind.
        🍪
      </p>

      <code className="bg-gray-900 px-2 py-1 rounded text-purple-400 font-mono block whitespace-pre">
        let greeting = "Hello!";
        {"\n"}greeting = 123;
      </code>

      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6">
        See that? Your string just shapeshifted into a number. It’s flexible and
        sometimes magical, but also a little reckless.
      </p>

      <p className="text-gray-400 text-lg sm:text-xl text-left mb-6 italic">
        🔒 Pro tip: If you don’t love the idea of your drawers constantly
        swapping contents, TypeScript comes to the rescue. It adds labels that
        say “This drawer only holds socks” (or numbers, or strings) and makes
        sure you stick to it. Fewer surprises, fewer bugs, more peace of mind.
      </p>

      {/* --- String Section --- */}

      {/* --- Number Section --- */}

      {/* --- BigInt Section --- */}

      {/* --- Boolean Section --- */}

      {/* --- null Section --- */}

      {/* --- undefined Section --- */}
    </ComponentBase>
  );
}
