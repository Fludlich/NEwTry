async function redistrationMailHandler(registrationInf, transporter) {
  const { email, name, verificationToken } = registrationInf;
  await transporter.sendMail({
    from: '"ContactsNodeJS" <yurik.vinar37@gmail.com>',
    to: `${email}, yurik.vinar37@gmail.com`,
    subject: "Email verification",
    text: "Hello world?",
    html: `<!DOCTYPE html>
    <html
      lang="en"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="x-apple-disable-message-reformatting" />
        <title>Confirmation Mail</title>
    
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i"
          rel="stylesheet"
        />
    
        <style>
          html,
          body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f1f1f1;
          }
    
          * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          div[style*="margin: 16px 0"] {
            margin: 0 !important;
          }
    
          table,
          /* td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          } */
    
          table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
          }
          a {
            text-decoration: none;
          }
    
          *[x-apple-data-detectors],
          .unstyle-auto-detected-links *,
          .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
          .a6S {
            display: none !important;
            opacity: 0.01 !important;
          }
          .im {
            color: inherit !important;
          }
    
          @media only screen and (min-device-width: 320px) and 
          (max-device-width: 374px) {
            u ~ div .email-container {
              min-width: 320px !important;
            }
          }
    
          @media only screen and (min-device-width: 375px) and 
          (max-device-width: 413px) {
            u ~ div .email-container {
              min-width: 375px !important;
            }
          }
    
          @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
              min-width: 414px !important;
            }
          }
        </style>
        <style>
          .primary {
            background: #f3a333;
          }
    
          .bg_white {
            background: #ffffff;
          }
          .bg_light {
            background: #fafafa;
          }
          .bg_black {
            background: #000000;
          }
          .bg_dark {
            background: rgba(0, 0, 0, 0.8);
          }
          .email-section {
            padding: 2.5em;
          }
    
          .btn {
            padding: 10px 15px;
          }
          .btn.btn-primary {
            border-radius: 30px;
            background: #f3a333;
            color: #ffffff;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Playfair Display", serif;
            color: #000000;
            margin-top: 0;
          }
          body {
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 1.8;
            color: rgba(0, 0, 0, 0.4);
          }
    
          a {
            color: #f3a333;
          }
    
          .logo h1 {
            margin: 0;
          }
          .logo h1 a {
            color: #000;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            font-family: "Montserrat", sans-serif;
          }
    
          .hero {
            position: relative;
          }
          .hero .text {
            color: rgba(255, 255, 255, 0.8);
          }
          .hero .text h2 {
            color: #ffffff;
            font-size: 30px;
            margin-bottom: 0;
          }
    
          .heading-section h2 {
            color: #000000;
            font-size: 28px;
            margin-top: 0;
            line-height: 1.4;
          }
          .heading-section .subheading {
            margin-bottom: 20px !important;
            display: inline-block;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(0, 0, 0, 0.4);
            position: relative;
          }
          .heading-section .subheading::after {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -10px;
            content: "";
            width: 100%;
            height: 2px;
            background: #f3a333;
            margin: 0 auto;
          }
    
          .heading-section-white {
            color: rgba(255, 255, 255, 0.8);
          }
          .heading-section-white h2 {
            font-size: 28px;
            line-height: 1;
            padding-bottom: 0;
          }
          .heading-section-white h2 {
            color: #ffffff;
          }
          .heading-section-white .subheading {
            margin-bottom: 0;
            display: inline-block;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(255, 255, 255, 0.4);
          }
          .footer {
            color: rgba(255, 255, 255, 0.5);
          }
          .footer .heading {
            color: #ffffff;
            font-size: 20px;
          }
          .footer ul {
            margin: 0;
            padding: 0;
          }
          .footer ul li {
            list-style: none;
            margin-bottom: 10px;
          }
          .footer ul li a {
            color: rgba(255, 255, 255, 1);
          }
    
          @media screen and (max-width: 500px) {
            .icon {
              text-align: left;
            }
    
            .text-services {
              padding-left: 0;
              padding-right: 20px;
              text-align: left;
            }
          }
        </style>
      </head>
    
      <body
        width="100%"
        style="margin: 0; padding: 0 !important; background-color: #222222"
      >
        <center style="width: 100%; background-color: #f1f1f1">
          <div
            style="
              display: none;
              font-size: 1px;
              max-height: 0px;
              max-width: 0px;
              opacity: 0;
              overflow: hidden;
              font-family: sans-serif;
            "
          >
          </div>
          <div style="max-width: 600px; margin: 0 auto" class="email-container">
            <table
              align="center"
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              width="100%"
              style="margin: auto"
            >
              <tr>
                <td
                  class="bg_white logo"
                  style="padding: 1em 2.5em; text-align: center"
                >
                  <h1><a href="#">Contacts Node JS</a></h1>
                </td>
              </tr>
              <tr>
                <td
                  valign="middle"
                  class="hero"
                  style="
                    background-image: url(images/bg_1.jpg);
                    background-size: cover;
                    height: 400px;
                  "
                >
                  <table>
                    <tr>
                      <td>
                        <div
                          class="text"
                          style="
                            padding: 0 3em;
                            text-align: center;
                            background-color: rgb(141, 141, 149);
                          "
                        >
                          <h2>
                            Confirm your email address to get started on NodeJS
                          </h2>
                          <p>
                            Hi ${name}, We're happy you signed up for NodeJS. To
                            start exploring the NodeJS App, please confirm your
                            email address.
                          </p>
                          <p>
                            <a
                              href="https://worried-handkerchief-dove.cyclic.app/api/users/verify/${verificationToken}"
                              class="btn btn-primary"
                              >Consfirm</a
                            >
                          </p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="bg_white"></td>
              </tr>
            </table>
            <table
              align="center"
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              width="100%"
              style="margin: auto"
            >
              <tr>
                <td valign="middle" class="bg_black footer email-section">
                  <table>
                    <tr>
                      <td valign="top" width="33.333%" 
                      style="padding-top: 20px">
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td style="text-align: left; padding-right: 10px">
                              <h3 class="heading">Node JS</h3>
                              <p>
                                A small river named Duden flows by their 
                                place and supplies it with the 
                                necessary regelialia.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="top" width="33.333%" 
                      style="padding-top: 20px">
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td
                              style="
                                text-align: left;
                                padding-left: 5px;
                                padding-right: 5px;
                              "
                            >
                              <h3 class="heading">Contact Info</h3>
                              <ul>
                                    <li>
                                  <span class="text"
                                    >203 Fake St. Mountain View, Sun Ocean,
                                    Building, ABE</span>
                                    </li>
                                    <li>
                                    <span class="text">+0 000 0000 000</span>
                                    </li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="top" width="33.333%" 
                      style="padding-top: 20px">
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td style="text-align: left; padding-left: 10px">
                              <h3 class="heading">Useful Links</h3>
                              <ul>
                                <li><a href="#">Backend</a></li>
                                <li><a href="#">Frontend</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Facebook</a></li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td valign="middle" class="bg_black footer email-section">
                  <table>
                    <tr>
                      <td valign="top" width="33.333%">
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%">
                          <tr>
                            <td style="text-align: left; padding-right: 10px">
                              <p>&copy; 2048 NodeJS. All Rights Reserved</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="top" width="33.333%">
                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          width="100%">
                          <tr>
                            <td
                              style="
                                text-align: right;
                                padding-left: 5px;
                                padding-right: 5px;
                              ">
                              <p>
                                <a href="#" 
                                style="color: rgba(255, 255, 255, 0.4)">
                                Unsubcribe</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </center>
      </body>
    </html>
    `,
  });
}

module.exports = {
  redistrationMailHandler,
};
