

function MyComponent({label,image,calories,ingredients}){
    return(
        <div>
            <div className='container label'>
                <h3>{label}</h3>
            </div>
            <div className='container'>
                <img src={image}alt='foto' width="300px" height="300px"/>
            </div>
            <ul className="container list">
                {ingredients.map((ingredients,index)=>(
                    <li key={index}>✔ {ingredients}</li>
                ))}
            </ul>
            <div className='container kcal'>
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}
export default MyComponent;