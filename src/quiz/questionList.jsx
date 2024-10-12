

function QuestionList({question,options,handleClick,currentAnswer}) {

    // console.log(question);
    // console.log(options);

    if(question === null) return;
    
  return (
    <>
        <h2>{question}</h2>

        <ul>
            {
                options && options.map((option,idx)=>{
                    return(
                        <li key={idx} onClick={(e)=>handleClick(option)} className={currentAnswer===option?"selected":""} >{idx+1}.{option}</li>
                    )
                })
            }
        </ul>

    </>
  )
}

export default QuestionList
