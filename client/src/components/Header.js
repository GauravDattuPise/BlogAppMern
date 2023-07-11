import React, { useState } from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    // global state
    const isLogin = useSelector((state) => state.isLogin);
    console.log(isLogin);

    //state
    const [value, setValue] = useState(1);

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
                                <Button sx={{ margin: 1, color: "white" }}>logout</Button>
                            </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header