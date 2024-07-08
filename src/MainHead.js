import React from 'react'
import  './rate.css'
import Myimg from './trackhrimg/trackhrimg/calculator .png'
import myimg from './trackhrimg/trackhrimg/pms icons .png'

const MainHead = () => {
  return (
   <div className='container'>
<div className='row'>
<div className='col-lg-6'>
<div className='para-1'>

<h2 className='back-new'>Return on Investment (ROI) Calculator</h2>

<p className='text-new'>Welcome to the TrackHr ROI Calculator page,
  where you can easily determine the return on
  investment your business can achieve by using
  our advanced work management and performance
   tracking app. Understanding the value that
   TrackHr brings to your organization is crucial
   in making informed decisions and optimizing your
    operations. Our ROI calculator is designed to
    provide you with clear, actionable insights into
    how our app can enhance your productivity, efficiency,
     and overall profitability.
</p>
<div className='para-2 mt-3'>
    <h2 className='back-new'>How It Works
    </h2>
    <p>Our ROI calculator is simple to use and provides quick, accurate results. Follow these steps:
    </p>

    {/* <ol type='1'>
        <li><b>Input Your Data: </b>Enter key information about your business, such as the number of employees, average hourly wage, current productivity levels, and other relevant metrics.</li>
<li><b>Adjust Parameters:</b> Fine-tune variables like anticipated productivity improvements, expected reduction in time spent on administrative tasks, and more.</li>
<li><b>Calculate ROI: </b>Click the "Calculate" button to instantly see your potential ROI. Our calculator will provide a detailed breakdown of the savings and benefits you can expect.
</li>
    </ol> */}
</div>

<div className='col-lg-6'>
<div>
  <img src={myimg} className='img-fluid'/>
</div>
</div>

</div>
</div>
<div className='col-lg-6'>
<div>
<img src={Myimg} className=' img-fluid'/>
</div>
</div>
</div>
   </div>
  )
}

export default MainHead