import { Pagination } from "src/interface";

const Pagination = ({ postsPerPage, totalPosts, paginate }: Pagination) => {
  const pageNumbers = [];
  const handlePage = (event: number) => paginate(event);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-4">
      {pageNumbers.map((page) => (
        <p
          className="cursor-pointer px-3 py-2 hover:bg-blue-500 bg-slate-500 text-white font-bold rounded-md duration-200 transition-all mr-2"
          onClick={() => handlePage(page)}
          key={page}
        >
          {page}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
