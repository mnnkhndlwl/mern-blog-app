//A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state. 
//For example, an authentication reducer can take an initial state of an application in form of an empty object and an action 
//that tells it that a user has logged in and returned a new application state with a logged-in user.

const Reducer = (state, action) => {
    switch (action.type) {   // we are using here switch and 
      case "LOGIN_START":    //yaha hmari login process start hoti hai or ham abhi user ko fetch kar rhe hai
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":   //after login sucess it gonna return us a user to samajrhe ho payload ke pass hi hmara user hai
        return {
          user: action.payload,
          isFetching: false,    //stop fetching because we have finished our process here
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: true,
        };
        case "UPDATE_START":
          return {
            ...state,
            isFetching:true
          };
        case "UPDATE_SUCCESS":
          return {
            user: action.payload,
            isFetching: false,
            error: false,
          };
        case "UPDATE_FAILURE":
          return {
            user: state.user,
            isFetching: false,
            error: true,
          };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;