import nodeMailer from 'nodemailer'
import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { ContactField } from 'studio'
import { createContactContent } from '@studio/libs/contact'

dotenv.config()

const ContactAPIHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') res.status(500).end()

    if (!req.body) res.status(400).end()

    const contactBody: ContactField = req.body

    const t = nodeMailer.createTransport({
        service: 'gmail.com',
        auth: {
            user: process.env.NEXT_NODEMAILER_EMAIL,
            pass: process.env.NEXT_NODEMAILER_PASSWORD,
        },
    })

    try {
        await t.sendMail(createContactContent(contactBody))
        res.status(200).json({})
    } catch (error) {
        console.error(error)
        res.status(404).end()
    }
}

export default ContactAPIHandler
