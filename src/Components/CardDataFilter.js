import React from 'react'

function CardDataFilter (props){

  return(
    <div className="card-box">
      {/* {props.data.map(function(element){
      return <div key={element.id}>{element.city}</div> }).filter(function(element,index){
        return index === props.cardIndexNumber
      })} */}
      <div className="card">
      <div className="employee-name-box">

      <h1 className="employee-name">{props.data[props.cardIndexNumber].name.first} {props.data[props.cardIndexNumber].name.last}</h1> 
      <h1 className="card-number"> {props.cardIndexNumber + 1} / {props.data.length}</h1>
      </div>
      <div className="employee-box">
      <h3 className="employee-city">From: </h3> <span className="city-name">
        {props.data[props.cardIndexNumber].city}  </span>
      </div>
      <div className="job-title-box">
      <h3 className="employee-job-title">Job Title:</h3> <span>{props.data[props.cardIndexNumber].title}</span> 
      </div>
      <div className="employer-box">
      <h3 className="employee-employer">Employer:  </h3> <span>{props.data[props.cardIndexNumber].employer}</span>
      </div>
      <div className="movie-header"><span className="movie-section">Favorite Movies:</span>
      </div>
      <ol>
      <li>1. {props.data[props.cardIndexNumber].favoriteMovies[0]}</li> 
      <li>2. {props.data[props.cardIndexNumber].favoriteMovies[1]}</li> 
      <li>3. {props.data[props.cardIndexNumber].favoriteMovies[2]}</li> 
      </ol>
      </div>
     </div>
  )
}

export default CardDataFilter