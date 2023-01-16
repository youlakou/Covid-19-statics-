import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export default function Covidv1(){
    
    const[data,setdata]  = useState([])
    useEffect(() => {
        axios.get("https://disease.sh/v3/covid-19/countries")
        .then(Response => setdata(Response.data))
    },[]);
    
    return (
        
        
        <div className="container" >
  
            <div className="row"> 
            <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Covid19</a>
  
  
</nav>
            <hr />
            
            </div>
            <div className="row">
           
                {
                    
                    data.map((obj)=>(
                       <CARD data={obj}/>

                    ))
                }

            </div>
         
        </div>
     

    
    )
 
    function CARD(props){
        return(
            <div className="card col-lg-3 col-md-6 col-xs-12 " >
        <img className="card-img-top"  src={props.data.countryInfo.flag} style={{height:'160px'}}  />
        <div className="card-body">
          <h5 className="card-title">{props.data.country}</h5>
          <p className="card-text">
            <table className="table table-sm table-bordered">
                <tr><th>Cases</th><td>{props.data.cases}</td></tr>
                <tr><th>Today Cases</th><td>{props.data.todayCases}</td></tr>
                <tr><th>Deaths</th><td>{props.data.deaths}</td></tr>
                <tr><th> today Deaths</th><td>{props.data.todayCases}</td></tr>
                <tr><th>Recovered</th><td>{props.data.recovered}</td></tr>


                </table>
          </p>
        </div>
      </div>
        
        )
    } 
}