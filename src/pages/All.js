import { Button, Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import db from "../firebase";
import "../App.scss";
import PostComponent from "../components/PostComponent";
import '../index.css'


function All() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const now = new Date();
    db.collection("events").orderBy('startDate').startAt(now).onSnapshot((snapshot) => {
      setEvents(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));

    });
  }, []);

  return (
    <div>
      <Container >
        {events.map(({ id, data }) => (
          <PostComponent key={id} id={id} data={data} />
        ))}
      </Container>

    </div>
  )
}
export default All;


/*<a href="!#">Learn more.</a>
 
 
 
 
 
 
 
<div className="App_posts">

<Container >

{events.map(({ id, data }) => (
  <MediumPosts key={id} id={id} data={data} />
  
))}
</Container>

 
 
*/