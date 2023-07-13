import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const CreateBlogs = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title : "",
        image : "",
        description : ""
    });

    function handleInputChange(e){
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const blogData = {
                title : inputs.title,
                image : inputs.image,
                description : inputs.description,
                user : localStorage.getItem("userId")
            }

            const {data} = await axios.post("blogs/create-blogs", blogData);

            if(data.status){
                toast.success(data.message)

                setTimeout(()=>{
                    navigate("/my-blogs")
                },1500)
            }
        } catch (error) {
            toast.error("Error in creating blog")
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box width={"50%"} boxShadow={"10px 10px 20px #ccc"} padding={3} margin={"auto"} marginTop={5} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}  >
                    <Typography variant='h3' fontWeight={"bold"} color={"gray"} >Create a Post </Typography>

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

                    <Button variant='contained' type='submit' size='large' sx={{ mt: 3 }}>create</Button>
                </Box>
            </form>
        </div>
    )
}

export default CreateBlogs