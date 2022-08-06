import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Products from "./components/Products";
import ProductList from "./components/ProductList"
import FilterProducts from "./components/FilterProducts";
function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [productsList, setproductsList] = useState([]);
  const [filteredProducts, setFilteredProduct] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory,setSelectedCategory]= useState("")

  useEffect(() => {
    let result = productsList;
    result = filterSearchTitle(result);
    result= filterSelectedCategory(result)
    result = sortData(result);
  
    setFilteredProduct(result);
  }, [productsList, sort, searchValue , selectedCategory ]);

  const searchHandler = (e) =>
    setSearchValue(e.target.value.trim().toLowerCase());

  const filterSearchTitle = (array) => {
    return array.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const sortData = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earlieast") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };
  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setproductsList(savedProducts);
    setCategoryList(savedCategories);
  }, []);

  useEffect(() => {
    if(productsList.length){
      localStorage.setItem("products", JSON.stringify(productsList));
    }
    
  }, [productsList]);


  useEffect(() => {
    if(categoryList.length){
      localStorage.setItem("categories", JSON.stringify(categoryList));
    }
   
  }, [categoryList]);


  const SelectedCategoryHandler=(e)=>{
    setSelectedCategory(e.target.value)

  }
  const filterSelectedCategory=(array)=>{
  if(!selectedCategory) return  array
    return  array.filter((item)=> item.category == selectedCategory)

  }
 
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar />

        <div className="container max-w-screen-sm mx-auto p-4">
          <Categories setCategoryList={setCategoryList} />
          <Products
            categoryList={categoryList}
            setproductsList={setproductsList}
          />
          <FilterProducts
            onSort={sortHandler}
            onSearch={searchHandler}
            searchValue={searchValue}
            sort={sort}
            categoryList={categoryList}
            selectedCategory={selectedCategory}
            onSelectedCategory={SelectedCategoryHandler}
          />
          <ProductList
            products={filteredProducts}
            setproductsList={setproductsList}
            categories={categoryList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
