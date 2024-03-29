import React from "react";
import './FeaturedMovie.css';
import * as BsIcons from 'react-icons/bs';
import * as TiIcons from 'react-icons/ti';

function FeaturedMovie({item}){

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres){
    genres.push(item.genres[i].name);
  }

  // let description = item.overview;
  // if(item.overview.length > 200){
  //   description= description.substring(0,200)+'...';
  // }

return(
  <section className="featured"style={{
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
  }}>
    <div className="featured--vertical">
      <div className="featured--horizontal">
        <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{Math.round(item.vote_average * 10)}% relevante</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbtn"><BsIcons.BsPlayFill/>Assistir</a>
            <a href={`/list/add/${item.id}`} className="featured--listbtn"><TiIcons.TiPlus/>Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>
      </div>
  </section>
);
}


export default FeaturedMovie;