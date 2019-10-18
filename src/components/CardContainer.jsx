import React, { Component } from 'react'
import CardComponent from "./CardComponent";

export default class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardData: []
    }
  }
  componentDidMount() {
    fetch(`http://api.myjson.com/bins/j1msy`).then((response) => {
      return response.json().then(cardData => {
        this.setState(() => ({
          cardData
        }))
      })
    })
  }
  
  render() {
    const { cardData } = this.state
    return (
      <div className="cardContainer">
        Debit Cards
        {cardData.map((card,i) => { return <CardComponent key={i} cardData={card} />})}
      </div>
    )
  }
}
