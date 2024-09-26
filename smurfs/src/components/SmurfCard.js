import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
    
      minWidth: 275,
      maxWidth: 600,
      marginBottom: 12,
      marginTop: 25,
      marginLeft: 270,
      boxShadow: '2px 3px 12px rgba(0, 0, 0, 1)',
      background: 'skyblue',
      color: 'midnightBlue'
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });

export const SmurfCard = props => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color='Primary' gutterBottom>
                    <h1>{props.smurf.name} </h1>
                </Typography>
                <Typography variant="h5" component="h2">    
                    <span>Smmmmmmuuuuuuuurrrrrrrrrrrfffffffff</span>
                    <li>{props.smurf.age} years</li>
                     <li>{props.smurf.height}  </li>
                </Typography>
            </CardContent>
        </Card>
    )
}