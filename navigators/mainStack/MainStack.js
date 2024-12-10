import withUserState from "./withUserState";

// MainStack component (returns null for now)
function MainStack() {
  return null; 
}

// Wrapping MainStack with the HOC to add user state
export default withUserState(MainStack);  

