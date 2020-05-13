import * as env from '../env/Env';

const initialState = {
  showModal: false,
  message: '',
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case env.actionsTypes.openModal:
      return {
        ...state,
        showModal: true,
        message: action.message,
      };
    case env.actionsTypes.closeModal:
      return {
        ...state,
        showModal: false,
        message: '',
      };
    default:
      return {
        ...state,
      };
  }
};
export default modalReducer;
