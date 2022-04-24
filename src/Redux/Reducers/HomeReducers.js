import { FETCH_DATA, GET_ID } from "../Action/types";

const initalState = {
  car_data: [],
  car_id: null,
};

const reducerHome = (state = initalState, action) => {
  console.log(action, ('ini adalah action'))
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        car_data: action.carData.data,
      };
      case GET_ID:
        return {
          ...state,
          car_id: action.carID,
        };

    default:
      return state;
  }
};

export default reducerHome;
