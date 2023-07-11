const initialState = {
    applications: [],
}

export const ActionTypes = {
    SET_APPLICATIONS: "SET_APPLICATIONS",
    NEW_APPLICATION: "NEW_APPLICATION",
}

export const ActionCreators = {
    setApplications: payload => ({type: ActionTypes.SET_APPLICATIONS, payload}),
    newApplication: payload => ({type: ActionTypes.NEW_APPLICATION, payload}),
}

// Reducer
export default function ApplicationsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_APPLICATIONS:
            // Return new state based the SET_APPLICATIONS action type
            return {...state, applications: [...action.payload]}
        case ActionTypes.NEW_APPLICATION:
            // Return new state based the NEW_APPLICATION action type
            return {...state, applications: [...state.applications, action.payload]}
        default:
            return state // Return the current state if no action type matches
    } 
}