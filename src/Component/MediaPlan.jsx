import React,{useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const MediaPlan = () => {
 const [state, setstate] = useState({});
 const [comp, setComp] = useState([]);


 const value =  localStorage.getItem("data")
  const  userData = JSON.parse(value)


 const getDATA = async () => {
  const { data } = await axios.post("http://localhost:8080/mediaplans/isBooked",{
    userid : userData.userid
  })
    setstate(data[0])
};
 const getComp = async () => {
  const { data } = await axios.post("http://localhost:8080/mediaplans/isCamp",{
    userid : userData.userid
  })
    setComp(data)
};

useEffect(() => {
  getDATA(); 
  getComp();
}, []);
  return (
    <div>
      <center>
      <h3>-----------------------------Booked Media List--------------------------------</h3>
      <div className='m-5 p-5'>
 <h1>Booked :  {state.booked.booked == 0 ?  "No Data" : state.booked.booked} </h1>
 <h1>Processing :  {state.precess.process == 0 ?  "No Data" : state.precess.process} </h1>
 </div>
    <h3>-----------------------------Booking cancellation list--------------------------------</h3>
    <h1>Cancel :  {state.cancel == 0 ?  "No Data" : state.cancel } </h1> 
    <h3>-----------------------------campaign  list--------------------------------</h3>
    <table>
      <thead>
        <tr>
          <th>S.no</th>
          <th>campaign_name</th>
          <th>start_date</th>
          <th>end_date</th>
        </tr>
      </thead>
      <tbody>
         {comp.map((element, i) => (
          <tr>
            <td>{i  +1}</td>
            <td>{element.campaign_name}</td>
             <td>{element.start_date}</td>
            <td>{element.end_date}</td> 
     
          </tr>
         ))}
      </tbody>
    </table>
    </center>
    </div>
  )
}

export default MediaPlan
