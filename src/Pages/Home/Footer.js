import React from 'react';
import FooterDate from './FooterDate';

const Footer = () => {
    return (
        <footer className=" p-10 bg-footer-img bg-cover ">
            <div className='footer' >
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Flouride Treatement</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>

                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">Dhanmondi,1102,Dhaka</a>

                </div>
            </div>
            <footer className="mt-10 text-center bottom-0">
                <FooterDate></FooterDate>
            </footer>
        </footer>
    );
};

export default Footer;