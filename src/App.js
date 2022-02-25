import { Route, Switch} from "react-router";
import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import PostBody from "./PostBody";
import LoginHome from "./admin/LoginHome";
import Demo from './pages/demo'



function App() {




  return (
    <div className="App">





 <Switch>
       
      
 <Route exact path="/">
   
  <NavBar/>
  <br/>
  <br/>
  <br/>

  <Demo/>

  
      
           
        </Route>
       
    
  

        <Route path="/Event/:id">
          <PostBody />
        </Route>
        <LoginHome />

        </Switch>
        
    </div>
  );

}

export default App;


//        <Route path="/AddPost" component={AddPost} />
