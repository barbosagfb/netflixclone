import React from 'react';
import './Header.css';

export function Header({black}){
  let mainlogo='https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg'
  let userlogo='https://occ-0-1302-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSA3rt14XWwAt3HPPkk612DbeTp3Papj-b5weBs_3icCohx1Di5Tp2LGFiOQ1lbMUZkn85L6n9eDki_3rtSbhhOy-fGgbgl7Mya9.png?r=b7b'
  return (
    <header className={black ? 'black-top': ''}>
      <div className="header--logo">
        <a href='/'>
          <img src={mainlogo} alt="netflix-logo"/>
        </a>
      </div>
      <div className="header--user">
        <a href='/'>
          <img src={userlogo} alt="user--logo"/>
        </a>
      </div>
    </header>
  );
}

export default Header;