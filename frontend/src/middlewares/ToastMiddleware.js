import { newApplication, editApplication, deleteApplication } from "../redux/applicationsSlice";    
import { toast } from 'react-toastify';

const ToastMiddleware = () => next => action => {
    switch (action.type) {
        case newApplication.type:
            toast.success("New application added successfully");
            break;
        case editApplication.type: 
            toast.success("Application edited successfully");
            break;
        case deleteApplication.type:
            toast.success("Application deleted successfully");
            break;
        default:
            break;
    }
    return next(action);

}

export default ToastMiddleware;