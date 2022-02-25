import { Button, Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import db from "../firebase";
import "../App.scss";
import PostComponent from "../components/PostComponent";


function  Games () {

  const [events, setEvents] = useState([]);
 useEffect(() => {
  const now = new Date();
  db.collection("events").where('cat','==', 'Games').orderBy('startDate').startAt(now).onSnapshot((snapshot) => {
      setEvents(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    
    });
  }, []);



  

return (
<div >

<Container >

  {events.map(({ id, data }) => (
    <PostComponent key={id} id={id} data={data} />
    
  ))}
</Container>

</div>

)
}



  

  export default Games;