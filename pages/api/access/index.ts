import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config()

const contentAccessCode = process.env.NEXT_PUBLIC_CONTENT_ACCESS_CODE ?? ''
const contentAccessApprovalId =
    process.env.NEXT_PUBLIC_CONTENT_ACCESS_APPROVAL_ID ?? ''

const AccessAPIHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const passcode = req.body.passcode ?? ''

    if (passcode === contentAccessCode) {
        return res.status(200).json({
            contentAccessApprovalId,
        })
    }

    res.status(400).json({
        error: {
            code: 401,
            message: 'The passcode you provided does not match access code.',
        },
    })
}

export default AccessAPIHandler
