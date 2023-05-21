import React from 'react';
import protocallLogo from '../img/protocall-logo.png';
import "../App.css"


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
      <div className="footer-container">
        <div className="logo-container">
          <img src={protocallLogo} alt="Protocall Financial logo" />
        </div>
        <div className="links-container">
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
      </div>
      <div className="copy-container">
        <p>© 2020 All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
