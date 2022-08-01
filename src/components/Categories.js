import { useState } from "react";

export default function Categories() {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const [categoryList,setCategoryList]=useState([])

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };
//   const addNewCategory = () => {
//     category.map((item) => {
//       item.id = 0;
//       item.title = categoryFormData.title;
//       item.description = categoryFormData.description;
//     });
//   };
const addNewCategory= (e)=>{
    e.preventDefault()
    const newCat={...categoryFormData, createdAt: new Date().toISOString()}
    // setCategoryList([...categoryList,newCat]) or
    setCategoryList((prevState) => [...prevState,newCat])
    console.log(categoryList);
}

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-Wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          {" "}
          ADD NEW CATEGORY
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              {" "}
              title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              className="bg-transparent rounded-xl
                    border border-slate-500 text-slate-400 w-full md:w-auto"
              value={categoryFormData.title}
              onChange={changeHandle}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              {" "}
              Description
            </label>
            <textarea
              className="bg-transparent rounded-xl  border border-slate-500 text-slate-400 w-full"
              type="text"
              name="description"
              id="category-description"
              value={categoryFormData.description}
              onChange={changeHandle}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl
                    py-2"
              id="cancle-add-category"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              cancle
            </button>
            <button
              className="flex-1 border border-slate-500 text-slate-400 rounded-xl
                    py-2"
              id="add-new-category"
              onClick={addNewCategory}
            >
              ADD CATEGORY
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={`text-slate-600 text-lg mb-4 font-meduim ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        ADD NEW CATEGORY?
      </button>
    </section>
  );
}
