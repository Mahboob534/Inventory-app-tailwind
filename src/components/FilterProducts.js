import { useState } from "react";
import { ReactReduxContext } from "react-redux";

function FilterProducts(props) {
  const searchValue=props.searchValue
  const sort=props.sort
  const onSort=props.onSort
  const onSearch=props.onSearch

  

 
  return (
    <div>
      <div className="flex  justify-center items-center mb-2">
        <label htmlFor="search-input" className="text-slate-500 text-lg mr-6">
          Search
        </label>
        <input
          type="text"
          name={ searchValue }
          id="search-input"
          className="text-slate-400
      border border-slate-500 bg-transparent rounded-xl"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="flex  justify-center items-center mb-2">
        <label htmlFor="sort-label" className="text-slate-500 text-lg mr-6">
          sort
        </label>
        <select
          name={sort}
          id="sort-products"
          className="bg-transparent text-slate-400
       rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option value="" className="bg-slate-500 text-slate-300">
            select a category
          </option>
          <option value="latest" className="bg-slate-500 text-slate-300">
            latest
          </option>
          <option value="earliest" className="bg-slate-500 text-slate-300">
            earliest
          </option>
        </select>
      </div>
    </div>
  );
}

export default FilterProducts;
