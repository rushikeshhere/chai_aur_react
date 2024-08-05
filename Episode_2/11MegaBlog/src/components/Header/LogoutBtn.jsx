import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logOut } from '../../store/authSlice';


function LogoutBtn(props) {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logOut().then(() => { dispatch(logOut()) })
    }


    return (
        <>
            <button>logOut</button>
        </>
    )
}
export default LogoutBtn;
