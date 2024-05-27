import "./Card.css"
import React from 'react'
import data from "./Api.json"

const Carda = ({ cardData }) => {
    const { backgroundImg, cardImg, description, subTitle, title, type } = cardData;

    return (

        <article className="realCard">
            <div className="boxUp">
                <img src={cardImg} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{subTitle}</p>
            <span style={{ color: type === "recommend" ? "blue" : type === "new" ? "orange" : type === "trending" ? "purple" : type === "original" ? "pink" : "" }}>{type}</span>
        </article>


    )
}

// const dataFilter = dataKeys.filter()



const Card = () => {
    const dataKeys = Object.keys(data)
    // // const Data = data

    return (
        <div className="CardPage">

            <section className="insideBox">     
                {dataKeys.map((key) => (
                    <Carda key={key} cardData={data[key]} />
                ))}
             </section>
        </div>
    )
}

export default Card