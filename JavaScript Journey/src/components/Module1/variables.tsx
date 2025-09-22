import NavigationButtons from "../NavigatorButtons";
import CodeBlock from "../codeBlock";

export default function Variables() {
  const letTitle = "Declaring a variable";
  const letDescriptio =
    "line 1 declaring a variable hello. \n line 2 adding a value to that ";
  const letCode = `  // declaring a variable:
  let hello;
  
  // adding a value to the variable we just created:
  hello = "Hello,";

  // both steps can be done at once:
  let name = "JavaScript";

  // now we can access that values by using the variable name, 
  console.log(hello, name)
  `;

  const constTitle = "Const or Let";
  const constDescriptio =
    "When declaring a variable you can use the keyword let or const. The difference is that let can change its values where const (constant) as the name suggests can not. \n If you want to make sure a variable will not change naming it const will ensure that is the case and will tell other people reading your code that as well. Let's look at some examples:";
  const constCode = `  // declating a varibale with the keyword const. As much as I want to not age my birhtday eyar will continue to be the same, so let's create a variable that stores my day of birth:
  const myBirthday = "01/25/1988"

  // if we try cnaging that value we will get an error.
  myBirthday = 01/25/2000;

  // If you run the code above ypou will see we get an error. Try it out!`;

  const taskTitle = "Now it's your turn to try:";
  const taskDescriptio =
    '1. Declare two variables: admin and name. \n 2. Assign the value "JavaScript" to the variable name. \n 3. Copy the value from name to admin. \n ';
  const taskCode = `  //write your code starting on line 2.
  
  
  // this console.log will print your answers. We want to see that both name and admin have the value of JavaScript
  console.log(name);
  console.log(name, admin);`;

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
            <p className="text-gray-400 text-sm mt-4 italic">
              - There are more details regarding the accessibility of a
              variables, we will talk about that later.
            </p>
            <br />
            To create or declare a variable in JavaScript we use the keyword{" "}
            <code className="bg-gray-900 px-2 py-1 rounded text-green-400 font-mono">
              let
            </code>{" "}
            after that we add a name that will be our reference to that variable
            that we can access at any point. Let's look at an example to make
            things more clear.
          </p>
          <CodeBlock
            title={letTitle}
            description={letDescriptio}
            initialCode={letCode}
          />
          <CodeBlock
            title={constTitle}
            description={constDescriptio}
            initialCode={constCode}
          />
          <CodeBlock
            title={taskTitle}
            description={taskDescriptio}
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
