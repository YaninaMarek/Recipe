import { useEffect,useState} from 'react';
import video from './video.mp4'
import './App.css';
import MyComponent from './MyComponent';

function App() {
  const MY_ID="18b7d80d";
  const MY_KEY="969587d6727e47357a413188a829b58c";
  const [mySearch,setMySearch] = useState("");
  const [myRecipe,setMyRecipe] = useState([]);
  const [wordSumbitted,setWordSumbitted] = useState('steak');

  useEffect(()=>{
    const getRecipe=async ()=>{
      const response = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&q=steak&app_id=18b7d80d&app_key=969587d6727e47357a413188a829b58c');
      const data = await response.json();
      setMyRecipe(data.hits);
    }
    getRecipe()
  },[wordSumbitted])

  const myRecipeSearch = (e) =>{
    setMySearch(e.target.value);
  }
  const finalSearch = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Let's find the most suitable recipe</h1>
      </div>
      <div className='box'>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>
     <div className='container'>
       <button onClick={finalSearch}>⬿ Find</button>
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
