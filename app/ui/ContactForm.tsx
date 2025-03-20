import React from "react";

export default function ContactForm() {
  return (
    <div className="w-[414px] h-[276px]">
      <div className="bg-industrialgray border border-deadwhite rounded-lg shadow-punchcard p-6">
        <div className="bg-offwhite h-4 mb-4" />

        <h2 className="font-mono text-xl font-bold text-lightgreen mb-6">
          Contact me:
        </h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-mono text-xl font-bold text-lightgreen"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-[264px] h-[29px] bg-industrialgray border border-pearl rounded-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-mono text-xl font-bold text-lightgreen"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-[264px] h-[29px] bg-industrialgray border border-pearl rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
