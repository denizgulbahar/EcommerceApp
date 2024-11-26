import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../../redux/store/slices/authSlice';

function useAuth() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const login = (userData) => {
    dispatch(signIn(userData));
  };

  const logout = () => {
    dispatch(signOut());
  };

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
};
export default useAuth;
