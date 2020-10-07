const initialState = {
  user: {},
  token: null,
  error: '',
  isLoading: false,
};

const authReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default authReducer;
