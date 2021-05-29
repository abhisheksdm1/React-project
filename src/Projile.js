import logo from './logo.svg';
import "./Projile.css"
import {Link} from "react-router-dom";
import SimpleMap from "./SimpleMap";
 
function Projile() {
  return (  

          <div>

          <div className="navbar">
          <div class="navbar_child">
          <div className="container_1">
          <p4><Link to="/">Profile</Link></p4>
          </div>
          <div className="container_2">
          <p4><Link to="/">Posts</Link></p4>
          </div>
          <div className="container_3">
          <p4><Link to="/">Gallery</Link></p4>
          </div>
          <div className="container_4">
          <p4><Link to="/">ToDo</Link></p4>
          </div>
          </div>
          </div>

          <div className="full_detail">

          <div className="one_header_parent">
          <div className="one_header_child">
          <h2>Profile</h2>
          </div>
          <div className="two_header_child">
          <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="face" width="40px" height="40px"/>    
          <h3><Link to="/">Leanne Graham</Link></h3>
          </div>

          </div>
          <hr/>

          <div>
          
          <div className="article_one">
          <div >
          <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"/>
          <h3>Leanne Graham</h3>
          <p><label>Username : </label>Bret</p>
          <p><label>email : </label>Sincere@april.biz</p>
          <p><label>Phone : </label>99999999</p>
          <p><label>website : </label>learnnegraham</p>
          <hr/>
          </div>
          

          <div>
          <h4>Company</h4>
          <p><label>Phone : </label>Romaguera-Crona</p>
          <p><label>catchphrase :</label>Multi-layered<br/>
                                         client-server</p> 
          <p><label>bs : </label>harness real-time<br/>
                                 e-markets</p>
          </div>
          </div>

            
          <h4 className="address">Address :</h4>
          <div className="article_two">
          <div>         
          <p><label>Street  :</label> Kulas Light</p>
          <p><label>Suite   :</label> Apt.556</p>
          <p><label>City    :</label> Gwenborough</p>
          <p><label>Zipcode :</label> 92998-3874</p>        
          </div>

          <div className="map"><SimpleMap /></div>
          </div>
          </div>
          
          </div>

          </div>
  );
}

export default Projile;
