import {Outlet} from "react-router-dom";
import NavbarLink from "./NavbarLink";

const Layout = props => {

    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <NavbarLink />
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );

}; // Layout
export default Layout;