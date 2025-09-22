import NavigationButtons from "../NavigatorButtons";
import CodeBlock from "../codeBlock";

export default function Variables() {
  const letTitle = "creating a variable using the keyword LET";
  const letDescriptio = " this is a little description of how let works";
  const letCode = `
    let hello = "Hello, "
    let name = "JavaScript"

    console.log(hello+name)
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
          <p className="text-gray-400 text-lg sm:text-xl text-center mb-10">
            Variables are JavaScript's labels.
            <br />
            It gets stored and becomes accessible through out the program.
            <br />
            - There are more details regarding the accessibility of a variables,
            we will talk about that later.
            <br />
            This is a little outside of the scode pf this course but we are
            going to use console.log to print the results of what But for now
            lets dive into VARIASBLES:
          </p>
          <CodeBlock
            title={letTitle}
            description={letDescriptio}
            initialCode={letCode}
          />
        </div>
      </div>
      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>Built with React, Vite, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
