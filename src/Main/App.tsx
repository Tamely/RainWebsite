import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MainScreen } from './components/MainScreen/MainScreen';
import { LaborAndEmployment } from '../Labor/components/LaborAndEmployment/LaborAndEmployment';
import { DUI } from '../DUI/components/DUI/DUI';
import { PulledOver } from '../Car/components/PulledOver/PulledOver';
import { AboutRAIN } from '../About/components/AboutRAIN/AboutRAIN';
import { VehicleSearches } from '../Vehicle/components/VehicleSearches/VehicleSearches';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  switch (window.location.href) {
    case 'https://tamely.github.io/RainWebsite/#labor':
      return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <LaborAndEmployment />
        </div>
      );
    case 'https://tamely.github.io/RainWebsite/#vehicle':
      return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <VehicleSearches />
        </div>
      );
    case 'https://tamely.github.io/RainWebsite/#about':
      return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <AboutRAIN />
        </div>
      );
    case 'https://tamely.github.io/RainWebsite/#car':
      return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <PulledOver />
        </div>
      );
    case 'https://tamely.github.io/RainWebsite/#dui':
      return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <DUI />
        </div>
      );
    default:
      return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <MainScreen />
        </div>
      );
  }
});
