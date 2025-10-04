import React from 'react'
import './PackageSec.css'
import Pack1 from '../../Images/Package1.avif';
import Pack2 from '../../Images/Package2.avif';
import Pack3 from '../../Images/Package3.avif';

function PackageSec() {
    return (
        <>
        <h1 id="Packages" className="Packages-title">Our Packages</h1>
        <div className="Packages-Container">
            <div className="Package-Card">
                <div className="Package-Image-Box">
                    <img
                        src={Pack1}
                        alt="Scenic view representing the package"
                        className="Package-Image"
                    />
                </div>
                <div className="Package-Content-Box">
                    <h3>$25 1 DAY PACKAGE</h3>
                    <p>WhatsApp live location monitoring. Send up to two 8 hour shares to ensure someone knows where you are.</p>
                    <p>Share driver & vehicle details</p>
                </div>
            </div>

            {/* Package Two */}
            <div className="Package-Card">
                <div className="Package-Image-Box">
                    <img
                        src={Pack2}
                        alt="Scenic view representing the package"
                        className="Package-Image"
                    />
                </div>
                <div className="Package-Content-Box">
                    <h3>$75 1 WEEK PACKAGE</h3>
                    <p>7 Days in a private Life360 circle to allow live tracking, location history and crash detection.
                        Two WhatsApp wellness check in’s.</p>
                    <p> Share driver & vehicle details</p>
                </div>
            </div>

            {/* Package Three */}
            <div className="Package-Card">
                <div className="Package-Image-Box">
                    <img
                        src={Pack3}
                        alt="Scenic view representing the package"
                        className="Package-Image"
                    />
                </div>
                <div className="Package-Content-Box">
                    <h3>$150 1 MONTH PACKAGE</h3>
                    <p>
                        30 Days in a private Life360 circle with optional shared circles with fellow Tribe
                        members in your area - allowing live tracking, location history and crash detection.
                        2x weekly WhatsApp wellness check in’s.
                    </p>
                    <p> Share driver & vehicle details</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PackageSec
