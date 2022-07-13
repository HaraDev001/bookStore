import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <br />
      <h2 className="category-heading">{category}</h2>
      <button type="button" onClick={handleClick} className="statusbtn align">Check Status</button>
    </div>
  );
};

export default Category;
