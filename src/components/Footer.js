import React from 'react';
import protocallLogo from '../img/protocall-logo.png';

const Footer = ({ privacyPolicyData, termsOfUseData, returnPolicyData }) => {
    const openContentInNewTab = (contentData) => {
        const content = contentData.content;
        const newWindow = window.open();
        newWindow.document.write(`
        <html>
          <head>
            <title>${contentData.title}</title>
          </head>
          <body>
            <h1>${contentData.title}</h1>
            <p>${content}</p>
          </body>
        </html>
      `);
        newWindow.document.close();
    };

    return (

        <footer>
            <div>
                <div>
{/*                     <img src={protocallLogo} alt="Protocall Financial logo" />
 */}                </div>
                <div>
                    <a href="#" onClick={() => openContentInNewTab(privacyPolicyData)}>
                        View Privacy Policy
                    </a>
                    <a href="#" onClick={() => openContentInNewTab(termsOfUseData)}>
                        View Terms of Use
                    </a>
                    <a href="#" onClick={() => openContentInNewTab(returnPolicyData)}>
                        View Return Policy
                    </a>
                </div>
                <div>
                    <p>© 2020 All rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
