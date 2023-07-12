import React, { useState } from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../redux/Store'
import { toast } from 'react-hot-toast'

const Header = () => {

    // global state
    const isLogin = useSelector((state) => state.isLogin);
    console.log(isLogin);

    //state
    const [value, setValue] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout(){
        try {
            dispatch(authActions.logout());
            toast.success("Logged out Successfully");

            setTimeout(()=>{
                navigate("/login");
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography variant='h5' >Mern Blog App</Typography>
                    {
                        isLogin && <>
                            <Box marginLeft="auto" marginRight="auto">
                                <Tabs
                                    textColor='inherit'
                                    value={value}
                                    onChange={(e, val) => setValue(val)}
                                >
                                    <Tab label="Blogs" LinkComponent={Link} to="/"></Tab>
                                    <Tab label="my-blogs" LinkComponent={Link} to="/my-blogs"></Tab>
                                </Tabs>
                            </Box>
                        </>
                    }
                    <Box marginLeft="auto">

                        {
                            !isLogin && <>
                                <Button sx={{ margin: 1, color: "white" }} LinkComponent={Link} to='/register'>Register</Button>
                                <Button sx={{ margin: 1, color: "white" }} LinkComponent={Link} to='/login'>Login</Button>

                            </>
                        }

                        {
                            isLogin && <>
                                <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>logout</Button>
                            </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header