import React from "react";

const SectionStarter = ({ title }: { title: string }) => {
  return (
    <div className="text-center relative flex flex-col items-center mb-10">
      <h1 className="text-3xl mb-4">{title}</h1>
      <span className="block w-24 rounded-full h-1 bg-primary"></span>
    </div>
  );
};

export default SectionStarter;
