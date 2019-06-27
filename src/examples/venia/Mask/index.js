import React, {useState} from 'react';
import Mask from '@magento/venia-concept/esm/components/Mask';

import style from './mask.css';

export default () => {
  const [isActive, setIsActive] = useState(false);

  const handleDismiss = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <>
      <h1>Mask Example</h1>
      <p>
        Click on the button to activate the mask. Clicking on the mask overlay
        dismisses it.
      </p>
      <button onClick={handleClick}>Activate Mask</button>
      <Mask classes={style} isActive={isActive} dismiss={handleDismiss} />
    </>
  );
};
