import { type FormDataField, type FormDataResponse } from '@haneulchoi/types'
import { type NextApiHandler } from 'next'
import { createTransport } from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const qnaFormHandler: NextApiHandler<
    FormDataResponse | { error: string }
> = async (req, res) => {
    const formData = req.body as unknown as FormDataField

    if (formData) {
        const transporter = createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            secure: true,
        })

        const mail = {
            from: formData.email,
            to: 'hanchoi@ucdavis.edu',
            subject: `${formData.title} from ${formData.name}`,
            text: `${formData.title} : ${formData.message} - sent by ${formData.email}, ${formData.name}`,
        }

        try {
            await transporter.sendMail(mail)
        } catch (error) {
            console.log(error.message)

            return res.status(500).json({
                error: error.message,
            })
        }

        return res.status(200).json({ error: '' })
    }

    return res.status(500).json({
        error: 'The contact form data has not properly passed to the server.',
    })
}

export default qnaFormHandler
