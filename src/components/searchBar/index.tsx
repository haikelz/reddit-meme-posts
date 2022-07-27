import { FormEvent } from "react";
import { Event, Search } from "src/interface";

const SearchBar = ({ setSearch, refetch }: Search) => {
  const handleSearch: (args: Event) => void = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit: (args: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    refetch();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="search"
        placeholder="Search Subreddit"
        required
        className="rounded-full font-semibold bg-white px-3 py-1.5 focus:border-4 focus:border-blue-500 outline-none shadow-sm"
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBar;
