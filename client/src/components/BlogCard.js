import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from "moment"

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

export default function BlogCard({title, description, image, date, name}) {

  const [expanded, setExpanded] = React.useState(false);

  //  using moment lib , converting date format
  const newDate = moment(date).format("DD MMM YYYY");


  return (
    <Card sx={{ width: "40%", margin : "auto", mt : 2, boxShadow : "5px 5px 10px #ccc" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           g
          </Avatar>
        }
       
        title={name}
        subheader={newDate}
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
