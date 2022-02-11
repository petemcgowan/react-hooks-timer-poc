import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import TimePicker from "./TimePicker";
import TimerCountdown from "./TimerCountdown";
import PickerContextProvider from "../contexts/PickerContext";
// import { PickerContext } from "../contexts/PickerContext";

//hard coding "time specified" to 1 hr 10 minutes
// const specifiedHours = 1;
// const specifiedMinutes = 10;
// var minutesDiff = specifiedHours * 60 + specifiedMinutes;

// function addMinutes(date, minutes) {
//   return new Date(date.getTime() + minutes * 60000);
// }


function App() {

  // const { valueGroups, setValueGroups } = useContext(PickerContext);
  // var minutesDiff = valueGroups.hour * 60 + valueGroups.minute;
  // console.log("specified time in minutes:" + minutesDiff);
  // const dateInFuture = addMinutes(new Date(), minutesDiff);
  // console.log("dateInFuture:" + JSON.stringify(dateInFuture));


  // const calculateTimeLeft = () => {
  //   const difference = dateInFuture - new Date(); // new date is now

  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  // });

  const timerComponents = [];

  // Object.keys(timeLeft).forEach((interval) => {
  //   if (!timeLeft[interval]) {
  //     return;
  //   }

  //   timerComponents.push(
  //     <span>
  //       {timeLeft[interval]} {interval}{" "}
  //     </span>
  //   );
  // });

  return (
    <div>
      <PickerContextProvider>
        {/* <h2>Countdown time, minutes/seconds</h2> */}
        {/* <div>{valueGroups.hour}</div>
        <div>{valueGroups.minute}</div> */}
        {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
        <TimerCountdown/>
        <TimePicker/>
      </PickerContextProvider>
    </div>
  );
}

export default App;
