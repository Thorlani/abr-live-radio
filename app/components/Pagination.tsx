"use client";

import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: any;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const lastPage = totalPages % 15;

  return (
    <div className="flex items-center gap-2 justify-center my-5">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        // className="px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 disabled:opacity-50"
      >
        <RiArrowLeftSFill
          size={28}
          className="cursor-pointer hover:text-black text-gray-600"
        />
      </button>

      {Array.from({ length: totalPages % 15 }).map((_, index) => {
        const page = index + 1;
        const lastPage = totalPages % 15;

        return (
          <div key={index}>
            {index + 1 !== lastPage && (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 text-sm rounded ${
                  currentPage === page
                    ? "bg-gray-700  text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {page}
              </button>
            )}
          </div>
        );
      })}
      <p>...</p>
      <button
        // key={lastPage}
        onClick={() => onPageChange(lastPage)}
        className={`px-3 py-1 text-sm rounded ${
          currentPage === lastPage
            ? "bg-gray-700  text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {lastPage}
      </button>

      <button
        onClick={handleNext}
        disabled={currentPage === lastPage}
        // className="px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 disabled:opacity-50"
      >
        <RiArrowRightSFill
          size={28}
          className="cursor-pointer hover:text-black text-gray-600"
        />
      </button>
    </div>
  );
};

export default Pagination;
