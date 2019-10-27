import stream from '../axios/stream';
import history from '../history'

export const signIn = userId => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().GoogleAuth
    const response = await stream.post('/streams', {...formValues, userId})
    dispatch({type: 'CREATE_STREAM', payload: response.data})
    history.push('/')
}

export const editStream = (formValue, id) => async dispatch => {
    const response = await stream.patch(`/streams/${id}`, formValue)
    dispatch({type: 'EDIT_STREAM', payload: response.data})
    history.push('/')
}

export const updateStream = formValues => async dispatch => {
    const response = await stream.post('/streams', formValues)
    dispatch({type: 'UPDATE_STREAM', payload: response.data})
}

export const deleteStream = id => async dispatch => {
    await stream.delete(`/streams/${id}`)
    dispatch({type: 'DELETE_STREAM', payload: id})
    history.push('/')
}

export const getStream = id => async dispatch => {
    const response = await stream.get(`/streams/${id}`)
    dispatch({type: 'GET_STREAM', payload: response.data})
}

export const getStreams = () => async dispatch => {
    const response = await stream.get('/streams')
    dispatch({type: 'GET_STREAMS', payload: response.data})
}

