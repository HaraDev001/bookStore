const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export { checkStatus };
export default statusReducer;
