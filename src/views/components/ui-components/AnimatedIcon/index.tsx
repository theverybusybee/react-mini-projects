import styles from './index.module.scss';
import { Player } from '@lordicon/react';
import { JSONObject } from 'data/types';
import { useEffect, useRef, useState } from 'react';

interface AnimatedIconProps {
  icon: JSONObject;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon }) => {
  const playerRef = useRef<Player>(null);
  const [trashIconState, setTrashIconState] = useState('in-trash-empty');

  const handleIconHover = () => {
    setTrashIconState((prevState) => {
      return prevState === 'in-trash-empty'
        ? 'hover-trash-empty'
        : 'in-trash-empty';
    });
  };

  useEffect(() => {
    if (trashIconState === 'hover-trash-empty') {
      playerRef.current?.playFromBeginning();
    }
  }, [trashIconState]);

  return (
    <div
      className={styles.container}
      onMouseEnter={handleIconHover}
      onMouseLeave={handleIconHover}
    >
      <Player
        ref={playerRef}
        size={24}
        icon={icon}
        colorize={
          trashIconState === 'hover-trash-empty' ? '#AFA3C4' : '#BFB5CF'
        }
        state={trashIconState}
        onReady={handleIconHover}
      />
    </div>
  );
};
