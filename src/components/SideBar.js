import {Link} from 'react-router-dom';

function SideBar() {

    return (
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to={"/product"}>Get All product</Link>
                </li>

            </ul>
        </>
    );
}
export default SideBar;