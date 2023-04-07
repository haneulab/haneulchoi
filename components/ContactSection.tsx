import { classnames } from '@studio/utils/classnames'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { ContactCategory } from 'studio'

const ContactSubmitLoading = dynamic(
    () => import('@studio/components/ContactSubmitLoading')
)

const ContactSection = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [category, setCategory] = useState<ContactCategory>(null)
    const [message, setMessage] = useState<string>('')
    const [isSubmitted, setIsSubmitted] = useState<
        'active' | 'inactive' | 'submitted' | 'failed'
    >('inactive')
    const [error, setError] = useState<string>(null)
    const [submitMessage, setSubmitMessage] = useState<string>(null)

    function onSetCategory(category_: ContactCategory): void {
        setCategory(category_)
    }

    async function onSubmit(e): Promise<void> {
        e.preventDefault()
        setError(null)
        setIsSubmitted('active')
        setSubmitMessage('Sending your message...')

        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                category,
                message,
            }),
        })
            .then((response) => {
                setSubmitMessage('Receiving response data...')
                if (!response.ok) {
                    throw new Error('Failed to send your message.')
                }

                return response.json()
            })
            .then(() => {
                setSubmitMessage('Successfully sent your message!')
                setIsSubmitted('submitted')
            })
            .catch((error) => {
                setSubmitMessage(error.message)
                setIsSubmitted('failed')
                setError(error.message)
            })

        setName('')
        setEmail('')
        setCategory(null)
        setMessage('')
        window.scrollTo({ top: window.scrollY, behavior: 'smooth' })
    }

    useEffect(() => {
        setIsSubmitted('inactive')
    }, [])

    return (
        <>
            {isSubmitted === 'active' && (
                <ContactSubmitLoading message={submitMessage} />
            )}
            <section className="px-8 lg:px-0 py-12 lg:py-16 max-w-cutoff mx-auto grid grid-cols-1">
                <article className="mb-12">
                    <h3 className="w-full text-center mx-auto font-bold text-3xl md:text-4xl lg:text-5xl font-figtree flex flex-col gap-y-4 lg:gap-y-6 items-center mb-4">
                        Any Questions?
                    </h3>
                    <p className="text-center text-xl">
                        If you have any questions & inquiries, feel free to
                        reach me via this contact form!
                    </p>
                </article>
                {isSubmitted !== 'submitted' && (
                    <>
                        {isSubmitted === 'failed' && error && (
                            <p className="text-center w-full max-w-lg mx-auto font-medium font-source text-pinkRed bg-pinkRed/10 border border-pinkRed/25 text-lg p-8 rounded-lg mb-4">
                                {error} Please try again!
                            </p>
                        )}
                        <form
                            onSubmit={onSubmit}
                            className="w-full max-w-lg mx-auto lg:p-8 lg:border rounded-xl flex flex-col gap-y-6"
                        >
                            <section className="flex flex-col gap-y-2">
                                <label className="font-figtree font-semibold text-lg lg:text-xl">
                                    <span className="text-pinkRed">*</span>Your
                                    name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={classnames(
                                        'w-full rounded-lg bg-grayWhite/10 border-2 font-source',
                                        name.trim().length >= 4
                                            ? 'border-teal-400/25'
                                            : 'border-pinkRed/25'
                                    )}
                                />
                            </section>
                            <section className="flex flex-col gap-y-2">
                                <label className="font-figtree font-semibold text-lg lg:text-xl">
                                    <span className="text-pinkRed">*</span>Your
                                    email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={classnames(
                                        'w-full rounded-lg bg-grayWhite/10 border-2 font-source',
                                        email.trim().length >= 4
                                            ? 'border-teal-400/25'
                                            : 'border-pinkRed/25'
                                    )}
                                />
                            </section>
                            <section className="flex flex-col gap-y-3">
                                <label className="font-figtree font-semibold text-lg lg:text-xl">
                                    <span className="text-pinkRed">*</span>
                                    Message Category
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        onClick={() =>
                                            onSetCategory('question')
                                        }
                                        type="button"
                                        className={classnames(
                                            'px-6 py-2 rounded-lg border-2 font-medium font-figtree text-lg transition-all',
                                            category === 'question'
                                                ? 'opacity-100 border-teal-400 text-teal-400'
                                                : 'opacity-60'
                                        )}
                                    >
                                        Question
                                    </button>
                                    <button
                                        onClick={() => onSetCategory('inquiry')}
                                        type="button"
                                        className={classnames(
                                            'px-6 py-2 rounded-lg border-2 font-medium font-figtree text-lg transition-all',
                                            category === 'inquiry'
                                                ? 'opacity-100 border-teal-400 text-teal-400'
                                                : 'opacity-60'
                                        )}
                                    >
                                        Inquiry
                                    </button>
                                </div>
                            </section>
                            {category && (
                                <section className="flex flex-col gap-y-2">
                                    <label className="font-figtree font-semibold text-lg lg:text-xl capitalize">
                                        <span className="text-pinkRed">*</span>
                                        {category} message
                                    </label>
                                    <textarea
                                        value={message}
                                        rows={4}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        className={classnames(
                                            'w-full rounded-lg bg-grayWhite/10 border-2 font-source font-medium',
                                            message.trim().length >= 10
                                                ? 'border-teal-400/25'
                                                : 'border-pinkRed/25'
                                        )}
                                    />
                                </section>
                            )}
                            {name && email && category && message && (
                                <section>
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="px-8 py-3 rounded-xl text-center bg-teal-500 font-semibold font-figtree text-white text-lg w-full"
                                    />
                                </section>
                            )}
                        </form>
                    </>
                )}
                {isSubmitted === 'submitted' && (
                    <p className="text-center w-full max-w-lg mx-auto font-medium font-source text-teal-500 bg-teal-500/10 border border-teal-500/25 text-lg p-8 rounded-lg">
                        Successfully sent your message!
                    </p>
                )}
            </section>
        </>
    )
}

export default ContactSection
