import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group4Icon } from './Group4Icon.js';
import { Group5Icon } from './Group5Icon.js';
import { Group9Icon } from './Group9Icon.js';
import { Group16Icon } from './Group16Icon.js';
import { Group17Icon } from './Group17Icon.js';
import { Group18Icon } from './Group18Icon.js';
import { Group22Icon } from './Group22Icon.js';
import classes from './MainScreen.module.css';

interface Props {
  className?: string;
}
/* @figmaId 164:8770 */
export const MainScreen: FC<Props> = memo(function MainScreen(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group22}>
        <Group22Icon className={classes.icon} />
      </div>
      <div className={classes.group18}>
        <Group18Icon className={classes.icon2} />
      </div>
      <div className={classes.group17}>
        <Group17Icon className={classes.icon3} />
      </div>
      <div className={classes.group4}>
        <Group4Icon className={classes.icon4} />
      </div>
      <div className={classes.group16}>
        <Group16Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle26}></div>
      <div className={classes.rightsAwarenessInformationNetw}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>R</span>
          <span className={classes.label2}>ights </span>
          <span className={classes.label3}>A</span>
          <span className={classes.label4}>wareness</span>
          <span className={classes.label5}> I</span>
          <span className={classes.label6}>nformation </span>
          <span className={classes.label7}>N</span>
          <span className={classes.label8}>etwork</span>
        </p>
      </div>
      <div className={classes.rectangle28}></div>
      <a
          href='https://tamely.github.io/RainWebsite/#car'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle28}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#car'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle27}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#vehicle'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle29}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#vehicle'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle30}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#labor'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle31}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#labor'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle32}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#dui'
          target='_blank'
          rel='noreferrer'
          className={classes.group9}
        ><Group9Icon className={classes.icon6} />
      </a>
      <a
          href='https://www.redbubble.com/'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle312}
        >
      </a>
      <a
          href='https://www.redbubble.com/'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle322}
        >
      </a>
      <a
          href='https://instagram.com/rainprosperofficial?igshid=YmMyMTA2M2Y='
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle313}
        >
      </a>
      <a
          href='https://instagram.com/rainprosperofficial?igshid=YmMyMTA2M2Y='
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle323}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#car'
          target='_blank'
          rel='noreferrer'
          className={classes.trafficStops}
        >Traffic Stops
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#dui'
          target='_blank'
          rel='noreferrer'
          className={classes.dUIInformation}
        >DUI Information
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#labor'
          target='_blank'
          rel='noreferrer'
          className={classes.laborAndEmployment}
        >Labor and Employment
      </a>
      <a
          href='https://www.redbubble.com/'
          target='_blank'
          rel='noreferrer'
          className={classes.redbubble}
        >Redbubble
      </a>
      <a
          href='https://instagram.com/rainprosperofficial?igshid=YmMyMTA2M2Y='
          target='_blank'
          rel='noreferrer'
          className={classes.rAINInstagram}
        >RAIN Instagram
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#about'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle314}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#about'
          target='_blank'
          rel='noreferrer'
          className={classes.rectangle324}
        >
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#about'
          target='_blank'
          rel='noreferrer'
          className={classes.aboutRain}
        >About Rain
      </a>
      <a
          href='https://tamely.github.io/RainWebsite/#vehicle'
          target='_blank'
          rel='noreferrer'
          className={classes.vehicleSearches}
        >Vehicle Searches
      </a>
      <div className={classes.group5}>
        <Group5Icon className={classes.icon7} />
      </div>
      <div className={classes.rain}>rain</div>
      <div className={classes.rain2}>rain</div>
    </div>
  );
});
