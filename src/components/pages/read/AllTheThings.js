import AllView from "../../AllView";
import {useLocation} from "react-router-dom";

const AllTheThings = props => {
    const location = useLocation();

    const spaceLocationStateObj = {
        componentType: 'space',
        addUrl: `/space/add`
    }
    // const toteLocationStateObj = {
    //     componentType: 'tote',
    //     addUrl: `/tote/add/${location.state.space.id}`,
    //     space: location.state.space
    // }

    return (
        <>
            <AllView
                pageName="allSpaces"
                componentType='space'
                axiosUrl={`/space/all`}
                locationStateObj={spaceLocationStateObj}

            />
            {/*<AllView*/}
            {/*    pageName="allTotesBySpaceId"*/}
            {/*    componentType='tote'*/}
            {/*    axiosUrl={`/tote/all/${location.state.parent.id}`}*/}
            {/*    locationStateObj={{*/}
            {/*        componentType: 'tote',*/}
            {/*        addUrl: `/tote/add/${location.state.parent.id}`,*/}
            {/*        space: location.state.parent*/}
            {/*    }}*/}
            {/*    imgLinkTo='/allItemsByToteId'*/}
            {/*/>*/}
            {/*<AllView*/}
            {/*    pageName="allItemsByToteId"*/}
            {/*    componentType='item'*/}
            {/*    axiosUrl={`/item/all/tote/${location.state.tote.id}`}*/}
            {/*    locationStateObj={locationStateObj}*/}
            {/*/>*/}
        </>
    )

}; // AllTheThings
export default AllTheThings;