'use client';
import { useState } from 'react';
import { Button } from 'flowbite-react';
import styles from '../styles/styles.module.css';
import dynamic from 'next/dynamic';

const Feed = dynamic(() => import('@/components/Feed/Feed'));
const People = dynamic(() => import('@/components/People/People'))

export default function Home() {
  const [activeButton, setActiveButton] = useState('FEED');
  const [feedOpen, setFeedOpen] = useState(true);
  const [peopleOpen, setPeopleOpen] = useState(false);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);

    if (buttonText === 'FEED') {
      setFeedOpen(true);
      setPeopleOpen(false);
    } else if (buttonText === 'PEOPLE') {
      setFeedOpen(false);
      setPeopleOpen(true);
    } else if (buttonText === 'TRENDING') {
      setFeedOpen(false);
      setPeopleOpen(false);
    }
  };

  return (
    <main className={`lg:py-4 lg:mt-4`}>
      <div className={`${styles.btnGroup} button-group_wrapper mb-4 px-5`}>
        <Button.Group className='w-[100%]'>
          <Button
            className={`w-full p-2 rounded-l-[1.3rem] ${activeButton === 'FEED' ? 'active-button' : 'inactive-button'}`}
            onClick={() => handleButtonClick('FEED')}
          >
            FEED
          </Button>
          <Button
            className={`w-full p-2 ${activeButton === 'PEOPLE' ? 'active-button' : 'inactive-button'}`}
            onClick={() => handleButtonClick('PEOPLE')}
          >
            PEOPLE
          </Button>
        </Button.Group>
      </div>
      <div className='button-tabs_wrapper px-5'>
        {feedOpen && <Feed />}
        {peopleOpen && <People />}
      </div>
    </main>
  );
}
