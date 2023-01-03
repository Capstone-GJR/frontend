import AllView from "../../AllView";

const locationStateObj = {
    componentType: 'space',
    addUrl: `/space/add`
}

function AllSpaces() {
  return (
      <AllView
      componentType="space"
      axiosUrl="/space/all"
      imgLinkTo="/allTotesBySpace"
      locationsStateObj={{locationStateObj}}
      />
  )
}
export default AllSpaces