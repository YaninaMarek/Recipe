import { useEffect,useState} from 'react';
import video from './video.mp4';
import Swal from 'sweetalert2';
import './App.css';
import MyComponent from './MyComponent';
import myLoaderPage from './myLoaderPage';


function App() {
  const MY_ID="18b7d80d";
  const MY_KEY="969587d6727e47357a413188a829b58c";
  const [mySearch,setMySearch] = useState("");
  const [myRecipe,setMyRecipe] = useState([]);
  const [wordSumbitted,setWordSumbitted] = useState('');
  const [stateLoader, setStateLoader] = useState(false);

  const fetchData = async (load) => {
    setStateLoader(true);
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSumbitted}&app_id=${MY_ID}&app_key=${MY_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ load: load })
    })

    if(response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyRecipe(data.hits);
    } else {
      setStateLoader(false);
      const handleAlert =()=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          footer: "Please enter the correct data!"
        });
      }
    }
  }
  const myRecipeSearch = (e) =>{
    setMySearch(e.target.value)
  }
  const finalSearch = (e) =>{
    e.preventDefault()
    setWordSumbitted(mySearch)
  }
  useEffect(() => {
    if (wordSubmitted !== '') {
      let load = wordSubmitted.split(/[,,;,\n,\r]/);
      fetchData(load);
    }
    getRecipe()
  }, [wordSubmitted])

  return (
    <div className='App'>
      {stateLoader && <myLoaderPage />}
      <div className='container'>
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Let's find the most suitable recipe</h1>
      </div>
      <div className='box'>
      <div className='container'>
        <form onSubmit={finalSearch,handleAlert}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>
     <div className='container'>
       <button onClick={finalSearch,handleAlert}>⬿ Find</button>
     </div>
     </div>
<div className='recipe'>
    {myRecipe.map((element,index)=>(
      <MyComponent key={index}
      label={element.recipe.label}
      image={element.recipe.image}
      calories={element.recipe.calories}
      ingredients={element.recipe.ingredientLines}/>
    ))}
    </div>
    </div>
  );
}

export default App;
