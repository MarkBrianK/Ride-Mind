import React from "react"
import {NavLink} from "react-router-dom"

 function NavBar(){
    return (
      <div className="nav">
         <NavLink to= "/" style={{textDecoration : "none", color :"white", fontSize:25}}>Home</NavLink>
         <NavLink to="/about" style={{textDecoration : "none", color :"white", fontSize:25}}>About</NavLink>
         <NavLink to="/maintainance" style={{textDecoration : "none", color :"white", fontSize:25}}>Maintenance</NavLink>

      </div>

    )
 }
 export default NavBar