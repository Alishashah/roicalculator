import React, { useEffect, useState, useCallback } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './rate.css';
import PieChartExample from './PieChartExample';
import PieChart from './PieChart';
import Accordiandata from './Accordiandata';
import MainHead from './MainHead';
import Contentdata from './Contentdata';
import Customersuccess from './Customersuccess';
import DoughnutsChart from './DoughnutsChart';
import RangeSliders from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
// import Slider from 'react-rangeslider'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import imgbutton from './trackhrimg/trackhrimg/Get Breakdown.png'
import Formreact from './Formreact';


const Rate = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pricingData = [
    { min: 10, max: 20, pricePerUser: 180, newPricePerUser: 210 },
    { min: 21, max: 50, pricePerUser: 140, newPricePerUser: 160 },
    { min: 51, max: 100, pricePerUser: 110, newPricePerUser: 130 },
    { min: 101, max: 200, pricePerUser: 90, newPricePerUser: 110 },
    { min: 201, max: 300, pricePerUser: 85, newPricePerUser: 100 },
    { min: 301, max: 400, pricePerUser: 80, newPricePerUser: 95 },
    { min: 401, max: 500, pricePerUser: 75, newPricePerUser: 90 },
    { min: 501, max: 700, pricePerUser: 70, newPricePerUser: 85 }
  ];

  const subscriptiondata = (value) => {
    for (let i = 0; i < pricingData.length; i++) {
      const element = pricingData[i];
      if (value >= element.min && value <= element.max) {
        console.log(`For ${value} users, the new price per user is ${element.newPricePerUser}`);
        return element.newPricePerUser;
      }
    }
    console.log(`No price available for ${value} users.`);
    return null;
  }


  const [averagesalary, setAveragesalary] = useState(10000);
  const [NoofEmployees, setNoofEmployees] = useState(10);
  const [TimeInvestedinTrackHR, setTimeInvestedinTrackHR] = useState(5);
  const [Efficiencyimprovement, setEfficiencyimprovement] = useState(0);
  const [Hrinvestment, setHrinvestment] = useState(0);
  const leaveabslatecalls = 0.5;
  const [takechaseup, setTakechaseup] = useState(0);
  const [delayoverhead, setDelayoverhead] = useState(0);
  const [repatative, setRepatative] = useState(0);
  const [meetingstartendcall, setMeetingstartendcall] = useState(0);
  const [reportanalysis, setReportanalysis] = useState(0);
  const [total, setTotal] = useState(0);
  const [act, setAct] = useState(0);
  const [chat, setChat] = useState(0);
  const [daywork, setDaywork] = useState(0);
  const [meetingaction, setMeetingaction] = useState(0);
  const [reportdownload, setReportdownload] = useState(0);
  const [totaldata, setTotaldata] = useState(0);
  const inoutleave = 1;
  const saveminl1 = 4 * ((30 / 60) * 2);
  const [saveminl_2, setSavemin_2] = useState(0);
  const saveminl_3 = 1;
  const [saveminl_4, setSavemin_4] = useState(0);
  const [saveminl_5, setSavemin_5] = useState(0);
  const [saveminl_6, setSavemin_6] = useState(0);
  const [Efficiencypercentage, setEfficiencypercentage] = useState(0);
  const [moneysaved, setMoneysaved] = useState(0);
  const [timeinwasted, setTimeinvested] = useState(0);
  const [subscriptioncost, setSubscriptioncost] = useState(0);
  const [Directpermonth, setDirectpermonth] = useState(0);
  const [trackhrearnig, setTrackhrearning] = useState(0);
  const[permonth,setpermonth]=useState(0)
  const[perquarter,setperquarter]=useState(0)
  const[perhalfyear,sethalfyear]=useState(0)
  const[perannum,setperannum]=useState(0)
  const[netearning,setnetearning]=useState(0)
  const[roi,setroi]=useState(0)
  const[directinvestment,setdirectinvestment]=useState(0)
  const[directinvestmentroi,setdirectinvestmentroi]=useState(0)
  const[indirectinvestment,insetdirectinvestment]=useState(0)
  const[indirectinvestmentroi,insetdirectinvestmentroi]=useState(0)
  const[hrsalaries,sethrsalaries]=useState(0)
  const[totalsaving,settotalsaving]=useState(0)
  const[showmodal,setshowmodal]=useState(false)

  const onshowhandle=()=>{
    setshowmodal(true)
  }

  const formatIndianNumber = (number) => {
    return number.toLocaleString('en-IN');
  };
  const handleChange1 = (e) => {
    setAveragesalary(Number(e.target.value));
  };

  const handleChange2 = (e) => {
    setNoofEmployees(Number(e.target.value));
  };

  const handleChange3 = (e) => {
    setTimeInvestedinTrackHR(Number(e.target.value));
  };

  const calculateRateOfInterest = useCallback(() => {
    const investment = NoofEmployees * averagesalary;
    setHrinvestment(investment);

    // Take chase up
    const leave = parseFloat(30 * 1 / 100 * (TimeInvestedinTrackHR - leaveabslatecalls));
    setTakechaseup(leave);

    // Delay overhead
    const delay = 30 * 1 / 100 * (TimeInvestedinTrackHR - leaveabslatecalls);
    setDelayoverhead(delay);

    // Repatative KRA
    const repatativekra = 10 * 1 / 100 * (TimeInvestedinTrackHR - leaveabslatecalls);
    setRepatative(repatativekra);

    // Meeting
    const meeting = 10 * 1 / 100 * (TimeInvestedinTrackHR - leaveabslatecalls);
    setMeetingstartendcall(meeting);

    // Report analysis
    const report = 20 * 1 / 100 * (TimeInvestedinTrackHR - leaveabslatecalls);
    setReportanalysis(report);

    // Total
    const total = leaveabslatecalls + leave + delay + repatativekra + meeting + report;
    setTotal(total);

    // Time wastages saved
    const actdata = leave / (30 / 60);
    setAct(actdata);

    const chatdata = delay / (10 / 60);
    setChat(chatdata);

    const daydata = repatativekra / 2;
    setDaywork(daydata);

    const meetingdataset = meeting / 1;
    setMeetingaction(meetingdataset);

    const reportdown = report / 1;
    setReportdownload(reportdown);

    // Saved min calculation
    const savemin = actdata * ((30 / 60) * 2);
    setSavemin_2(savemin);

    const savel4 = daydata >= 1 ? actdata * ((5 * 1 / 100) * 15) : 0;
    setSavemin_4(savel4);

    const savel5 = meetingdataset * (3 * (20 / 60));
    setSavemin_5(savel5);

    const save6 = reportdown * 3;
    setSavemin_6(save6);

    const totaldataget = saveminl1 + savemin + saveminl_3 + savel4 + savel5 + save6;
    setTotaldata(totaldataget);

    const money = (totaldataget / 540) * averagesalary * NoofEmployees ;
    setMoneysaved(money);

    const timeinvest = (TimeInvestedinTrackHR / 540) * (averagesalary) * NoofEmployees;
    setTimeinvested(timeinvest);


    const subcripcost=subscriptiondata(NoofEmployees)*NoofEmployees
    console.log(subcripcost,"subscriptioncost")
    setSubscriptioncost(subcripcost)


    const directtotal = (subscriptioncost + timeinvest).toFixed(2);
    setDirectpermonth(directtotal);

    const percent = report >= 2 ? 4 * reportdown : 0
    console.log(percent,"peercent")
    setEfficiencypercentage(percent);

    const Efficiency = ((percent * 1 / 100) * NoofEmployees * averagesalary) / 2;
    setEfficiencyimprovement(Efficiency);

    const earning = (Efficiency + money).toFixed(2);
    setTrackhrearning(earning);


    const permon=earning-directtotal
    // console.log(permon)
    setpermonth(permon)

    const perquar=(earning-directtotal)*3
    // console.log(perquar)
    setperquarter(perquar)

    const perhalf=(earning-directtotal)*6
    // console.log(perhalf)
    sethalfyear(perhalf)


    const perannum=(earning-directtotal)*12
    // console.log(perannum)
    setperannum(perannum)

    const netearn=moneysaved-Directpermonth
    // console.log(netearn,"--------")
    setnetearning(netearn)


    const roidata=((money/Directpermonth)*100).toFixed(1)
    setroi(roidata)


    const directinvest=((subscriptioncost/Hrinvestment)*100).toFixed(2)
    console.log(directinvest,"direct")
    setdirectinvestment(directinvest)


    const directroi=((trackhrearnig/subscriptioncost)*100).toFixed(2)
    setdirectinvestmentroi(directroi)


    const indirect=((Directpermonth/Hrinvestment)*100).toFixed(2)
    insetdirectinvestment(indirect)


    const indirectroi=((trackhrearnig/Directpermonth)*100).toFixed(2)
    insetdirectinvestmentroi(indirectroi)

    const hr=(permonth*100/Hrinvestment).toFixed(1)
    sethrsalaries(hr)

    const totalsave=(subscriptioncost*100/trackhrearnig).toFixed(1)
    settotalsaving(totalsave)

  }, [averagesalary, NoofEmployees, TimeInvestedinTrackHR, subscriptioncost, leaveabslatecalls, saveminl1, saveminl_3,netearning,moneysaved,Directpermonth,Hrinvestment,subscriptioncost,trackhrearnig]);

  useEffect(() => {
    calculateRateOfInterest();
  }, [calculateRateOfInterest]);

  return (
   <div className='container margin-data mt-5'>

    <div className='row'>
      <div>
<MainHead/>
      </div>
    </div>
<div className='row newrate mar-row '>
    <div className='col-lg-5'>
      <div >
        <br/>
        <div className='text-shadow'>
        <p className='text-1'>No. Of Users   : {NoofEmployees}</p>
<Box sx={{ '& .MuiSlider-valueLabel': { fontSize: '14px', backgroundColor: '#1250ac' ,borderRadius:"30px"} }}>
      <Slider
        valueLabelDisplay="auto"
        value={NoofEmployees}
        onChange={handleChange2}
        min={10}
        max={500}
        step={5}


      />
      </Box>

      <div className='cost'>
        <p>TrackHr Subscription Cost = &#8377; {formatIndianNumber(subscriptioncost)}</p>
      </div>
          </div>
      </div>
      <div className='text-shadow'>
        <p className='text-1'>Avg. Salary  : &#8377; {formatIndianNumber(averagesalary)}</p>
          <Box  sx={{ '& .MuiSlider-valueLabel': { fontSize: '14px', backgroundColor: '#1250ac',borderRadius:"30px" } }}>
      <Slider
        step={1000}
        value={averagesalary}
        valueLabelDisplay="auto"
        min={10000}
        max={100000}
        onChange={handleChange1}

      />
      </Box>

      <div className='cost-1'>
        <p> Hr Salaries = &#8377; {formatIndianNumber(Hrinvestment)}</p>
      </div>
          </div>
          <div className='text-shadow'>
        <p className='text-1'>Time : {TimeInvestedinTrackHR} min</p>


<Box  sx={{ '& .MuiSlider-valueLabel': { fontSize: '14px', backgroundColor: '#1250ac' ,borderRadius:"30px"} }}>
      <Slider
        valueLabelDisplay="auto"
        value={TimeInvestedinTrackHR}
        onChange={handleChange3}
        min={5}
        max={60}
        step={1}

      />
      </Box>
      <div className='cost'>
        <p>Time Investment Cost = &#8377; {formatIndianNumber(timeinwasted.toFixed(1))}</p>
      </div>
       </div>
       <div>
        <h2 className='cost-3'> &#8377; {formatIndianNumber(trackhrearnig)}<br/>TrackHr Savings</h2>
       </div>
       <div>
       </div>
    </div>
    <div className='col-lg-7 col-md-12'>
       <div className='margin-new margin-new-1'>
       <PieChartExample direct={subscriptioncost} indirect={timeinwasted.toFixed(1)} moneysave={moneysaved.toFixed(1)} moneyrecovered={Efficiencyimprovement.toFixed(1)}/>
       </div>
    </div>
</div>


<div className='text-pos'>
<h1 className="para-8 mt-5">Want to Get a Breakdown Out of this calculation and achieve similar results ? </h1>
<img src={imgbutton} className=' img-fluid' style={{width:"250px" ,height:"250px"}} onClick={handleShow}/>


{ show && <Formreact show={show} handleClose={handleClose}/>}
  <div>
</div>
</div>
<div className='row '>
<div className='col-lg-12'>
<div className='para-2'>
<h2 className='back-new-2'>Get Started Today</h2>
<p className='text-new-2'>Experience the power of data-driven
   decision-making with our ROI calculator.
    Simply enter your business information
     and see how TrackHr can revolutionize
     your work management and performance tracking
     . Take the first step towards maximizing your
      business's potential and achieving higher returns
       on your investments.</p>
</div>
</div>
</div>
   </div>
  )
}

export default Rate



