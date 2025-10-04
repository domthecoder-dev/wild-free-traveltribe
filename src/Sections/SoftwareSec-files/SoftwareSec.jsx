import React from 'react'
import WhatsApp from '../../Images/1.svg';
import Life360 from '../../Images/2.svg';
import Mail from '../../Images/mail.svg';
import './SoftwareSec.css';

function SoftwareSec() {
    return (
        <div className="Software-Container">
            <h1>Required Apps:</h1>
            <p>These are the apps required to use our services.</p>
            <table>
                <tr>
                    <td><img
                        src={WhatsApp}
                        alt="WhatsApp Icon"
                        className="Feature-Icon"
                    /></td>
                    <td>
                        <h3>WhatsApp</h3>
                        <p>iOS Download:<br className="MobileBr"/> <a href="https://apps.apple.com/us/app/whatsapp-messenger/id310633997">WhatsApp Messenger (App Store)</a></p>
                        <p>PlayStore Download:<br className="MobileBr"/> <a href="https://play.google.com/store/apps/details?id=com.whatsapp&pcampaignid=web_share">WhatsApp Messenger</a></p>
                    </td>
                </tr>
                <tr>
                    <td><img
                        src={Life360}
                        alt="Life360 Icon"
                        className="Feature-Icon"
                    /></td>
                    <td>
                        <h3>Life360</h3>
                        <p>iOS Download:<br className="MobileBr"/> <a href="https://apps.apple.com/us/app/life360-stay-connected-safe/id384830320">Life360: Stay Connected & Sale</a></p>
                        <p>PlayStore Download:<br className="MobileBr"/> <a href="https://play.google.com/store/apps/details?id=com.life360.android.safetymapd&pcampaignid=web_share">Life360: Live Location Sharing</a></p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default SoftwareSec
