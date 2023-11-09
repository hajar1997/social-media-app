'use client'
import React, { useState } from 'react'
import styles from '../../styles/styles.module.css'
import { Button } from 'flowbite-react';
import { Posts, ProfileLikes, ProfileMedia, Replies } from '..';

const ProfileTabs = () => {
    const [activeButton, setActiveButton] = useState('Posts');
    const [postsOpen, setPostsOpen] = useState(true);
    const [repliesOpen, setRepliesOpen] = useState(false);
    const [mediaOpen, setMediaOpen] = useState(false);
    const [likesOpen, setLikesOpen] = useState(false);

    const handleButtonClick = (buttonText: string) => {
        setActiveButton(buttonText);

        setPostsOpen(false);
        setRepliesOpen(false);
        setMediaOpen(false);
        setLikesOpen(false);

        if (buttonText === 'Posts') {
            setPostsOpen(true);
        } else if (buttonText === 'Replies') {
            setRepliesOpen(true);
        } else if (buttonText === 'Media') {
            setMediaOpen(true);
        } else if (buttonText === 'Likes') {
            setLikesOpen(true);
        }
    };

    return (
        <>
            <div className={`${styles.btnGroup} button-group_wrapper mb-4 px-5`}>
                <Button.Group className='w-[100%]'>
                    <Button
                        className={`w-full p-2 rounded-l-[1.3rem] ${activeButton === 'Posts' ? 'active-button' : 'inactive-button'}`}
                        onClick={() => handleButtonClick('Posts')}
                    >
                        Posts
                    </Button>
                    <Button
                        className={`w-full p-2 ${activeButton === 'Replies' ? 'active-button' : 'inactive-button'}`}
                        onClick={() => handleButtonClick('Replies')}
                    >
                        Replies
                    </Button>
                    <Button
                        className={`w-full p-2 ${activeButton === 'Media' ? 'active-button' : 'inactive-button'}`}
                        onClick={() => handleButtonClick('Media')}
                    >
                        Media
                    </Button>
                    <Button
                        className={`w-full p-2 rounded-r-[1.3rem] ${activeButton === 'Likes' ? 'active-button' : 'inactive-button'}`}
                        onClick={() => handleButtonClick('Likes')}
                    >
                        Likes
                    </Button>
                </Button.Group>
            </div>
            <div className='button-tabs_wrapper'>
                {postsOpen && <Posts />}
                {repliesOpen && <Replies />}
                {mediaOpen && <ProfileMedia />}
                {likesOpen && <ProfileLikes />}
            </div>
        </>
    )
}

export default ProfileTabs