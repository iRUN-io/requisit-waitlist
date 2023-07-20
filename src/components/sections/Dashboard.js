/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from "../elements/Image";

const NewHero = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className=' container dashboard-section mx-auto dashboard-image'>

          <Image
            src={require("../../assets/images/home/dashboard.svg")}
            alt="Open"
            className="img-fluid"
          />

        </div>
      </div>

    </>
  )
}

export default NewHero