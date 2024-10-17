import { useState } from 'react'
import './style.css'

function Grid() {
  
  let rows = 10,cols = 10;
  
    const [isMouseDown , setIsMouseDown] = useState(false);
    
    const [selectdBoxes , setSelectedBoxes] = useState([]);
    
    const handleMouseUp = (e)=>{
      setIsMouseDown(false)
    }
    
    const handleMouseEnter = (e,boxNumber)=>{

      if(isMouseDown){
        const startBox = selectdBoxes[0];
        const endBox = boxNumber;

        const startRow = Math.floor((startBox-1) / cols)
        const startCol = (startBox-1) % cols
        const endRow = Math.floor((endBox-1) / cols)
        const endCol = (endBox-1) % cols

        const minRow = Math.min(startRow,endRow);
        const maxRow = Math.max(startRow ,endRow)

        const minCol = Math.min(startCol,endCol);
        const maxCol = Math.max(startCol,endCol);

        const selected = [];

        for(let row = minRow;row<=maxRow;row++){
          for(let col=minCol;col<=maxCol;col++)
          {
            selected.push(row*cols+col+1)
          }
        }

        setSelectedBoxes(selected)
        
      }
      
    }
    
    const handleMouseDown = (e,boxNumber)=>{
      setIsMouseDown(true)
      setSelectedBoxes([boxNumber])
    }



  return (

    <>
    <h1>Selectd Grid</h1>
     <div className='parent' style={{"--rows":{rows} , "--cols":{cols}}}  onMouseUp={(e)=>{handleMouseUp(e)}}>
      
      {
        [...Array(rows*cols).keys()].map((_,id)=>{

            return <div className={`child ${selectdBoxes.includes(id+1)?"selected":""}`} key={id}   onMouseDown={(e)=>{handleMouseDown(e,id+1)}} onMouseEnter={(e)=>{handleMouseEnter(e,id+1)}}  >{id+1}</div>
        })
      }
    </div>
    </>

  )

}

export default Grid;