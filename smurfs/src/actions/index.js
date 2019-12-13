
import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

// call to server to get smurfs 

export const getSmurf = () => dispatch => {

    dispatch ({ type: FETCH_SMURF_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: err.res})
        });

}
export const postSmurf = smurf => dispatch => {
    dispatch({ type: FETCH_SMURF_START });

    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: err.res })
        })
}