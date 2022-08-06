import { useState } from "react";

function FilterProducts(props) {
  const searchValue = props.searchValue;
  const sort = props.sort;
  const onSort = props.onSort;
  const onSearch = props.onSearch;
  const categoryList = props.categoryList;
  const onSelectedCategory=props.onSelectedCategory
  const selectedCategory=props.selectedCategory

  return (
    <div>
      <div className="flex  justify-between items-center mb-5">
        <label htmlFor="search-input" className="text-slate-500 text-lg ">
          Search
        </label>
        <input
          type="text"
          name={searchValue}
          id="search-input"
          className="text-slate-400
      border border-slate-500 bg-transparent rounded-xl"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="flex  justify-between items-center mb-6">
        <label htmlFor="sort-label" className="text-slate-500 text-lg">
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
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="sort-label2" className="text-slate-500 text-lg ">
          Category
        </label>
        <select
          name="{sortBycategory}"
          id="sort-categories"
          className="bg-transparent text-slate-400
       rounded-xl"
          value={selectedCategory}
          onChange={onSelectedCategory}
         
        >
          <option value="" className="bg-slate-500 text-slate-300">
            All
          </option>
          {categoryList.map((item) => {
           return  <option value={item.id} key={item.id} className="bg-slate-500 text-slate-300">
              {item.title}
            </option>
          })}       
        </select>
      </div>
    </div>
  );
}

export default FilterProducts;
