const initialState = {
    applications: [],
}

export const ActionTypes = {
    SET_APPLICATIONS: "SET_APPLICATIONS",
    NEW_APPLICATION: "NEW_APPLICATION",
    DELETE_APPLICATION: "DELETE_APPLICATION",
    EDIT_APPLICATION: "EDIT_APPLICATION",
}

export const ActionCreators = {
    setApplications: payload => ({type: ActionTypes.SET_APPLICATIONS, payload}),
    newApplication: payload => ({type: ActionTypes.NEW_APPLICATION, payload}),
    deleteApplication: payload => ({type: ActionTypes.DELETE_APPLICATION, payload}),
    editApplication: payload => ({type: ActionTypes.EDIT_APPLICATION, payload}),
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
        case ActionTypes.DELETE_APPLICATION:
            // Return new state based the DELETE_APPLICATION action type
            return {...state, applications: [...state.applications.filter(application => application.id !== action.payload)]}
        case ActionTypes.EDIT_APPLICATION:
            // Return new state based the EDIT_APPLICATION action type
            return {...state, applications: [...state.applications.map(application => application.id === action.payload.id ? action.payload : application)]}
        default:
            return state // Return the current state if no action type matches
    } 
}