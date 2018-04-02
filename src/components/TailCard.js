import React from 'react';

export default ({title, body, image}) => {
  return(
    <div className="
      card
      sm:flex
      ">
          <div style={{ backgroundImage: `url(${image})`}}
          className="card__image sm:h-auto sm:w-64"
          >
          </div>
          <div className="p-4">
            <h2 className="card__title"> {title} </h2>
            <p className="card__body"> {body}
            </p>
          <button className="card__button">Touch</button>
          </div>
        </div>
  )
}