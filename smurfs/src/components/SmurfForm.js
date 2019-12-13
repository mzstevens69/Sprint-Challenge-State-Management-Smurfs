import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions';
import { SmurfCard } from './SmurfCard';
import Loader from "react-loader-spinner";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        margin: 20
    },
    title: {
        color: '#0d47a1'
    },
    input: {
        background: '#bbdefb',
        height: 25,
        fontSize: 25
    
    }
    
})

const SmurfForm = props => {

    const classes = useStyles();

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const changeHandler = event => {

        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value
        })
    }
    const submitHandler = event => {
        event.preventDefault();
        props.postSmurf(smurf);
       
    }
    return (
        <div className='card-wrapper'>
        <div className='input-card'>
            <form>
                <h3 className={classes.title} >Name:</h3>
                <input className={classes.input}
                    id='name'
                    type='text'
                    name='name'
                    value={smurf.name}
                    onChange={changeHandler}
                    placeholder='name'
                />
                <h3 className={classes.title} >Age:</h3>
                <input className={classes.input}
                    id='age'
                    type='text'
                    name='age'
                    value={smurf.age}
                    onChange={changeHandler}
                    placeholder='age in years'
                />
                <h3 className={classes.title} >Height:</h3>
                <input className={classes.input}
                    id='height'
                    type='text'
                    name='height'
                    value={smurf.height}
                    onChange={changeHandler}
                    placeholder='height in cm'
                />
                <br/>
                <Button className={classes.button} size='lg' variant='contained' color='primary' type='submit'onClick={(e) => submitHandler(e)}>Add Smurf</Button>
                
            </form>
        </div>
            <Button color='primary' size='lg' variant='contained' onClick={() => props.getSmurf()}>Get Smmmmuuurrrffffs</Button>
            {props.isFetching && (
                <Loader type="Puff" color="blue" height={80} width={80} />
            )}
            {props.error && <p>{props.error.message}</p>}
            <div>
                {props.smurf.map((smurf, id) => (
                <SmurfCard key={id} smurf={smurf} />
            ))}
            </div>
        </div>   
    );   
}
const mapDispatchToProps = {
    getSmurf,
    postSmurf
}

export default connect(state => state, mapDispatchToProps)(SmurfForm);