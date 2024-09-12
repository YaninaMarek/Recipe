function MyComponent({label,image,calories,ingredients}){
    return(
        <div>
            <div className='container'>
                <h2>{label}</h2>
            </div>
            <div className='container'>
                <img src={image}alt='foto'/>
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