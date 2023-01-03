import {Link} from "react-router-dom";
import Button from "../buttons/Button";

const Card = props => {

    return (
            <div
                className="col-10 col-md-5 ms-auto me-auto card shadow bg-body rounded mb-5 mt-4 p-2"
                key={props.key}>
                <Link
                    to={props.linkTo}
                    state={props.state}
                >
                    <div className="pt-2 text-center">{props.name}</div>
                    <div>
                        <img className="detailsImg img-fluid" src={props.fileStackUrl} alt='image not available'/>
                    </div>
                </Link>
                <Button onClick={props.onClick} title={`EDIT ${props.componentType}`} />
            </div>
    )

}; // Card
export default Card;