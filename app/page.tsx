'use client';
import { useState } from 'react';
import { Button } from 'flowbite-react';
import styles from '../styles/styles.module.css';



export default function Home() {
  const [activeButton, setActiveButton] = useState('FEED');
  const [feedOpen, setFeedOpen] = useState(true);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [trendingOpen, setTrendingOpen] = useState(false);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);

    if (buttonText === 'FEED') {
      setFeedOpen(true);
      setPeopleOpen(false);
      setTrendingOpen(false);
    } else if (buttonText === 'PEOPLE') {
      setFeedOpen(false);
      setPeopleOpen(true);
      setTrendingOpen(false);
    } else if (buttonText === 'TRENDING') {
      setFeedOpen(false);
      setPeopleOpen(false);
      setTrendingOpen(true);
    }
  };

  return (
    <div className={`${styles.main} py-4 mt-4`}>
      <div className={`${styles.btnGroup} button-group_wrapper mb-4`}>
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
          <Button
            className={`w-full p-2 rounded-r-[1.3rem] ${activeButton === 'TRENDING' ? 'active-button' : 'inactive-button'}`}
            onClick={() => handleButtonClick('TRENDING')}
          >
            TRENDING
          </Button>
        </Button.Group>
      </div>
      <div className='button-tabs_wrapper'>
        {feedOpen && <div>tab1</div>}
        {peopleOpen && <div>tab2</div>}
        {trendingOpen && <div>tab3</div>}
      </div>
    </div>
  );
}
