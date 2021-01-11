import React from "react";
import Skeleton from "react-loading-skeleton";
const Card = () => {
    return (<div>
        <Skeleton height={180} width={`80%`} />
        <h4>
            <Skeleton circle={true} height={40} width={40} />
            <Skeleton height={40} width={5} style={{ marginRight: 5, marginLeft: 5 }} />
            <Skeleton height={40} width={`30%`} />
        </h4>
        <p >
            <Skeleton width={`60%`} />
        </p>
        <div >
            <Skeleton width={`90%`} />
        </div>
    </div>
    );
};


export default Card;