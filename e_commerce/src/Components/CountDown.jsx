import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';
import Flex from './Flex';

// const CountDown = ({className}) => {
//   const conduct_date = '2026-12-31 00:00:00';
//   const [time, setTime] = useState({})

//props passing  

const CountDown = ({ className, conductDate }) => {
  const conduct_date = conductDate;
  const [time, setTime] = useState({})


  useEffect(() => {
    const interval = setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setTime(countDown)
    }, 1000)

  }, [])

    return (
    <Flex
// use custom css in time class name 
  className={`lg:text-[32px] text-xl time items-center font-bold gap-2
   lg:gap-4 ${className}`}
>

  <h2 className="flex flex-col items-center">
    <span className="text-sm">Days</span>
    <span>{time.days}</span>
  </h2>

  <span className="lg:text-4xl text-2xl text-primary">:</span>

  <h2 className="flex flex-col items-center">
    <span className="text-sm">Hours</span>
    <span>{time.hours}</span>
  </h2>

  <span className="lg:text-4xl text-2xl text-primary">:</span>

  <h2 className="flex flex-col items-center">
    <span className="text-sm">Minutes</span>
    <span>{time.minutes}</span>
  </h2>

  <span className="lg:text-4xl text-2xl text-primary">:</span>

  <h2 className="flex flex-col items-center">
    <span className="text-sm">Seconds</span>
    <span>{time.seconds}</span>
  </h2>
</Flex>

    );
  }

// const CountDown = () => {
//     const conduct_date = '2026-01-01 00:00:00';
//     const [time,setTime] =useState({})


//    useEffect(()=>{
//      const interval=setInterval(()=>{
//         const countDown = countDownDateAndTime(conduct_date);
//        setTime(countDown)
//      },1000)


//    },[])

//   return (
//     <div>
//       <h2>{time.days}d {time.hours}h {time.minutes}m {time.seconds}s</h2>
//     </div>
//   )
// }

export default CountDown
