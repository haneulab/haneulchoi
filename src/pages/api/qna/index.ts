import { type FormDataField, type FormDataResponse } from '@haneulchoi/types'
import { type NextApiHandler } from 'next'
import { createTransport } from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const qnaFormHandler: NextApiHandler<
    FormDataResponse | { status: number; error: string }
> = async (req, res) => {
    const formData = req.body as unknown as FormDataField

    if (formData) {
        const transporter = createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.NODEMAILER_AUTH_EMAIL,
                pass: process.env.NODEMAILER_AUTH_PASSWORD,
            },
            secure: true,
        })

        const mail = {
            from: formData.email,
            to: 'hanchoi@ucdavis.edu',
            subject: `${formData.title} from ${formData.name}`,
            text: `${formData.title} : ${formData.message} - sent by ${formData.email}, ${formData.name}`,
        }

        transporter.sendMail(mail, function (_err, info) {
            // if (err) {
            //     return res.status(500).json({
            //         status: 500,
            //         error: err.message,
            //     })
            // }s
            console.log('info ; ', info)
            return res.status(200).json({
                sentAt: new Date().toISOString(),
                sentBy: formData.email,
                sentTo: 'Haneul Choi Studio',
            })
        })
        return
    }

    return res.status(500).json({
        status: 500,
        error: 'The contact form data has not properly passed to the server.',
    })
}

export default qnaFormHandler
