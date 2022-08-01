
import './App.css';
import Navbar from './components/Navbar'
import Categories from './components/Categories';
function App() {
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
     <Categories  />


      </div>
    </div>
 

    </div>
  );
}

export default App;
