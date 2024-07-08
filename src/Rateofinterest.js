import React, { useEffect, useState, useCallback } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './rate.css';

const Rateofinterest = () => {

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <RangeSlider
            value={averagesalary}
            onChange={handleChange1}
            className="range-slider"
            min={15000}
            max={100000}
            step={1000}
            color='green'
          />
        </div>
        <div className="col-lg-4">
          <RangeSlider
            value={NoofEmployees}
            onChange={handleChange2}
            className="range-slider"
            min={10}
            max={500}
            step={5}
          />
        </div>
        <div className="col-lg-4">
          <RangeSlider
            value={TimeInvestedinTrackHR}
            onChange={handleChange3}
            className="range-slider val"
            min={5}
            max={60}
            step={1}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-2'>
          <p className="rate-display">Average Salary: {averagesalary}</p>
          <p className="rate-display">Hr Salaries : {Hrinvestment}</p>
          <p className="rate-display">HR Investment: {Hrinvestment}</p>
        </div>
        <div className='col-lg-1'>
          <p className="rate-display">No of Employees: {NoofEmployees}</p>
          <p>Track HR subscription cost: {subscriptioncost}</p>
          <div>TrackHR Investment (Direct+Indirect) Per Month: {Directpermonth}</div>
        </div>
        <div className='col-lg-2'>
          <p className="rate-display">Time Invested in TrackHR: {TimeInvestedinTrackHR}</p>
          <p className="rate-display">Time Cost TrackHR: {timeinwasted.toFixed(2)}</p>
        </div>
        <div className='col-lg-1'>
          <p>{Efficiencypercentage}%</p>
          <p className="rate-display">Efficiency Improvement: {Efficiencyimprovement.toFixed(2)}</p>
        </div>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='text-center'>Time wastage Saved</div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-lg-4'>
                  <h6>Type</h6>
                  <p>leaveabslatecalls</p>
                  <p>takechaseup</p>
                  <p>delayoverhead</p>
                  <p>repatative</p>
                  <p>meetingstartendcall</p>
                  <p>reportanalysis</p>
                  <p>total</p>
                </div>
                <div className='col-lg-4'>
                  <h6>Weightage</h6>
                  <p>fixed</p>
                  <p>30%</p>
                  <p>30%</p>
                  <p>10%</p>
                  <p>10%</p>
                  <p>20%</p>
                  <p>100%</p>
                </div>
                <div className='col-lg-4'>
                  <h6>Invested</h6>
                  <p>{leaveabslatecalls}</p>
                  <p>{takechaseup.toFixed(2)}</p>
                  <p>{delayoverhead.toFixed(2)}</p>
                  <p>{repatative.toFixed(2)}</p>
                  <p>{meetingstartendcall.toFixed(2)}</p>
                  <p>{reportanalysis.toFixed(2)}</p>
                  <p>{total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-lg-3'>
                  <h6>Action</h6>
                  <p>In-out</p>
                  <p>Act</p>
                  <p>Reminder</p>
                  <p>Daywork</p>
                  <p>Meetings</p>
                  <p>ReportsDownload</p>
                  <p>Total</p>
                </div>
                <div className='col-lg-3'>
                  <h6>Time</h6>
                  <p>30 sec</p>
                  <p>30 sec</p>
                  <p>10 sec</p>
                  <p>2 min</p>
                  <p>1 min</p>
                  <p>1 min</p>
                </div>
                <div className='col-lg-3'>
                  <h6>No. day</h6>
                  <p>{inoutleave}</p>
                  <p>{act.toFixed(2)}</p>
                  <p>{chat.toFixed(2)}</p>
                  <p>{daywork.toFixed(2)}</p>
                  <p>{meetingaction.toFixed(2)}</p>
                  <p>{reportdownload.toFixed(2)}</p>
                </div>
                <div className='col-lg-3'>
                  <h6>SaveMin</h6>
                  <p>{saveminl1}</p>
                  <p>{saveminl_2.toFixed(2)}</p>
                  <p>{saveminl_3.toFixed(2)}</p>
                  <p>{saveminl_4.toFixed(3)}</p>
                  <p>{saveminl_5.toFixed(2)}</p>
                  <p>{saveminl_6.toFixed(2)}</p>
                  <p>{totaldata.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div>Money saved: {moneysaved.toFixed(2)}</div>
          </div>
          <div>TrackHR Earning: {trackhrearnig}</div>
        </div>
      </div>
      <div className='row mt-4'>
 <div className='col-lg-6'>
 <div className='row'>


 <div className='d-flex'>
  <p>Direct ---------------</p>
  <br/>

<div>
<p>Inv.% to HR Salaries : {directinvestment} %</p>
<p>Savings to Investment (ROI) : {directinvestmentroi}%</p>
</div>
  </div>
 <div>

  <div className='d-flex'>
  <p>Direct + Indirect Investment</p>
  <br/>
<div>
<p>Inv.% to HR Salaries : {indirectinvestment} %</p>
<p>Savings to Investment (ROI) : {indirectinvestmentroi}%</p>
</div>
  </div>

  <div className='row'>
    <div className='col-lg-12'>
<div>Earnings with only Saved wastages</div>
<p>Net Earning : {netearning.toFixed(2)}</p>
<p>ROI  :  {roi}%</p>



    </div>
  </div>

 </div>
 </div>
 </div>
 <div className='col-lg-6'>
 <div className='row'>
 <h6>Net Saving on investment</h6>
 <div className='col-lg-3'>
<p>Per Month</p>
<p>{permonth.toFixed(2)}</p>
 </div>
 <div className='col-lg-3'>
 <p>Per Quarter</p>
 <p>{perquarter.toFixed(2)}</p>
 </div>
 <div className='col-lg-3'>
 <p>Per Half Year</p>
 <p>{perhalfyear.toFixed(2)}</p>
 </div>
 <div className='col-lg-3'>
 <p>Per Annum</p>
 <p>{perannum.toFixed(2)}</p>
 </div>
 <p> Hr salaries --------- {hrsalaries}%</p>

 <p>TrackHR Subscription/Total Saving ----------- {totalsaving}%</p>
 </div>
 </div>


      </div>



    </div>
  );
};

export default Rateofinterest;
