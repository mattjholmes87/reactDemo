import { initialState } from "./initialState";
import { DECREMENT, INCREMENT, RESET } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: 0 };

    default:
      console.log("Either new store or you made an error!!!");
      return state; //mmust remember to return initial state when store comes alive
  }
}
