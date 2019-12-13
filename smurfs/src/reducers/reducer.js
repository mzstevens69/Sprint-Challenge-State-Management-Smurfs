import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE
} from '../actions';

export const initialState = {
    smurf: [],
    isFetching: false,
    error: ''
}

export const addSmurf = smurfs => {
    return smurfs.map(props => ({
        id: props.id,
        name: props.name,
        height: props.height,
        age: props.age

    }))
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurf: addSmurf(action.payload),
                isFetching: false,
                error: ''
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                smurf: []
            }
        default:
            return state;
    }
}
