import {Pagination, Search, SearchForm} from "../components";

const SearchPage = () => {
    return (
        <div>
            <SearchForm/>
            <Search/>
            <Pagination/>
        </div>
    );
};

export {SearchPage};
