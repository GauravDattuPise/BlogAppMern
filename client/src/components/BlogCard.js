import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import moment from "moment"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard({ isUser, title, description, image, date, name, id }) {

  const navigate = useNavigate();

  console.log("user is", name);

  //  using moment lib , converting date format
  const formatedDate = moment(date).format("DD MMM YYYY");

  function handleEditBlog() {
    
    // sending blogId to blog edit page via params
    navigate(`/blogs-edit/${id}`);
  }

 async function handleDelete(){
      try {
        const {data} = await axios.delete(`/blogs/delete-blog/${id}`);
        if(data?.status){
          toast.success(data?.message);
          
          // forcefully refreshing tab to show for blog is deleted.
          window.location.reload();
        }
      } catch (error) {
        toast.error("Error in Delete");
        console.log("error in blog delete", error)
      }
  }


  return (
    <Card sx={{ width: "40%", margin: "auto", mt: 2, boxShadow: "5px 5px 10px #ccc" }}>

      {
        isUser && (
          <Box display={'flex'}>
            <IconButton sx={{ marginLeft: "auto" }} onClick={handleEditBlog}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )
      }
      {/* cardheader with titile and date */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }

        title={name}
        subheader={formatedDate}
      />
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="blog image"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Title : {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description : {description}
        </Typography>
      </CardContent>


    </Card>
  );
}
