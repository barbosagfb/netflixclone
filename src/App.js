import React,{ useEffect , useState } from 'react';
import Tmdb from './services/Tmdb';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import './App.css';
import Header from './components/Header/Header';
// import loadImg from './assets/loading.gif';
// import * as AiIcons from 'react-icons/ai';
import * as VscIcons from 'react-icons/vsc';

function App() {
  
const [movieList,setMovieList]= useState([]);
const [featuredData,setFeaturedData]=useState([]);
const [blackTop,SetBlackTop]= useState(false);
// const [loading, setLoading] = useState(false);

useEffect(()=>{
  const scrollListener= () =>{
    if(window.scrollY > 10){
      SetBlackTop(true);
    } else {
      SetBlackTop(false);
    }
  }
  window.addEventListener('scroll', scrollListener)
  return () =>{
    window.removeEventListener('scroll', scrollListener)
  }
},[])


useEffect(()=>{
  const loadAll = async () =>{
    // waiting total list
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    // waiting featured movie
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random ()* (originals[0].items.results.length -1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
    setFeaturedData(chosenInfo);
  }
  loadAll();
},[])
  return (
    <div className="page">
      <Header black={blackTop}/>
      {featuredData && 
      <FeaturedMovie item={featuredData}/>

      }

      <section className="lists">
        {movieList.map((item,key)=>(
          <MovieRow
          key={key}
          title={item.title}
          items={item.items}
          />
        ))}
      </section>

      <footer>
        <li>All image rights reserved to Netflix <span role="img" aria-label='heart'>™</span></li>
        <li>Data from Tmdb.org</li>
      </footer>
      {movieList.length <= 0 && 
      <div className="loading">
        {/* <a><AiIcons.AiOutlineLoading3Quarters/></a> */}
        <a><VscIcons.VscLoading/></a>
        {/* <img src={loadImg} alt="carregando"/> */}
      </div>
      }
    </div>
  );
}

export default App;
