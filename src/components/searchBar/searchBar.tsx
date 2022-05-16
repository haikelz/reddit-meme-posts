const SearchBar = ({ search, handleSearch, setSearch }: { search: any, handleSearch: any, setSearch: any }) => {
    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="search"
                    placeholder="Search Subreddit"
                    required
                    value={search}
                    className="rounded-full font-semibold bg-white px-3 py-1.5 focus:border-4 focus:border-blue-500 outline-none shadow-sm"
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
        </>
    )
}

export default SearchBar;