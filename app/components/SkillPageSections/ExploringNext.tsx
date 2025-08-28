import React from 'react'
import { ParaContent } from '../HomePageSections'

const ExploringNext: React.FC = () => {
    return (
        <section className='flex flex-col items-center justify-center gap-4 px-4 lg:px-8 mt-8 w-full'>
            <ParaContent>
                <h3 className="text-2xl font-semibold">Currently Exploring</h3>
                <p className="text-gray-400 leading-relaxed text-base tracking-wide">
                    Growing as a full-stack developer, actively exploring tools and practices that improve reliability, performance, and developer experience across the stack. Here&apos;s what&apos;s on the learning radar.
                </p>
                <ul className="space-y-3 text-gray-400 leading-relaxed tracking-wide grid sm:grid-cols-2 gap-3 text-start">
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">📘</span> <span><strong className="text-white">Advanced TypeScript</strong> — stricter types, safer APIs, and better DX across frontend and backend</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🧪</span> <span><strong className="text-white">Testing</strong> — React Testing Library and Vitest for UI, plus integration tests for APIs</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">💳</span> <span><strong className="text-white">Payment Integrations</strong> — Stripe/Razorpay flows, webhooks, subscriptions, refunds, and PCI-aware UX</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🟢</span> <span><strong className="text-white">Realtime with WebSockets</strong> — Socket.io/Ably/Pusher for chat, presence, notifications, and live dashboards</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">☁️</span> <span><strong className="text-white">Serverless & Edge</strong> — Vercel Functions/Edge Runtime, background jobs, schedulers, and cold-start trade-offs</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🗃️</span> <span><strong className="text-white">Data Modeling & Indexing</strong> — MongoDB schema design, aggregations, indexes, and query performance</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🧩</span> <span><strong className="text-white">API Design Patterns</strong> — idempotent webhooks, rate limiting, pagination, and validation with Zod</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🔍</span> <span><strong className="text-white">Observability</strong> — logging/metrics, error tracking, and tracing for serverless apps</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-400">
                        <span className="text-lg mt-1">🚀</span> <span><strong className="text-white">CI/CD & Deployments</strong> — Vercel workflows, env management, and basic GitHub Actions</span>
                    </li>
                </ul>
            </ParaContent>
        </section>
    )
}

export default ExploringNext