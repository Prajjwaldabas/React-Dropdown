
import { useState } from 'react';
import './App.css';
import user from './assets/image/profile.jpg';



function App() {
  //using usestate to hide and show the dropdown 
  const [open,setopen]=useState(false);


// storing dropdown list items in an array
  const Menus= ["Profile","Your Apps","Settings", "Logout"]
  return (
    <div className="App">
      <div className='userImg'> 
       
      <img src={user} alt="user" onClick={()=>setopen(!open)} />

    {/* checking if the dropdown state is false or open and if open then showing the dropdown list items */}
     {
      open && 
      <div className='dropdown'>
      <ul>
        {
          // mapping on the menus array to show the list items 
          Menus.map((menu)=>(
<li key={menu} onClick={()=>setopen(!open)}  > {menu} </li>
          ))
        }
        
      </ul>
    </div>
    
     }
     </div>
     

  
    </div>
  );
}

export default App;
