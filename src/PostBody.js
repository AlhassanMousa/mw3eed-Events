
  
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "./firebase";
import { CircularProgress } from "@material-ui/core";
import NavBar from "./components/navbar/NavBar";
import { BiTime } from "react-icons/bi";
import {BiMapPin} from 'react-icons/bi';
import {BsFillPeopleFill} from 'react-icons/bs';
import './App.scss'
import { Button } from "@material-ui/core";
import { AiFillInfoCircle } from "react-icons/ai";

const PostBody = () => {
  const [dataPost, setDataPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    db.collection("events")
      .doc(id)
      .get()
      .then((doc) => {
        setDataPost(doc.data());
        setLoading(false);
      });
  }, [id]);

  return (

<>
<NavBar/>
    <div className="postBody">
    {loading ? (
      <CircularProgress
        style={{ margin: "100px 0", color: "#9AC4F8" }}
        size={100}
      />
    ) : (

      <div className="postContainer">
        <h1>{dataPost?.title}</h1>

        <div
          className="postBody_image"
          style={{ backgroundImage: `url(${dataPost?.image})` }}
        />


         <div >     


         <div>
            <h3 ><BiTime color="grey"/>{'التاريخ'}</h3>
            <p>{dataPost.startDate.toDate().toLocaleString('ar-EG', { dateStyle: 'full', timeStyle: 'short' })}</p>
          </div>


         <div>
        <h3 ><BsFillPeopleFill color="grey"/>{'مهتمين'}</h3>
        <p >{dataPost?.attendance}</p>
        </div>

     

          <div>
            <h3><AiFillInfoCircle color="grey"/>{'تفاصيل'}</h3>
            <p>{dataPost?.details}</p>
          </div>

</div>
          <Button target="_blank" variant="outlined" className="goButton" href={dataPost?.link}> <h4><BiMapPin color="grey"/>إكتشف</h4></Button>
       <br/>
       <br/>

        </div>

    )}
  </div>
  
  </>
  );
};


export default PostBody;



