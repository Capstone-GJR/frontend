import {useLocation} from 'react-router-dom';
import AllView from "../../AllView";

function AllItemsByToteId() {

    const location = useLocation();

    const locationStateObj = {
        componentType: 'item',
        addUrl: `/item/add/${location.state.tote.id}`,
        tote: location.state.tote
    }

    return (
        <AllView
           componentType="space"
            axiosUrl={`item/all/tote/${location.state.tote.id}`}
            imgLinkTo="/allItemsByToteId"
           locationsStateObj={{locationStateObj}}
        />
    )
}

export default AllItemsByToteId