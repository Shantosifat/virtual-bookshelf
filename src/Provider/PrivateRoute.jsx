import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user);

    if(loading){
    return <Loading></Loading>
  }
    // jdi user thake
    if (user && user?.email) {
    return children;
  }

    // jdi login na thake taile login page e navigate krte hbe
  return <Navigate state={location.pathname} to='/auth/signIn'></Navigate>

};

export default PrivateRoute;