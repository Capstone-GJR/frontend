import AllView from "../../AllView";


function AllSpaces() {
  return (
      <AllView
      componentType="space"
      axiosUrl="/space/all"
      imgLinkTo="/allTotesBySpace"
      />
  )
}
export default AllSpaces