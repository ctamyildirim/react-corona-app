import React from "react";
import "./card.css"

const Card = ({country, totalcases, totalrecoveries, totaldeath}) =>{
    return(
        <>  
                <div className="card">
                <div className="card-image">
                    <img src="https://thumbs.dreamstime.com/b/corona-virus-logo-template-logotype-design-corona-virus-cover-minimalist-logo-template-logotype-design-178563597.jpg" alt=""></img>
                </div>
                <div className="card-content">
                    <p>County :{country}</p>
                    <p>Case :{totalcases}</p>
                    <p>Recoveries :{totalrecoveries}</p>
                    <p>Death :{totaldeath}</p>
                </div>
            </div>

       </>
    )
}
export default Card