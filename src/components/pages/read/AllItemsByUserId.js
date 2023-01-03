import AllView from "../../AllView";

function AllItemsByUserId() {

    return (
        <AllView
            componentType="item"
            axiosUrl="/item/all"
        />
    )
}
export default AllItemsByUserId