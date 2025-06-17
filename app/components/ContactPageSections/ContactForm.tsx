"use client";
import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container } from '../index';
import { Input } from './index';
import { Roboto } from 'next/font/google';
import { toast, ToastContainer } from 'react-toastify';

const roboto = Roboto({
    variable: "--font-roboto",
    weight: '500',
    subsets: ['latin'],
});

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("xrbklzqe");

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.succeeded) {
            toast.success('Message sent');
            formRef.current?.reset()
        }
    }, [state]);

    return (
        <Container>
            <div className={`w-full max-w-2xl bg-black/15 rounded-lg px-4 py-10 md:p-10 shadow-md ${roboto.className}`}>
                <form
                    ref={formRef}
                    action="https://formspree.io/f/xrbklzqe"
                    method="POST"
                    className="space-y-5 flex flex-col items-center"
                    onSubmit={handleSubmit}
                >
                    <Input type="text" placeholder="Name" name="name" />
                    <ValidationError field="name" prefix="Name" errors={state.errors} />
                    <Input type="text" placeholder="Email" name="email" />
                    <ValidationError field="email" prefix="Email" errors={state.errors} />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Write your message"
                        rows={5}
                        className="bg-black/40 p-3 w-full outline-none rounded-sm"
                        required
                    />
                    <ValidationError field="message" prefix="Message" errors={state.errors} />
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className={`bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 active:from-pink-500 active:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 tracking-wider  hover:animate-pulse ${state.submitting ? 'cursor-not-allowed' : 'cursor-pointer'} mt-3`}
                    >
                        {state.submitting ? 'Sending' : 'Send Message'}
                    </button>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Container>
    );
};

export default ContactForm;
