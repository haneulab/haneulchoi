import type { StudioPage } from 'studio'
import { UIUtility } from '@studio/utils'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Layer
const PrimaryLayer = dynamic(() => import('@studio/components/layers/Primary'))
const Header = dynamic(() => import('@studio/components/layers/Header'))
const Footer = dynamic(() => import('@studio/components/layers/Footer'))
// Container
const PageHero = dynamic(() => import('@studio/components/containers/PageHero'))
// Form
const ViewerAccess = dynamic(
    () => import('@studio/components/forms/ViewerAccess')
)

const AboutPage: StudioPage = () => {
    const [passcode, setPasscode] = useState<string>('')
    const [matchError, setMatchError] = useState<string>('')
    const [isChecking, setIsChecking] = useState<boolean>(false)
    const [contentApprovalId, setContentApprovalId] = useState<string>('')

    async function onMatch() {
        setIsChecking(true)

        const response = await fetch('/api/access', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ passcode }),
        })

        const data = await response.json()

        if (data.error) {
            setTimeout(() => {
                setIsChecking(false)
                setMatchError(data.error.message)
            }, 2500)

            return
        }

        setContentApprovalId(data.contentAccessApprovalId)

        setTimeout(() => {
            setIsChecking(false)
        }, 2500)
    }

    useEffect(() => {
        if (matchError) {
            const timer = setTimeout(() => {
                setMatchError('')
            }, 3000)

            return () => clearInterval(timer)
        }
    }, [matchError])

    return (
        <>
            <PrimaryLayer>
                <div
                    className={UIUtility.classnames(
                        'w-full min-h-screen flex flex-col items-center justify-between bg-transparent'
                    )}
                >
                    <Header />
                    <PageHero
                        title="Viewer Access"
                        description={
                            contentApprovalId ? (
                                <span>
                                    <strong>Approved,</strong> enjoy the
                                    content!
                                </span>
                            ) : (
                                <span>
                                    Hi, I am Haneul Choi.{' '}
                                    <u className="font-bold text-xl inline-block">
                                        To view this content,
                                    </u>{' '}
                                    you need the passcode that I provided to
                                    you.
                                </span>
                            )
                        }
                    >
                        {matchError && (
                            <p className="p-8 text-pink-500 rounded-xl shadow-md bg-themeDarkLight w-full text-center mb-8 border-pink-500/25 font-medium text-sm lg:text-lg font-h max-w-lg mx-auto">
                                {matchError}
                            </p>
                        )}
                        {!isChecking && (
                            <ViewerAccess
                                approvalId={contentApprovalId}
                                onChange={(e) => setPasscode(e.target.value)}
                                onReset={() => setPasscode('')}
                                viewerCode={passcode}
                                onMatch={onMatch}
                            />
                        )}
                    </PageHero>
                    {isChecking && (
                        <div className="fixed top-0 left-0 z-50 w-full h-screen flex flex-col justify-center items-center bg-themeDark/5 backdrop-blur-md">
                            <section className="w-full px-8 2xl:px-0 max-w-lg mx-auto">
                                <p className="p-8 text-lg font-medium font-e1 text-pink-500 rounded-xl shadow-md bg-themeDarkLight flex flex-col items-center gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-4 lg:justify-center">
                                    <span className="">
                                        Checking the access code matcher
                                    </span>
                                    <span className="w-[40px] h-[40px] rounded-full p-0.5 bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-600 animate-spin flex justify-center items-center">
                                        <span className="w-full block h-full rounded-full bg-themeDarkLight" />
                                    </span>
                                </p>
                            </section>
                        </div>
                    )}
                    <Footer />
                </div>
            </PrimaryLayer>
        </>
    )
}

AboutPage.getLayout = (page) => page
export default AboutPage
