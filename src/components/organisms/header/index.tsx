import React from "react";
import './styles.css'

function SampleHeader () {
    return (
        <div className="SampleHeader">
            <label className="Append">追加</label>
            <label className="OrderNumber">伝票番号</label>
            <input type="text" />
            <label className="ManageNumber">管理番号</label>
            <input type="text" />
            <label className="ManageString"></label>
            <label className="OrderDate">依頼日</label>
            <input type="text" />
            <label className="Order">依頼者</label>
            <input type="text" />
            <label className="OrderName"></label>
            <label className="Remake">伝票備考</label>
            <input type="text" />
        </div>
    )
}

export default SampleHeader