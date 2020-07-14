import React from 'react';
import { Link } from "react-router-dom"

function PrivacyPolicy() {

    return (
        <div id="privacy-policy" className="page-height page-padding">
            <div className="page-title">Ultimate Penny Trader Privacy Policy</div>
            <div>
                <div id="privacy-subtitle" className="page-subtitle">
                    This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from ultimatepennytrader.com.
                </div>

                <div className="legal-title">WHAT PERSONAL INFORMATION WE COLLECT</div>

                <div className="legal-text">
                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.

                    Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically collected information as Device Information.

                    We collect Device Information using the following technologies:

                    Cookies are data files that are placed on your device or computer and often include an anonymous unique identifier.

                    Log files track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.

                    Also, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, city, state, postal code, email, and phone number.

                    By Personal Information in this Privacy Policy, we are talking both about Device Information and Order Information.
                </div>

                <div className="legal-title">HOW DO WE USE YOUR PERSONAL INFORMATION</div>

                <div className="legal-text">
                    We use the Order Information that we collect generally to fulfil any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).

                    Additionally, we use this Order Information to: 
                    <br/>- Communicate with you. 
                    <br/>- Screen our orders for potential risk or fraud. 
                    <br/>- When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.<br/>

                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site.
                </div>

                <div className="legal-title">SHARING YOUR PERSONAL INFORMATION</div>

                <div className="legal-text">
                    We share your Personal Information with third parties to help us use your Personal Information, as described above.

                    We also use Google Analytics to help us understand how our customers use Ultimate Penny Trader. <a href="https://policies.google.com/privacy">How Google uses your Personal Information.</a> <br></br>

                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful requests for information we receive, or to otherwise protect our rights.
                </div>

                <div className="legal-title">YOUR RIGHTS</div>

                <div className="legal-text">
                    If you are a European resident, you have the right to access the personal information we hold about you and to ask that your personal information is corrected, updated, or deleted. If you would like to exercise this right, please contact us.

                    Additionally, if you are a European resident we note that we are processing your information in order to fulfil contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.
                    Please note that your information will be transferred outside of Europe, including to Canada and the United States.
                </div>

                <div className="legal-title">DATA RETENTION</div>

                <div className="legal-text">
                    When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                </div>

                <div className="legal-title">MINORS</div>

                <div className="legal-text">
                    The Site is not intended for individuals under the age of 18.
                </div>

                <div className="legal-title">CHANGES</div>

                <div className="legal-text">
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

                If you have questions and/or require more information, do not hesitate to <Link to="contact">contact us</Link>.
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;