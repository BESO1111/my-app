
import './App.css';
import React, { useRef,useEffect,useState } from 'react';


function App() {
let[name,setName]=useState("")
let[lname,setLname]=useState("")
let[email,setEmail]=useState("")
let[age,setAge]=useState("")
let[gender,setGender]=useState("")
let [password,setPaswword]=useState("")
let[confirmPasword,setComfirmPassword]=useState("")
let[chek,setchek]=useState("")


let [errors,setErrors]=useState(false)
function userName(e){
  setName(e.target.value)
}
function userLname(e){
setLname(e.target.value)
}
function userEmail(e){
setEmail(e.target.value)
}
function userAge(e){
setAge(e.target.value)
}
function userPassword(e){
setPaswword(e.target.value)
}
function userPasswordComfirm(e){
  setComfirmPassword(e.target.value)
}
function userGender(e){
setGender(e.target.value)
}

function userchek(e){
setchek(e.target.value)
}



function buton(e){
e.preventDefault()
if(name.length<8){
  setErrors(true)
}
if(lname===""||lname.length<8){
setErrors(true)

}

if(password!==confirmPasword){
setErrors(true)
}
if(email!==""){
setErrors(true)

}
 if(password.length<5){
setErrors(true)

}
 if(password===""){

  setErrors(true)
}

else{
  
setErrors(true)
}
}

  return (
    <div className="App">
      <form onSubmit={buton} className="form">
   <input type="text" value={name} placeholder='name'onChange={userName}/>
  {errors&&name.length<=8?<p>naklebia 8-ze</p>:""}
  {errors&&name.length>16?<p>metia-16-ze</p>:""}
   <input type="text" value={lname} placeholder='lname' onChange={userLname}/>
 {errors&&lname===""&&lname.length<8?<p>gtxovt chawerot tqveni gvari</p>:""}
   <input type="email" value={email} placeholder="email" onChange={userEmail}/>
   {errors&&email===""?<p>gtxovt sheavsot meilis veli</p>:""}
   <input type="number" value={age} placeholder="age" onChange={userAge}/>
   <input type="password" value={password} placeholder="password" onChange={userPassword}/>
   <input type="password" value={confirmPasword} placeholder="comfirmpassword" onChange={userPasswordComfirm}/>
   {errors&&password.length<5?<p>paroli naklebia 5-ze</p>:""}
   {errors&&password!==confirmPasword?<p>parolebi ar emtxveva</p>:""}
   {errors&&password===""?<p>gtxovt chawerot paroli</p>:""}
   <select onChange={userGender} defaultValue="men">
    <option value="men" > men</option>
    <option value="women"> women</option>
   </select>
   <input type="checkbox" value="vetanxmebi pirobebs" name="names" onChange={userchek} checked={chek==="vetanxmebi pirobebs"}/>
   <button disabled={!chek}>click me</button>

   </form>

    </div>
    
  );
}

export default App;
