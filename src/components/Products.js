import { useState } from "react";

export default function Products(props) {
  const categoryList = props.categoryList;
  const setproductsList=props.setproductsList
  const elementForm = ["title", "quantity"];
  const [products, setProducts] = useState({
    title: "",
    quantity: 0,
    category: "",
  });
  

  const changehandle = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setProducts({ ...products, [name]: value });
  };

  const addNewProducts = (e) => {
    e.preventDefault();
    const newProduct = {
      ...products,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setproductsList((prevState) => [...prevState, newProduct]);
    e.target.reset();
    setProducts({ title: "", quantity: 0, category: "" });
  };

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          ADD NEW PRODUCTS
        </h2>
        <form
          className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
          onSubmit={addNewProducts}
        >
          {elementForm.map((item) => {
            return (
              <div key={item}>
                <label htmlFor={item} className="block mb-1 text-slate-400">
                  {item}
                </label>
                <input
                  type="text"
                  name={item}
                  id={item}
                  className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
                  value={products.item}
                  onChange={changehandle}
                />
              </div>
            );
          })}
          <div>
            <label htmlFor="categry" className="block mb-1 text-slate-400">
              Category{" "}
            </label>
            <select
              name="category"
              id="category"
              className="bg-transparent text-slate-400 rounded-xl w-full"
              value={products.category}
              onChange={changehandle}
            >
              <option className="bg-slate-500 text-slate-300" value="">
                {" "}
                Select a category
              </option>
              {categoryList.map((category) => {
                return (
                  <option
                    className="bg-slate-500 text-slate-300"
                    key={category.id}
                    value={category.id}
                  >
                    {category.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex item-center justify-between gap-x-4">
            <button
              type="submit"
              id="add-new-product"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              add New Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
