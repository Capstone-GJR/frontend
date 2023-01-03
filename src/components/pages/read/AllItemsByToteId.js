import {useLocation} from 'react-router-dom';
import AllView from "../../AllView";

function AllItemsByToteId() {

    const location = useLocation();

    return (
        <AllView
           componentType="space"
            axiosUrl={`item/all/tote/${location.state.tote.id}`}
            imgLinkTo="/allItemsByToteId"
        />
    )
}

export default AllItemsByToteId