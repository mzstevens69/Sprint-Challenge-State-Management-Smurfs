import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions';
import { SmurfCard } from './SmurfCard';
import Loader from "react-loader-spinner";

const SmurfForm = props => {

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
                <h3>Name:</h3>
                <input
                    id='name'
                    type='text'
                    name='name'
                    value={smurf.name}
                    onChange={changeHandler}
                    placeholder='name'
                />
                <h3>Age:</h3>
                <input
                    id='age'
                    type='text'
                    name='age'
                    value={smurf.age}
                    onChange={changeHandler}
                    placeholder='age in years'
                />
                <h3>Height:</h3>
                <input
                    id='height'
                    type='text'
                    name='height'
                    value={smurf.height}
                    onChange={changeHandler}
                    placeholder='height in cm'
                />
                <br/>
                <button type='submit'onClick={(e) => submitHandler(e)}>Add Smurf</button>
                
            </form>
        </div>
            <button onClick={() => props.getSmurf()}>Get Smmmmuuurrrffffs</button>
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