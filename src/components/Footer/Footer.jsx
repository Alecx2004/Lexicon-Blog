import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-white dark:bg-gray-800 border border-t-2 border-t-gray-100 dark:border-t-gray-700 transition-colors duration-200">
            <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="ml-32">
                                <Logo width="50%" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        to=""
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer