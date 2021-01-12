import React, { useState, useEffect } from "react";
import dummyData from "../../dummydata/DummyData";
import SkinCards from "../skincards/SkinCards";
import SkeletonCard from '../skeletoncard/SkeletonCard';

const FetchData = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setVideos(dummyData);
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    let loginButton = null;
    if (loading) {
        loginButton = <SkeletonCard></SkeletonCard>
    } else {
        loginButton = (<div>
            {
                videos.map((list, index) => {
                    return (


                        <section key={index}>
                            <h2 className="section-title">{list.section}</h2>
                            <SkinCards list={list} ></SkinCards>
                            <hr />
                        </section>

                    );
                })}
        </div>)
    }
    return (
        loginButton
    );
};
export default FetchData;