'use client';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { OptionsProps } from '@/types';

const TweetDropdown = ({ options }: { options: OptionsProps[] }) => {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-full bg-black bg-opacity-30 px-3 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right  rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {options.map((option, index) => (
                            <div className="px-1 py-1" key={index}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-[#1b1b1b] text-[#ececec]' : 'text-[#ececec]'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <FontAwesomeIcon
                                                icon={option.icon}
                                                className="mr-2 h-5 w-5 text-[#ececec]"
                                                aria-hidden="true"
                                            />
                                            {option.label}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        ))}

                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

export default TweetDropdown
