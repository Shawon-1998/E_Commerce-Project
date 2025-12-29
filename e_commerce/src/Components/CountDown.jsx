import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';
import Flex from './Flex';

const CountDown = () => {
  const conduct_date = '2025-12-31 00:00:00';
  const [time, setTime] = useState({})


  useEffect(() => {
    const interval = setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setTime(countDown)
    }, 1000)

  }, [])

  return (
    <>
      <Flex className='text-[32px] items-center font-bold gap-4'>
        <h2><p className='text-xs font-medium font-pop'>Days</p>0{time.days}:</h2>
        <h2><p className='text-xs'>Hours</p>0{time.hours}:</h2>
        <h2><p className='text-xs'>Minutes</p>{time.minutes}:</h2>
        <h2><p className='text-xs'>Seconds</p>{time.seconds}</h2>
      </Flex>

    </>
  )
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
