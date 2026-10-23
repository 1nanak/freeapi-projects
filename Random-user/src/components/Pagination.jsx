import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Pagination({ page, totalpage, onChange }) {
  const pageNumberButtons = Array.from(
    { length: totalpage },
    (_, index) => index + 1,
  );
  const maxButtons = 5;
  let startIndex = page - Math.floor(maxButtons / 2);
  let endIndex = page + Math.floor(maxButtons / 2);

  if (startIndex < 1) {
    startIndex = 1;
    endIndex = Math.min(totalpage, maxButtons);
  }

  if (endIndex > totalpage) {
    startIndex = Math.max(1, totalpage - maxButtons + 1);
    endIndex = totalpage;
  }

  const DisplayButton = pageNumberButtons.slice(startIndex - 1, endIndex);
  return (
    <div>
      <div className="flex gap-1">
        <button
          disabled={page === 1}
          onClick={() => onChange(1)}
          className=" bg-white  px-1.5 rounded-l-md flex justify-center items-center hover:cursor-pointer hover:bg-gray-400"
        >
          Start
        </button>
        {/* //////////////////Previous button/////////// */}

        <button
          disabled={page === 1}
          onClick={() => onChange(page - 1)}
          className=" bg-white  px-1.5 rounded-l-md flex justify-center items-center hover:cursor-pointer hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>

        {/* ////////////Pages button/////////// */}
        {DisplayButton.map((d, index) => {
          return (
            <button
              key={index}
              className="bg-white px-2 rounded-md hover:cursor-pointer hover:bg-gray-800 "
              onClick={() => onChange(d)}
              style={{ backgroundColor: page === d ? "blue" : "white" }}
            >
              {d}
            </button>
          );
        })}

        {/* ////////Next button/////////// */}
        <button
          disabled={page === totalpage}
          onClick={() => onChange(page + 1)}
          className="bg-white  px-1.5 rounded-r-md flex justify-center items-center hover:cursor-pointer hover:bg-gray-300"
        >
          <FaChevronRight />
        </button>

        <button
          disabled={page === totalpage}
          onClick={() => onChange(totalpage)}
          className=" bg-white  px-1.5 rounded-r-md flex justify-center items-center hover:cursor-pointer hover:bg-gray-400"
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Pagination;
