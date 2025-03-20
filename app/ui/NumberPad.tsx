import React from "react";

const NumberPad: React.FC = () => {
  const gridItems = Array(9).fill(null);

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-3 gap-2 w-full max-w-md p-2">
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="relative w-[60px] h-[60px] rounded-full bg-texturedbrass
                     flex items-center justify-center ring-1 ring-goldenyellow
                     ring-offset-1 ring-offset-darkteal
                     hover:bg-bisque transition-colors duration-200"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-linear-to-t from-sepiabrown/80 to-pinkgrey pointer-events-none" />
              {/* Border */}
              <div className="absolute inset-0 border border-bisque rounded-full shadow-punchcard" />
              <div className="absolute inset-0 border border-antiqueBlack rounded-full shadow-punchcard" />
              {/* Number */}
              <div className="font-cormorantGaramond text-xl font-bold text-antiqueblack relative z-10">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NumberPad;
