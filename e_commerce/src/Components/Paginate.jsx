
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardSec from './CardSec';
import { useSelector } from 'react-redux'

const Paginate = ({ itemsPerPage,product }) => {
  const items = product;
   const allProducts = useSelector((state) => state.productItem)
   
   console.log(allProducts)

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item,idx) => (                                         
          <CardSec
              key={idx} 
              ImgSrc={item.thumbnail}
              productName={item.title}
              price={item.price}
              discountPrice={Math.round((item.price-(item.price*item.discountPercentage)/100))}
              digit={item.reviews.length}
              rating={item.rating}
              discount={item.discountPercentage}
              btn='Add to cart'
              
          />
                               
          ))}
      </>
    );
  
  }
  const [itemOffset, setItemOffset] = useState(0);
    
    // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  return (
     <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='absolute -bottom-20 left-0 flex flex-wrap gap-5'
        pageClassName='text-white px-6 bg-black cursor-pointer'
      />
    </>
  )
}

export default Paginate
