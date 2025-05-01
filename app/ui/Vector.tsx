import React from "react";

interface VectorProps {
  className?: string;
}

export const Vector = ({ className }: VectorProps) => {
  return <div className={`${className}`}></div>;
};

export default Vector; 