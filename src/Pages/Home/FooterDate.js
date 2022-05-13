import React from 'react';

const FooterDate = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    }
    return (
        <div>
            <p>Copyright © {getYear()} - All right reserved by Doctors Portal </p>
        </div>
    );
};

export default FooterDate;