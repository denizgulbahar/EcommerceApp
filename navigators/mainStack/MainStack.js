import withUserState from './withUserState';

// Apply the HOC to conditionally render based on login state
const MainStack = withUserState();

export default MainStack;
