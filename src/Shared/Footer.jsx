import React, { useContext } from "react";
import "./sharedStyle.css"
import { Link } from "react-router-dom";
import footer_logo from "../assets/logo.png";
import { Handler , Navigater} from "../App";


const Footer = () => {
    const handler = useContext(Handler)
    const [s1] = useContext(Navigater)
    return (
        <div className="footer-bg-clr" >
            <div className="footer-space">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <div className="footer-box1">
                            <img alt="" src={footer_logo}></img>
                            <div className="icon-box">
                                <Link className="fimg1"></Link>
                                <Link className="fimg2"></Link>
                                <Link className="fimg3"></Link>
                                <Link className="fimg4"></Link>
                                <Link className="fimg5"></Link>
                            </div>
                            <div className="footer-para-box">
                                <p>
                                    "MetaBlock " is an expansive gaming metaverse that seamlessly integrates augmented reality (AR), virtual reality
                                    (VR), and artificial intelligence (AI) to create a dynamic and interconnected gaming experience.
                                </p>
                            </div>
                            <div>
                                <Link className="msg">
                                    <i class="fa-regular fa-envelope"></i>support@MetaBlock.io
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="footer-box2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li>
                                    <Link>About</Link>
                                </li>
                                <li>
                                    <Link>Roadmap</Link>
                                </li>
                                <li>
                                    <Link>Tokenomics</Link>
                                </li>
                                <li>
                                    <Link>Whitepaper</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6">
                        <div className="footer-box2">
                            <h5>About</h5>
                            <ul>
                                <li>
                                    <Link>Tokens</Link>
                                </li>
                                <li>
                                    <Link>Blogs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer-box2">
                            <button class="buttonToGoTop" onClick={()=>handler(s1)}>
                                <svg class="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
