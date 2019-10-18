import React from 'react'

export default function CardComponent(props) {
  return (
    <div className="card">
      {props.cardData && (<div className="cardWrapper">
        <div className="logo"></div>
        <div className="productName">
          {props.cardData.ProductName}
        </div>
        {props.cardData.Accounts.map(account => {
          return (
          <React.Fragment>
            <div className="cardNumber">
              {`A/C ${account.Number}`}
            </div>
            <div className="balance">
                {account.Balance}
            </div>
          </React.Fragment>)
        })}
        <div className="virtualCard">
          {props.cardData.Virtual && `VIRTUAL`}
        </div>
        <div className="status">
          {props.cardData.Status === 'BLOCKED' && props.cardData.Status}
        </div>
      </div>)}
    </div>
  )
}
