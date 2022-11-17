import React from "react"
import Header from "./components/header"
import Card from "./components/Card"


<<<<<<< HEAD:App.js
export default function App() {
    return (
        <div>
            <Header />

=======

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
>>>>>>> 1f0ab8a6921bc185e5569c546a6ae28e60e3a974:TravelApp/App.js
        </div>
    )
}