import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
  const[cid,setStudentId]= useState("");
const[cname,setStudentName]= useState("");
const[cdept,setStudentDept]= useState("");
const[ctech,setTechnology]= useState("");
const[csub,setStatus]= useState("");
const[cemail,setStudentEmail]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/controller',
{id:cid,
name:cname,
dept:cdept,
tech:ctech,
sub:csub,
email:cemail,}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>StudentId</b></label>
<input
type="text"
name="cid"
onChange={(e)=>{
  setStudentId(e.target.value);
}}
required/>
<label><b>StudentName</b></label>
<input
type="text"
name="cname"
onChange={(e)=>{
  setStudentName(e.target.value);
}}
required/>
<label><b>Department</b></label>
<input
type="text"
name="cdept"
onChange={(e)=>{
  setStudentDept(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="text"
name="ctech"
onChange={(e)=>{
  setTechnology(e.target.value);
}}
required/>
<label><b>Subscription</b></label>
<input
type="text"
name="csub"
onChange={(e)=>{
  setStatus(e.target.value);
}}
required/>
<label><b>StudentEmail</b></label>
<input
type="text"
name="cemail"
onChange={(e)=>{
  setStudentEmail(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;
