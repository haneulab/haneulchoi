import { SendMailOptions } from 'nodemailer'
import type { ContactField } from 'studio'
import { v4 as uuid } from 'uuid'

export function createContactContent(content: ContactField): SendMailOptions {
    const uniqueCID = uuid()

    return {
        from: `HaneulChoiStudio <haneulchoi.business@gmail.com>`,
        to: content.email,
        replyTo: 'no-reply@haneulchoi.studio',
        subject: `Hello, ${
            content.name
        }. Thank you for contacting @haneulchoistudio for your ${content.category.toUpperCase()}!`,
        text: `Please expect to receive reply within 1-2 business days.`,
        html: `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                body {
                    font-family: serif;
                    padding: 20px;
                }
                ul {
                    margin: 0;
                    padding: 0;
                }
                .email-body {
                    background: white;
                    padding: 20px;
                }
            </style>
            <title>Automatic Email Response From @@haneulchoistudio</title>
        </head>
        <body>
            <div class='email-body'>
                <div style='margin-bottom: 60px; text-align: center; border-bottom: 1px solid lightgray; padding-bottom: 30px;'>
                    <picture style='display: block; text-align: center; width: max-content; margin-bottom: 40px;'>
                        <img src='cid:${uniqueCID}' alt='Haneul Choi Studio | Profile Image' style='max-width: 175px; max-height: 175px; border-radius: 50%; border: 2px solid #333' />
                    </picture>
                    <h1 style='font-size: 26.5px; margin-bottom: 10px; text-align: center;'>${content.name}, <span style="color: dodgerblue;">Thank You</span> for contacting <small style='color: #444;'>@haneulchoistudio</small>.</h1>
                    <p style='color: #666; font-size: 18.5px; text-align: center;'>Please expect 1-2 business days to receive reply from me.</p>
                </div>
                <div style='margin-bottom: 60px; border-bottom: 1px solid lightgray; padding-bottom: 30px;'>
                    <section style='margin-bottom: 30px;'>
                        <h5 style='color: #333; font-weigh: bold; font-size: 24px; margin-bottom: 10px;'>Your Message Sent To</h5>
                        <p style='color: #666; font-size: 18px;'>@haneulchoistudio - <a style='color: dodgerblue' href='mailto:haneulchoi.business@gmail.com'>haneulchoi.business@gmail.com</a></p>
                    </section>
                    <section style='margin-bottom: 30px;'>
                        <h5 style='color: #333; font-weigh: bold; font-size: 24px; margin-bottom: 10px;'>Contact Type</h5>
                        <p style='color: #666; font-size: 18px;'>${content.category}</p>
                    </section>
                    <section>
                        <h5 style='color: #333; font-weigh: bold; font-size: 24px; margin-bottom: 10px;'>Contact Message</h5>
                        <p style='color: #666; font-size: 18px;'>${content.message}</p>
                    </section>
                </div>
                <div>
                    <h5 style='color: #333; font-size: 18px; margin-bottom: 20px;'>Team <strong>@haneulchoistudio</strong></h5>
                    <div>
                        <p style='color: #555; margin-bottom: 15px;'>
                            Visit my Studio <a style='color: dodgerblue' href='https://haneulchoi.studio'>https://haneulchoi.studio</a>
                        </p>
                        <p style='color: #555; margin-bottom: 15px;'>
                            Visit my Github <a style='color: dodgerblue' href='https://github.com/haneulchoistudio'>https://github.com/haneulchoistudio</a>
                        </p>
                        <p style='color: #555; margin-bottom: 15px;'>
                            Visit my Linkedin <a style='color: dodgerblue' href='https://linkedin.com/in/haneulab'>https://linkedin.com/in/haneulab</a>
                        </p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `,
        attachments: [
            {
                filename: 'email_logo.png',
                path: 'public/email_logo.png',
                cid: uniqueCID,
            },
        ],
    }
}
