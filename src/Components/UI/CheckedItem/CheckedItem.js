import "./CheckedItem.css";

export default function CheckedItem({children, icon}) {
    return (
        <div className="checked-item" role="listitem">
            {
                icon ? 
                    <div className='checked-item-icon-container'>{icon}</div> :
                    <div className="checked-sign-container">
                        <img src="/check.svg" alt="" className="checked-item-icon" />
                    </div>
            }
            <div className="checked-item-text">{children}</div>
        </div>
    )
}
