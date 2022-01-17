//we are gonna take all the actions of our context api inside our actions
//we have actions here , we are gonna dispatch them and update our state and to do that we are use reducers
//An action, is an object that contains the payload of information.
//actions are the only things that trigger changes in a Redux application, they contain the payload for changes to an application
//Actions are JavaScript objects that tell Redux the type of action to be performed
//payload value contains what a user is sending and it will be used to update the state of the application. 
//the action object contains the type of action and a payload object that would be necessary for that particular action to be performed.
s
export const LoginStart = (userCredentials) => ({  //our first process and to start this i am gonna take userCredentials
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user, //to update this state i am gonna use payload:user
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});