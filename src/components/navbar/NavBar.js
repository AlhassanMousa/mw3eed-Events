import React, { useState } from "react";

import styles from "./NavBar.module.scss";
import ox from '../../images/mth.png';

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
     
                <div>
                <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <NavLink className={styles.nav__item} to="/">
                          مواعيد
                        </NavLink>
                        <NavLink className={styles.nav__item} to="/">
                          اعرف عنا
                        </NavLink>
                        <NavLink className={styles.nav__item} to="/">
                            تواصل معنا 
                        </NavLink>
                  
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                    </div>
              
                </div>
                <div >
                <NavLink to="/" > <span> <img style={{'width':'50px','cursor':'pointer'}} src={ox} alt="Mwa3eed"/></span></NavLink>    
                </div>
            </div>
        </div>
    );
};



export default NavBar;














/*

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <div className={`NavBar ${active && "active"}`}>
  
        <div className=" NavBar_Lists right">
            <ul>
          <li><NavLink  to="/Login"><BiUser/></NavLink></li>
            </ul>
          </div>
         <div className="NavBar_Container">

          


        <div className="NavBar_Lists">
   
 

          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
          <img src={ox}  alt=""
          />
      </Link>
        </div>

     



    </div>
  );

*/


/*     <li>Our Story</li>
              <li>Add Post</li>
              <li>Write</li>
              <li>Sign In</li>      */

/*
              <li><NavLink to="">Our Story</NavLink></li>
              <li><NavLink to=""> Add Post</NavLink></li>
              <li><NavLink to="">Write</NavLink></li>
              <li><NavLink to="">Sign In</NavLink></li>
  */

              /**
               * 
               * 
               *        <li>
                              <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>log</button>
              </li>
               */















/*
import { Button, Container } from "@material-ui/core";
import React, {useEffect, useState ,useRef} from "react";
import LoginHome from "../../admin/LoginHome"
 import { NavLink ,withRouter} from "react-router-dom";
 import { Link } from "react-router-dom";

import { signInWithGoogle } from '../../firebase';
import {BiUser} from 'react-icons/bi';
import ox from '../../images/mth.png';
import "../../App.scss";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data.js";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
  <nav>
    <div className="nav-center">
      <div className="nav-header">
          <img src={ox} className="logo-img"  alt=""/>
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((socialLinks) => {
          const { id, url, icon } = socialLinks;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  </nav>)

}


export default NavBar;















/*

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <div className={`NavBar ${active && "active"}`}>
  
        <div className=" NavBar_Lists right">
            <ul>
          <li><NavLink  to="/Login"><BiUser/></NavLink></li>
            </ul>
          </div>
         <div className="NavBar_Container">

          


        <div className="NavBar_Lists">
   
 

          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
          <img src={ox}  alt=""
          />
      </Link>
        </div>

     



    </div>
  );

*/


/*     <li>Our Story</li>
              <li>Add Post</li>
              <li>Write</li>
              <li>Sign In</li>      */

/*
              <li><NavLink to="">Our Story</NavLink></li>
              <li><NavLink to=""> Add Post</NavLink></li>
              <li><NavLink to="">Write</NavLink></li>
              <li><NavLink to="">Sign In</NavLink></li>
  */

              /**
               * 
               * 
               *        <li>
                              <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>log</button>
              </li>
               */