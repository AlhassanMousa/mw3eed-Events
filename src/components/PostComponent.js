import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import './style.css'
import { BiTime } from 'react-icons/bi';
import {BiMapPin} from 'react-icons/bi';
import {BsFillPeopleFill} from 'react-icons/bs';
import { Box ,Image,Badge} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import { BiArrowFromRight } from "react-icons/bi";









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



/*


          <div className="MediumPosts_TimeStamps">
            <div className="MediumPosts_TimeStamp_Paragraph">
              <span>
                {moment(new Date(data?.timestamp?.toDate()), "YYYYMMDD").format(
                  "LL"
                )}
              </span>
              &nbsp;-&nbsp;
              <span style={{ display: "flex", alignItems: "center" }}>
                {moment(
                  new Date(data?.timestamp?.toDate()),
                  "YYYYMMDD"
                ).fromNow()}

                <StarIcon />
              </span>
            </div>
            <BookmarkBorderIcon className="MediumPosts_Bookmark" />
          </div>
      </>

*/








/*


<Link to={`/Event/${id}`} style={{ textDecoration: "none" }}>
<div className="MediumPosts">

  {data.image && (
      <div
        className="MediumPosts_image"
        style={{ backgroundImage: `url(${data.image})` }}
      />
    )}
    <div className="MediumPost_Text">  
 <h2>{data.title}</h2>

      <p>{<BiTime color="teal"/>}{" "}{
data.startDate.toDate().toLocaleString('ar-EG', { dateStyle: 'full', timeStyle: 'short' }
     )}</p>


     <p>{<BiMapPin color="teal"/>}{" "}{data.loc}</p>

     <p >{<BsFillPeopleFill color="teal"/>}{"  "}{data.attendance}{"  "}</p>
    </div>

    

</div>
</Link>
*/