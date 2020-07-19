import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ChartsPage from '../components/chart';
import DonutChart from '../components/donutChart';
import DummyTable from '../components/table';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Divider from '@material-ui/core/Divider';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    formControl: {
        width: "100%"
    },
    basecolor: {
        color: "#CECFD0"
    },
    button: {
        backgroundColor: "#6763E3",
        '&:hover': {
            backgroundColor: '#6763E3',
          },  
    },
    buttonico: {
        color: "#302CB0"
    },
    title: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    maintitle: {
        marginTop: '20px',
    },
    card: {
        padding: '15px',
    },
    avatar: {
        width: '75px',
        height: '75px',
    },
    mainavatar: {
        width: '125px',
        height: '125px',
        margin: '0 auto'
    },
  });

export default function Dashboard() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (    
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
                Overview
            </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
            <Box  textAlign="right">
                <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                endIcon={<AddCircleRoundedIcon className={classes.buttonico} />}
                >
                Add Fund
                </Button>
            </Box>
        </Grid>
    </Grid>
        <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent  className={classes.cardcntnt}>
                         <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Statistics
                            </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <div>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Last 6 Months</InputLabel>
                                <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                label="Last 6 Months"
                                inputProps={{
                                    name: 'Last 6 Months',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                            </div>
                            </Grid>

                         </Grid>
                    </CardContent>      
                    <CardContent>
                         <ChartsPage />
                    </CardContent>      
                </Card>                    
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent  className={classes.cardcntnt}>
                         <Grid container spacing={4}>
                            <Grid item xs={12}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Sales Distribution
                            </Typography>
                            </Grid>                           

                         </Grid>
                    </CardContent>  
                    <CardContent>
                         <DonutChart />
                    </CardContent>      
                </Card>                    
                </Grid>
                <Grid item xs={12}>
                <Card className={classes.card}>
                <CardContent  className={classes.cardcntnt}>
                         <Grid container spacing={4}>
                            <Grid item xs={12}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Referrer
                            </Typography>
                            </Grid>                           

                         </Grid>
                    </CardContent>  
                    <CardContent>
                         <DummyTable />
                    </CardContent>      
                </Card>                    
                </Grid>
                 </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card className={classes.card}>
                   <CardContent>
                        <Box textAlign="center">
                                <Avatar aria-label="recipe" className={classes.mainavatar}>
                                    <img src="/images/Jana Navakova.jpg" alt="" width="125" />
                                </Avatar>
                                <Typography className={classes.maintitle} variant="h6" noWrap>
                                Jana Navakova
                                </Typography>
                                <Typography className={classes.basecolor} noWrap>
                                United States
                                </Typography>
                        </Box>                        
                   </CardContent>                     
                   <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Box textAlign="center">
                                    <InstagramIcon className={classes.basecolor} />
                                </Box>                            
                            </Grid>
                            <Grid item xs={3}>
                                <Box textAlign="center">
                                    <TwitterIcon className={classes.basecolor} />  
                                </Box>                                                        
                            </Grid>
                            <Grid item xs={3}>
                                <Box textAlign="center">
                                    <FacebookIcon className={classes.basecolor} />
                                </Box>                           
                            </Grid>
                            <Grid item xs={3}>
                                <Box textAlign="center">
                                    <MailOutlineIcon className={classes.basecolor} />
                                </Box>                              
                            </Grid>
                        </Grid>
                   </CardContent> 
                   <Divider />    
                   <CardContent>
                   <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Our Users
                            </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box textAlign="right">
                                <MoreHorizIcon className={classes.basecolor} />
                                </Box>
                            </Grid>
                         </Grid>
                   </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src="/images/Drew James.png" alt="" width="75" />
                        </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src="/images/Bavid kames.png" alt="" width="75" />
                        </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src="/images/Lavid Emes.png" alt="" width="75" />
                        </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />                          
                </Card>
        </Grid>
    </Grid>
  </div>
);
}
