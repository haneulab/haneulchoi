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

    const contentForClient = createContactContent(contactBody)
    const contentForMe = {
        ...createContactContent(contactBody),
        to: 'haneulchoi.business@gmail.com',
        from: `HaneulChoiStudio <haneulchoi.business@gmail.com>`,
        replyTo: contactBody.email,
    }

    try {
        await t.sendMail(contentForClient)
        await t.sendMail(contentForMe)
        res.status(200).json(null)
    } catch (error) {
        console.error(error)
        res.status(404).end()
    }
}

export default ContactAPIHandler
