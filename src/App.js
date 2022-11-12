import React from "react";
import  {Students} from "./data.js";
import "./App.css"

class Table extends React.Component{
constructor(props){
    super(props);
    this.state={
        data:Students,
        select:"name",}
}
render(){
    let onDelete=(id)=>{
     let res= this.state.data.filter((val) => val.id!==id);
     this.setState({data:res});
    }
    let onSearch=({target:{value}})=>{
    let res= Students.filter((vl)=>vl[this.state.select].toString().toLowerCase().includes(value.toLowerCase()));
    this.setState({data:res})
    }
    const onSelect=(e)=>{
     this.setState({select:e.target.value}) 
    }
return(
<div className="wrapper">
   <div className="onWrap">
     <input className="Searcher" placeholder="Serch..." onChange={onSearch}></input>
     <select onChange={onSelect}>
        <option value="name">Name</option>
        <option value="surname">Surname</option>
        <option value="id">ID</option>
        <option value="type">Kind</option>
      </select>
   </div>
 <table>
    <thead>
       <tr className="header">
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Kind</th>
          <th>Delete</th>
       </tr>
     </thead>
     <tbody>
         {this.state.data.map((value)=>{ return(
               <tr key={value.id}>
                 <td>{value.id}</td> 
                 <td>{value.name}</td>
                 <td>{value.surname}</td>
                 <td>{value.type}</td>
                <td><button onClick={()=>onDelete(value.id)} className="button">Delete</button></td>
             </tr>)})}
     </tbody>
  </table>
</div>
    )}}
export {Table}