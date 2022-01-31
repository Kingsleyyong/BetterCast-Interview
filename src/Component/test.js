import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Test({ name, colour, url }) {
   return (
      <div>
         <div className="card">
            <div className="section">
               <img id="personalImg" src={`${url}`} alt="Cat Image" />
            </div>
            <div className="rightSection">
               <div>{name}</div>
               <div>
                  Hi! I{"'"}m {colour} cat
               </div>
               <div className="question">what do you want to tell me?</div>
               <input
                  className="input"
                  type="text"
                  placeholder="type message..."
               />
            </div>
         </div>
      </div>
   )
}

Test.propTypes = {
   name: PropTypes.string,
   colour: PropTypes.string,
   url: PropTypes.string,
}
