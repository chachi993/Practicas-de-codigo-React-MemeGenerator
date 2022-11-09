import React from "react"

export default function Card(props){
    return (
        <>
        <section className="div--container">
            <img src={props.imageUrl} className="img-responsive img"/>
            <div className="centrado">
                <div className="primer-linea">
                    <p className="location"><i className="fa-solid fa-location-dot"></i>{props.location}</p>
                    <p className="view" href="{props.googleMapsUrl}">View on Google Maps</p>
                </div>
                <div className="div--title">
                        <h1>{props.title}</h1>
                        <h4>{props.startDate}- {props.endDate}</h4>
                        <p>{props.description}</p>
                </div>
            </div>
        </section>
       </>
    )
}