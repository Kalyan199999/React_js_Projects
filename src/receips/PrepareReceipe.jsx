import Loading from "./Loading"

function PrepareReceipe({receipe}) {
    // console.log(receipe);

  return (
    <>
      {
        !receipe ? <Loading />:
        <div className="receipe-parent">

            <div className="ingredients">
                <h2>Required Ingredients</h2>
                {
                    receipe.ingredients.map((item,idx)=>{
                        return <p key={idx}>{idx+1}.{item}</p>
                    })
                }
            </div>

            <div className="receipe-image">
                <img src={receipe.image} alt={receipe.name} />
                <h2>{receipe.name}</h2>
            </div>

            <div className="instructions">
                <h2>Instructions</h2>
                {
                    receipe.instructions.map((item,idx)=>{
                        return(
                            <p key={idx}>{idx+1}.{item}</p>
                            
                        )
                    })
                }

                <br />

                <p>Cook Time:{receipe.cookTimeMinutes}</p>
            </div>

            
        </div>
      }
    </>
  )
}

export default PrepareReceipe
