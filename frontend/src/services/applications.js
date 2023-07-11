import { ActionCreators } from "../redux/applicationsReducer";

// HTTP Requests and API calls e.g. GET, POST, PUT, DELETE job applications from WEB API

export const GetApplications = async (dispatch) => {
    try {
        // GET all job applications
        const applications = [
            {id: 1, company: "Google", position: "Software Engineer", date: "2022-10-03", type:"Full-Time", status: "Ongoing"},
            {id: 2, company: "Xero", position: "Data Analyst", date: "2022-11-15", type:"Full-Time", status: "Ongoing"},
            {id: 3, company: "M90", position: "IT Technician", date: "2021-04-23", type:"Part-Time", status: "Rejected"},
            {id: 4, company: "ASB", position: "Software Developer Intern", date: "2022-08-08", type:"Casual", status: "Declined"},
            {id: 5, company: "Meta", position: "Graduate Data Engineer", date: "2022-02-19", type:"Full-Time", status: "Accepted"},
        ];

        // Dispatches an action to set the applications in the Redux store
        dispatch(ActionCreators.setApplications(applications));

    } catch {
        console.log("Error");
    }
};


export const NewApplication = async (dispatch, application) => {
    try {
        // Dispatches an action to add a new application to the Redux store
        dispatch(ActionCreators.newApplication({id: 8, description: "New Application", amount: application.amount, date: application.date}));
    } catch {
        console.log("Error");
    }
}