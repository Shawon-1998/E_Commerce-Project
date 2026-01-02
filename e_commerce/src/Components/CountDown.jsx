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
    <>
      <Flex className={`lg:text-[32px] text-xl time  items-center font-bold gap-4 ${className}`}>
        <h2><p>Days</p>{time.days}<h5 className='text-4xl text-primary
         inline'>:</h5></h2>
        <h2><p>Hours</p>{time.hours}<h5 className='text-4xl text-primary
         inline'>:</h5></h2>
        <h2><p >Minutes</p>{time.minutes}<h5 className='text-4xl text-primary inline'>:</h5></h2>
        <h2><p className=''>Seconds</p>{time.seconds}<h5 className='text-4xl text-black inline'></h5></h2>
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
