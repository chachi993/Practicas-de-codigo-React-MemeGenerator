import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"



export default function App () {
    const cards = data.map(card=>{
        return (
            <Card 
            key={card.id}
            {...card}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <div className="cards-div">
                {cards}
            </div>
        </div>
    )
}