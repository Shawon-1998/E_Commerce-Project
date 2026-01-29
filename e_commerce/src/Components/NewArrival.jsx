import React from 'react'
import SecHeading from './SecHeading'
import NewArrivalCard from './NewArrivalCard'
const NewArrival = () => {
  return (
    <>
      <div className="container ">
        <SecHeading
          title="Featured"
          heading='New Arrival'
          className=' text-center block mx-auto mb-5 lg:mb-15'
          className2='justify-center '
        />
        <div className='lg:gap-7.5 lg:flex gap-4 items-center text-white '>
          <div className='lg:w-[50%] w-full mb-5 lg:mb-0 bg-[url(assets/Frame1.png)] bg-no-repeat bg-center bg-cover rounded-sm'>
             <NewArrivalCard
                className='lg:pt-114.5 pt-40 ps-8 pb-9'
                className2='py-4 lg:w-60.5 text-sm font-pop leading-5.25 font-normal'
                productName='PlayStation 5'
                description='Black and White version of the PS5 coming out on sale.'
              />
          </div>
          <div className='lg:w-[50%] '>
            <div className=' bg-[url(assets/Frame2.png)] bg-no-repeat bg-center bg-cover w-full rounded-sm'>
              <NewArrivalCard
                className='lg:pt-34.5 pt-15 pb-6.5 ps-6 '
                className2='py-4 lg:w-60.5 text-sm font-pop leading-5.25 font-normal'
                productName='Women’s Collections'
                description='Featured woman collections that give you another vibe.'
              />
            </div>
            <div className='flex pt-4 lg:pt-8 lg:gap-7.5  w-full gap-4'>
              <div className='w-[50%]  bg-[url(assets/Frame3.png)] bg-no-repeat bg-center bg-cover rounded-sm'>
                <NewArrivalCard
                  className='lg:pt-43.75 pt-17 pb-6.5 ps-6 '
                  productName='Speakers'
                  className2='py-2 lg:w-60.5'
                  description='Amazon wireless speakers'
                />
              </div>
              <div className='w-[50%] rounded-sm bg-[url(assets/Frame4.png)] bg-no-repeat bg-center bg-cover '>
                <NewArrivalCard
                  className='lg:pt-43.75 pt-15 pb-6.5 ps-6 '
                  productName='Perfume'
                   className2='py-2 lg:w-60.5'
                  description='Gucci intense oud edp'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewArrival
