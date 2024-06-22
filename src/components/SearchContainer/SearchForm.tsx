import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import css from "./SearchForm.module.css";

const SearchForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const [, setQuery] = useSearchParams({query: '', page: '1'});
    const search: SubmitHandler<FieldValues> = (search) => {
        setQuery(prev => {
            prev.set('query', search.search.toString());
            prev.set('page', '1');
            return prev;
        });
        reset();
    }

    return (
        <form onSubmit={handleSubmit(search)}>
            <div className={css.SearchForm}>
                <input className={css.searchInput} type="text" placeholder="search..." {...register('search')}
                       required/>
                <button className={css.glowOnHover}>Search</button>
            </div>
        </form>
    );
};

export {SearchForm};

