import React from "react";
import NavigationButtons from "./NavigatorButtons";

type ComponentBaseProps = {
  children: React.ReactNode;
  title: string;
  color: string;
};

export default function ComponentBase({
  children,
  title,
  color,
}: ComponentBaseProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6 sm:p-10 transition-all duration-300">
      <div className="w-full flex justify-between mb-6">
        <NavigationButtons />
      </div>

      <div className="w-full max-w-3xl flex-1">
        <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 my-8">
          <h1
            className={`text-4xl sm:text-5xl font-extrabold text-${color}-400 mb-6 text-center`}
          >
            {title}
          </h1>
          {children}
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
