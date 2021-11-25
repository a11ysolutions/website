import "./CheckedItem.css";
import { FaRegCheckCircle } from "react-icons/fa";

export default function CheckedItem({children, icon}) {
    return (
        <div className="checked-item">
            {icon ? 
                <div className='checked-item-icon-container'>{icon}</div> :
                <FaRegCheckCircle className="checked-item-icon" />}
            <div className="checked-item-text">{children}</div>
        </div>
    )
}
