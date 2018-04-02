import React from 'react';

export default ({title, body, image}) => {
  return(
    <div className="
      shadow-md
      rounded
      overflow-hidden
      sm:flex
      max-w-md
      mb-3">
          <div style={{ backgroundImage: `url(${image})`}}
          className="bg-cover bg-center h-48 w-auto sm:h-auto sm:w-64"
          >
          </div>
          <div className="p-4">
            <h2 className="font-black mb-3 text-left"> {title} </h2>
            <p className="text-sm text-grey-dark mb-4 text-justify"> {body}
            </p>
          <button className="bg-purple hover:bg-purple-light text-white py-3 px-6 font-bold rounded-full mt-1 mb-2">Touch</button>
          </div>
        </div>
  )
}