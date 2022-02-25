import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import { BiTime } from 'react-icons/bi';
import {BiMapPin} from 'react-icons/bi';










const PostComponent = ({ id, data }) => {

  return (

    <Link to={`/Event/${id}`} className="item">
      {data.image && (
      <img src={data.image} alt="title" />
    )}
      <div className="content">
          <h3>{data.title}</h3>
          <div className="date">
          <BiTime color="teal"/>
            <time>{
           data.startDate.toDate().toLocaleString('ar-EG', { weekday: 'long',  month: 'long', day: 'numeric' })}</time>
          </div>
          <div className="address">
          <BiMapPin color="teal"/>
            <address>{data.loc}</address>
        </div>

      </div>
    </Link>


  );
};

export default PostComponent;

