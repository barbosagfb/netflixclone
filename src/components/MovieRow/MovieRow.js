import React,{useState} from 'react';
import './MovieRow.css';
import * as MdIcons from 'react-icons/md';

function MovieRow({title,items}){
  const [scrollX,setScrollX] = useState(-600);

  const handleLeftArrow=()=>{
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x=0;
    }
    setScrollX(0)
  }
  const handleRightArrow=()=>{
    let x = scrollX - Math.round(window.innerWidth / 2);

    setScrollX(0)
  }
  return(
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
      <MdIcons.MdOutlineNavigateBefore style={{fontSize:50}}/>
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
      <MdIcons.MdOutlineNavigateNext style={{fontSize:50}}/>
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft:scrollX,
          width: items.results.length * 150
        }}>
        {items.results.length > 0 && items.results.map((item,key)=>(
          <div key={key} className="movieRow--item">
          <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
          </div>
          ))}
          </div>
      </div>
    </div>
  );
}


export default MovieRow;

