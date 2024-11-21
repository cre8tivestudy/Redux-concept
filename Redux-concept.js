/** Redux::::
 * React Native:
 *  npm install redux
 *  npm install react-redux
 * in case error:
 *  npm install
 ***********
 *
 * 1. STORE:-       holds our state - "There are only one store"
 *
 * 2. ACTION (TYPE OF ACTION):-  State can be mobified using action - SIMPLE OBJECTS
 *      -Dispatcher:-    Action needs to be sent by someone - known as dispatching an action
 *
 * 3. REDUCER:-      receives the ACTION and modifies the STATE to give us a new state
 *                  - only mandatory argument is the action type
 *      -Subscriber:- listens for state change to update the ui (using CONNECT)
 */

// STEPS::
// Step 1. Create STORE: first import then -
const store = createStore(reducer);
//Step 2. Create REDUCER and Pass into the STORE, here -> store = createStore(reducer)
const reducer = (state = initialState /* second argument will be action */) => {
  return state;
};
//Now reducer needs "initialState" to modify with the help of "action"
//So Step3. is to create initialState and pass it to the reducer, here ->  reducer = (state=initialState)
const initialState = {
  //example:
  counter: 0,
};
// So now store is still not connected to our app component, for that-
//Step 4. we need PROVIDER to CONNECT our app with the store... so import it first and then-
//Wrap our componect with provider and pass the store, like this:
<Provider store={store}>
  <CounterApp /> {/* <- example app component */}
</Provider>;
//To connect store with app we need to first import "connect" to our app component and
// Step 5. is to create a mapStateToProps function
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}
//and pass the mapStateToProps and app componet into the connect fuction
//like this:
export default connect(mapStateToProps)(CounterApp);

//Step 6. Now we need to pass type of ACTIONS with the help of DESPATCHER
function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" }),
  };
}

//Now our actions are created and need to be pass as the second argument of reducer into the step-2
// Step 7. finaly pass the action argument into the reducer with the help of "swith and case" statement
//like this-
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { counter: state.counter + 1 };
    case "DECREASE_COUNTER":
      return { counter: state.counter - 1 };
  }
  return state;
};

/**
 * This exapmle is followed by the named "#1 WTF is Redux? | React Native App | Redux Tutorial" from youtube
 * url: https://www.youtube.com/watch?v=KcC8KZ_Ga2M
 */
