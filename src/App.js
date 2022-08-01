import {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Categories from './components/Categories';
import Products from './components/Products';
function App() {

  const [categoryList,setCategoryList]=useState([]) 

  //  const category = [ 
  //   {
  //     id:"",
  //     description:"",
  //     title:"",

  //   },
  //  ]
  //  const product = [
  //   {
  //     category:category,
  //     quantity:"",
  //     title:"",

  //   },
  //  ]
  return (
    <div >
      <div className="bg-slate-800 min-h-screen">
      <Navbar/>

      <div className='container max-w-screen-sm mx-auto p-4'>
     <Categories setCategoryList={setCategoryList} />
     <Products categoryList={categoryList}/>



      </div>
    </div>
 

    </div>
  );
}

export default App;
