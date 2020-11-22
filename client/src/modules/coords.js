import {createAction, handleActions} from 'redux-actions';

const SAVE_COORDS = 'coords/SAVE_COORDS';

export const saveCoords = createAction(SAVE_COORDS, ({latitude, longitude}) => ({latitude, longitude}));

const initialState = {
    coordsInfo: {
        latitude: 37.58,
        longitude: 127
    },
};

const coords = handleActions({
    [SAVE_COORDS]: (state, action) => ({
        ...state,
        coordsInfo: action.payload
    })
}, initialState);

export default coords;
