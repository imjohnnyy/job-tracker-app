const initialState = {
    applications: [],
}

export const ActionTypes = {
    SET_APPLICATIONS: "SET_APPLICATIONS",
}

export const ActionCreators = {
    setApplications: payload => ({type: ActionTypes.SET_APPLICATIONS, payload}),
}

// Reducer
export default function ApplicationsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_APPLICATIONS:
              // return new state based the SET_APPLICATIONS action type
            return {...state, applications: action.payload}
        default:
            return state // return the current state if no action type matches
    } 
}