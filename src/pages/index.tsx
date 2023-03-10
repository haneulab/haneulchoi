import { type FormDataField, type PageWithLayout } from '@haneulchoi/types'
import { type GetServerSidePropsContext } from 'next'

import { PrimaryLayout } from '@haneulchoi/components/layouts'
import { useLanguage, useTheme } from '@haneulchoi/contexts'
import { classnames } from '@haneulchoi/functions'

import Image from 'next/image'
import HaneulChoiAvatar from 'public/haneulchoi_avatar.png'
import { HiOutlineArrowDown, HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { ProgressBarModal } from '@application/components/core'
import { useRoute } from '@haneulchoi/hooks'
const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    /** hooks */
    const { push } = useRoute()
    const { theme } = useTheme()
    const { lang } = useLanguage()

    const [formName, setFormName] = useState<string>('')
    const [formEmail, setFormEmail] = useState<string>('')
    const [formTitle, setFormTitle] = useState<string>('')
    const [formMessage, setFormMessage] = useState<string>('')
    const [formSubmitted, setFormSubmitted] = useState<0 | 1 | -1 | -2>(0)
    const [formError, setFormError] = useState<string>('')

    const [showFormProgressSubmit, setShowFormProgressSubmit] =
        useState<boolean>(false)
    const [showFormProgressComplete, setShowFormProgressComplete] =
        useState<boolean>(false)

    function onShowFormProgressSubmit() {
        setShowFormProgressSubmit(true)
        setShowFormProgressComplete(false)
    }
    function onShowFormProgressComplete() {
        setShowFormProgressSubmit(false)
        setShowFormProgressComplete(true)
    }
    function onHideFormProgress() {
        setShowFormProgressSubmit(false)
        setShowFormProgressComplete(false)
    }

    function onSetFormInput(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        set: Dispatch<SetStateAction<string>>
    ) {
        set(e.target.value)
    }

    function onResetForm() {
        setFormError('')
        setFormSubmitted(0)
    }

    async function onContactFormSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setFormError('')
        onShowFormProgressSubmit()
        if (formName.trim().length < 4) {
            setFormError(
                lang === 'en'
                    ? 'Your name is too short. Please try again'
                    : '????????? ?????? ????????????. ?????? ????????? ?????????.'
            )
            setFormSubmitted(-1)
            onHideFormProgress()
            return
        }
        if (!(formEmail.trim().length > 4 && formEmail.includes('@'))) {
            setFormError(
                lang === 'en'
                    ? 'Please enter valid email.'
                    : '????????? ????????? ????????? ??????????????????.'
            )
            setFormSubmitted(-1)
            onHideFormProgress()
            return
        }
        if (formTitle.trim().length < 4) {
            setFormError(
                lang === 'en'
                    ? 'Your title is too short. Please try again'
                    : '????????? ????????? ?????? ????????????. ?????? ????????? ?????????.'
            )
            setFormSubmitted(-1)
            onHideFormProgress()
            return
        }
        if (formMessage.trim().length < 10) {
            setFormError(
                lang === 'en'
                    ? 'Your message is too short. Please try again'
                    : '????????? ????????? ?????? ????????????. ?????? ????????? ?????????.'
            )
            onHideFormProgress()
            setFormSubmitted(-1)
            return
        }

        let formData: FormDataField = {
            name: formName,
            email: formEmail,
            title: formTitle,
            message: formMessage,
        }

        const response = await fetch('/api/qna', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.status === 200) {
            onShowFormProgressComplete()
            setTimeout(() => {
                window.scrollTo(0, 0)
                setFormError('')
                setFormSubmitted(1)
                setFormName('')
                setFormEmail('')
                setFormTitle('')
                setFormMessage('')
                onHideFormProgress()
            }, 1500)
            // const data = (await response.json()) as unknown as FormDataResponse
            // console.log(data)
            return
        }

        onHideFormProgress()

        setFormError(
            lang === 'en'
                ? 'Error caught while sending email.'
                : '???????????? ????????? ?????? ????????? ??????????????????.'
        )
        setFormSubmitted(-2)
    }

    return (
        <>
            <ProgressBarModal
                show={showFormProgressSubmit || showFormProgressComplete}
                message={
                    showFormProgressSubmit
                        ? 'Sending the email now...'
                        : showFormProgressComplete
                        ? 'Successfully sent the email.'
                        : ''
                }
            />
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="absolute bottom-8 w-max mx-auto flex justify-center items-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-x-2 font-nunito font-light text-slate-500 transition-smooth hover:text-sky-500"
                    >
                        <span>
                            {lang === 'en'
                                ? 'Any questions? Contact me'
                                : '????????? ????????????????'}
                        </span>
                        <HiOutlineArrowDown />
                    </a>
                </div>
                <section className="px-8 py-24 lg:py-28 w-full max-w-cutoff mx-auto relative">
                    <article className="flex flex-col items-center mb-6">
                        <picture className="block mb-2 max-w-[275px] md:max-w-[325px]">
                            <Image
                                src={HaneulChoiAvatar}
                                alt="Haneul Choi, Software Developer, Mathematics & Computer Science Tutor Image"
                            />
                        </picture>
                        <h2 className="mb-2 font-semibold font-poppins text-2xl md:text-3xl lg:text-4xl">
                            {lang === 'en'
                                ? 'Hi, I am Haneul Choi.'
                                : '???????????????, ??????????????????.'}
                        </h2>
                        <p className="text-center px-8 leading-7 lg:text-lg lg:leading-8 font-lato">
                            {lang === 'en'
                                ? 'I am a software developer / tutor.'
                                : '??????????????? ?????? ??? ??????????????? ?????????.'}
                        </p>
                    </article>
                    <ul className="max-w-[500px] mx-auto flex flex-col px-8 gap-y-4 lg:flex-row lg:px-0 lg:gap-y-0 lg:gap-x-8 justify-center">
                        <Link href={'/tutor/home'}>
                            <a
                                className={classnames(
                                    'w-full border-2 transition-smooth transform overflow-hidden',
                                    theme === 'dark'
                                        ? 'border-neutral-500/25 hover:border-neutral-300/90'
                                        : 'border-neutral-700/25 hover:border-neutral-800/90'
                                )}
                            >
                                <span className="w-full inline-flex px-3 py-2 items-center justify-center gap-x-4 font-light font-poppins transition-smooth transform hover:scale-105">
                                    <span>
                                        {lang === 'en'
                                            ? 'Tutor Page'
                                            : '?????? ???????????? ??????'}
                                    </span>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </Link>
                        <Link href={'/developer/home'}>
                            <a
                                className={classnames(
                                    'w-full border-2 transition-smooth transform overflow-hidden',
                                    theme === 'dark'
                                        ? 'border-neutral-500/25 hover:border-neutral-300/90'
                                        : 'border-neutral-700/25 hover:border-neutral-800/90'
                                )}
                            >
                                <span className="w-full inline-flex px-3 py-2 items-center justify-center gap-x-4 font-light font-poppins transition-smooth transform hover:scale-105">
                                    <span>
                                        {lang === 'en'
                                            ? 'Developer Page'
                                            : '?????? ???????????? ??????'}
                                    </span>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </Link>
                    </ul>
                </section>
            </div>
            <div
                className={classnames(
                    'bg-gradient-to-b from-transparent via-transparent'
                )}
            >
                <section
                    id="contact"
                    className="px-8 py-24 lg:py-32 w-full max-w-cutoff mx-auto flex flex-col gap-y-16 lg:gap-y-32"
                >
                    <article className="max-w-2xl mx-auto">
                        <h3 className="font-bold w-max mx-auto font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
                            Q&A Time.
                        </h3>
                        <p className="text-center px-8 font-nunito opacity-80 leading-7 lg:text-lg lg:leading-8 mb-8">
                            {lang === 'en'
                                ? 'If you have any questions that you think others might possibly have asked before, you can check out the'
                                : '?????? ??? ????????? ??????????????? ????????? ???????????? ??????????????? ?????????????????? ????????????????????????.'}{' '}
                            <a
                                href=""
                                className="text-blue-400 opacity-100 font-medium transition-smooth hover:text-blue-500 text-base"
                            >
                                {lang === 'en'
                                    ? 'Frequently Asked Questions page.'
                                    : '?????? ???????????? ?????? ?????????'}
                            </a>{' '}
                            {lang === 'en'
                                ? 'Otherwise, you can directly submit the question form below and I will get back to you as soon as possible!'
                                : '??? ????????? ?????? ??????????????? ???????????? ????????????.'}
                        </p>
                        {formSubmitted === -2 ? (
                            <>
                                <div className="border-2 border-red-500/50">
                                    <section className="p-6">
                                        <p className="text-center mb-4">
                                            {formError}
                                        </p>
                                        <div className="w-full flex justify-center items-center sm:max-w-sm mx-auto">
                                            <button
                                                onClick={onResetForm}
                                                className="w-full text-center px-6 py-3 bg-neutral-900 text-white border-2 border-red-500/50 transition-smooth lg:hover:opacity-75"
                                            >
                                                {lang === 'en'
                                                    ? 'Try again'
                                                    : '?????? ????????????'}
                                            </button>
                                        </div>
                                    </section>
                                </div>
                            </>
                        ) : (
                            <>
                                <form
                                    className="border-2"
                                    onSubmit={onContactFormSubmit}
                                >
                                    <section className="p-6 flex flex-col gap-y-6">
                                        <div className="flex flex-col w-full gap-y-2">
                                            <label className="font-bold text-base font-lato">
                                                {lang === 'en'
                                                    ? 'Your Name'
                                                    : '????????? ????????? ?????????????'}
                                            </label>
                                            <input
                                                type="text"
                                                value={formName}
                                                onChange={(e) =>
                                                    onSetFormInput(
                                                        e,
                                                        setFormName
                                                    )
                                                }
                                                className={classnames(
                                                    'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                                    theme === 'dark'
                                                        ? 'bg-neutral-900'
                                                        : 'bg-white'
                                                )}
                                            />
                                        </div>
                                        <div className="flex flex-col w-full gap-y-2">
                                            <label className="font-bold text-base font-lato">
                                                {lang === 'en'
                                                    ? 'Your Email'
                                                    : '?????? ???????????? ???????????????????'}
                                            </label>
                                            <input
                                                type="text"
                                                value={formEmail}
                                                onChange={(e) =>
                                                    onSetFormInput(
                                                        e,
                                                        setFormEmail
                                                    )
                                                }
                                                className={classnames(
                                                    'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                                    theme === 'dark'
                                                        ? 'bg-neutral-900'
                                                        : 'bg-white'
                                                )}
                                            />
                                        </div>
                                        <div className="flex flex-col w-full gap-y-2">
                                            <label className="font-bold text-base font-lato">
                                                {lang === 'en'
                                                    ? 'Message Title'
                                                    : '????????? ??????'}
                                            </label>
                                            <input
                                                type="text"
                                                value={formTitle}
                                                onChange={(e) =>
                                                    onSetFormInput(
                                                        e,
                                                        setFormTitle
                                                    )
                                                }
                                                className={classnames(
                                                    'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                                    theme === 'dark'
                                                        ? 'bg-neutral-900'
                                                        : 'bg-white'
                                                )}
                                            />
                                        </div>
                                        <div className="flex flex-col w-full gap-y-2">
                                            <label className="font-bold text-base font-lato">
                                                {lang === 'en'
                                                    ? 'Message'
                                                    : '????????? ??????'}
                                            </label>
                                            <textarea
                                                rows={4}
                                                value={formMessage}
                                                onChange={(e) =>
                                                    onSetFormInput(
                                                        e,
                                                        setFormMessage
                                                    )
                                                }
                                                className={classnames(
                                                    'border-x-0 border-t-0 border-b pb-2 outline-none ring-none focus:outline-0 focus:border-b-blue-500 focus:border-b-2 focus:ring-0',
                                                    theme === 'dark'
                                                        ? 'bg-neutral-900'
                                                        : 'bg-white'
                                                )}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            {formError &&
                                                formSubmitted !== 1 && (
                                                    <p className="text-sm font-thin font-nunito mb-2 text-red-500">
                                                        {formError}
                                                    </p>
                                                )}
                                            <input
                                                type="submit"
                                                value={
                                                    lang === 'en'
                                                        ? 'Send Message'
                                                        : '????????? ?????????'
                                                }
                                                className="px-8 py-3 w-full sm:max-w-[275px] rounded-none text-white bg-sky-500 transition-smooth hover:opacity-80 cursor-pointer font-medium font-poppins"
                                            />
                                        </div>
                                    </section>
                                </form>
                            </>
                        )}
                    </article>
                </section>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
