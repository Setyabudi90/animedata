export default function Pagination({ page, lastPage, setPage }) {
  const autoScroll = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((page) => page + 1);
    autoScroll();
  };
  const handlePrevPage = () => {
    setPage((page) => page - 1);
    autoScroll();
  };
  return (
    <>
      <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
        {page > 1 ? <button
            onClick={handlePrevPage}
            className="transition-all hover:text-indigo-500 outline-none"
          >
            Prev
          </button> : null
        }
        <p>
          {page} of {lastPage}
        </p>
        {page >= lastPage ? null : 
          <button
            onClick={handleNextPage}
            className="transition-all hover:text-indigo-500 outline-none"
          >
            Next
          </button>
        }
      </div>
    </>
  );
}
