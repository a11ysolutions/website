import "./CheckedItem.css";

export default function CheckedItem({children}) {
    return (
        <div className="checked-item">
            {/* !: Checked icon left */}
            <div className="checked-item-text">{children}</div>
        </div>
    )
}
