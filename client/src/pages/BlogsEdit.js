import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material'
import { toast } from 'react-hot-toast';

const BlogsEdit = () => {

    // getting id from params
    const id = useParams().id;

    const navigate = useNavigate();

    // state for inputs
    const [inputs, setInputs] = useState({
        title: "",
        image: "",
        description: ""
    });

    // updating state
    function handleInputChange(e) {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // getting single blog & setting inputs
    async function getBlog() {
        try {
            const { data } = await axios.get(`/blogs/getSingleBlog/${id}`);

            if (data?.status === true) {
                setInputs({
                    title: data?.blog?.title,
                    image: data?.blog?.image,
                    description: data?.blog?.description
                });
            }

        } catch (error) {
            console.log("error in get single blog", error);
        }
    }

    useEffect(() => {
        getBlog();
    }, []);


    // updating blog
    async function handleEditBlog(e) {
        e.preventDefault();

        try {
            const { data } = await axios.put(`/blogs/update-blog/${id}`, inputs);

            if (data?.status) {
                toast.success(data?.message);
                navigate("/my-blogs");
            }

        } catch (error) {
            toast.error("Error in update blog");
            console.log("error in update blog", error);
        }
    }

    return (
        <>
            <form onSubmit={handleEditBlog}>
                <Box width={"50%"} boxShadow={"10px 10px 20px #ccc"} padding={3} margin={"auto"} marginTop={5} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}  >
                    <Typography variant='h4' fontWeight={"bold"} color={"gray"} >Update a Post </Typography>

                    {/* blog title  */}
                    <TextField
                        type='text'
                        margin='normal'
                        sx={{ width: "500px" }}
                        variant='outlined'
                        label="Blog Title"
                        name='title'
                        value={inputs.title}
                        onChange={handleInputChange}
                        required>
                    </TextField>

                    {/* blog image link */}
                    <TextField
                        type='text'
                        margin='normal'
                        sx={{ width: "500px" }}
                        variant='outlined'
                        label="Image URL"
                        name='image'
                        value={inputs.image}
                        onChange={handleInputChange}
                        required
                    />

                    {/* blog description */}
                    <TextField
                        type='text'
                        margin='normal'
                        multiline
                        minRows={4}
                        sx={{ width: "500px" }}
                        variant='outlined'
                        label="Description"
                        name='description'
                        value={inputs.description}
                        onChange={handleInputChange}
                        required>
                    </TextField>

                    <Button variant='contained' type='submit' size='large' sx={{ mt: 3 }}>Update</Button>
                </Box>
            </form>
        </>
    )
}

export default BlogsEdit