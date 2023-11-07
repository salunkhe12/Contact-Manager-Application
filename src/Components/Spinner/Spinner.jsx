import React from 'react'
import spinnerGif from '../../assets/img/spinnerGif.gif'
const Spinner = () => {
  return (
    <div>
      <React.Fragment>
        <img src={spinnerGif} alt="" style={{height : "200px", width: "200px"} } className = 'd-flex m-auto'/>
        {/* <img src='{spinnerGif}' className='d-flex m-auto'  alt='' style={{height:"200px", width:"200px"}}/> */}
      </React.Fragment>
    </div>
  )
}

export default Spinner
