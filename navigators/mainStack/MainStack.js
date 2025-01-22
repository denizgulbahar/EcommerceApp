import { useSelector } from 'react-redux';
import MainStackLoggedIn from './childs/MainStackLoggedIn';
import MainStackLoggedOut from './childs/MainStackLoggedOut';

const MainStack = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
    return isLoggedIn ? <MainStackLoggedIn /> : <MainStackLoggedOut />
  };
  
  export default MainStack;
