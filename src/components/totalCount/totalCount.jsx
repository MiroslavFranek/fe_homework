import React from "react";
import "./totalCount.css"

const TotalCount = (props) => {
    return (
        <div className="totalCountTile">
            <h4>Celkový počet nakupujících</h4>
            <h4>{props.total}</h4>
        </div>
    )
}
export default TotalCount;
