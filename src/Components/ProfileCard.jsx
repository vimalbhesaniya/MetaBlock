import React, { useState } from "react";
import profile_img1 from "../assets/img/profile1.webp";
import profile_img2 from "../assets/img/profile2.webp";
import profile_img3 from "../assets/img/profile3.webp";
import profile_img4 from "../assets/img/profile4.webp";
import profile_img5 from "../assets/img/profile5.webp";
import "../App.css";
const ProfileCard = () => {
    const [profileData, setprofileData] = useState([
        {
            img: profile_img1,
            title: "Rajat Katariya",
            category: "FOUNDER - CEO",
        },
        {
            img: profile_img2,
            title: "Deepak Choudhary",
            category: "CO-FOUNDER - CFO",
        },
        {
            img: profile_img3,
            title: "Akshay Goswami",
            category: "COO",
        },
        {
            img: profile_img4,
            title: "Martin Berggren",
            category: "CMO",
        },
        {
            img: profile_img5,
            title: "Savio Issac",
            category: "CTO",
        },
    ]);
    return (
        <>
            {profileData?.map((val, ind) => {
                return (
                    <div className="main-box" key={ind}>
                        <div className="profile-card">
                            <div className="img-box">
                                <img alt="" src={val.img}></img>
                            </div>
                            <div className="content">
                                <p>{val.title}</p>
                                <span>{val.category}</span>
                            </div>
                        </div>
                        <h3>{val.title}</h3>
                    </div>
                );
            })}
        </>
    );
};

export default ProfileCard;
