import React from "react";

const Loader = ({ height }) => {
  return (
    <div className={`w-20 mx-auto ${height} flex justify-center items-center`}>
      <div className={`relative flex justify-center items-center `}>
        <span className="rounded-full w-12 h-12 animate-spin  block border-4 border-t-transparent border-primary relative  "></span>
      </div>
    </div>
  );
};

export default Loader;
