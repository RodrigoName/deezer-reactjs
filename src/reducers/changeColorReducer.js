import { generateRGB } from '../actions';

const color = generateRGB();

const changeColorReducer = (state = color, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return action.payload;
    default:
      return state;
  }
};
export default changeColorReducer;
