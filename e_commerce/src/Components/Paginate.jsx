
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardSec from './CardSec';
import { useSelector } from 'react-redux'

const Paginate = ({ itemsPerPage, product }) => {

  const allProducts = useSelector((state) => state.productItem.value)

  const items = allProducts;   //its for productPage 2 component

  // const items = product;         //its for productPage component

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, idx) => (
            <CardSec
              key={idx}
              ImgSrc={item.thumbnail}
              productName={item.title}
              price={item.price}
              discountPrice={Math.round((item.price - (item.price * item.discountPercentage) / 100))}
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
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
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
