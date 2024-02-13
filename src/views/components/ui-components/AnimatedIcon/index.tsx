import styles from './index.module.scss';
import { Player } from '@lordicon/react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedIconProps, TrashIconState } from './types';

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  onClick,
}) => {
  const playerRef = useRef<Player>(null);
  const [trashIconState, setTrashIconState] = useState(TrashIconState.In);

  const handleIconHover = () => {
    setTrashIconState((prevState) =>
      prevState === TrashIconState.In
        ? TrashIconState.Hover
        : TrashIconState.In,
    );
  };

  useEffect(() => {
    if (trashIconState === TrashIconState.Hover) {
      playerRef.current?.playFromBeginning();
    }
  }, [trashIconState]);

  return (
    <button
      className={styles.button}
      onMouseEnter={handleIconHover}
      onMouseLeave={handleIconHover}
      onClick={onClick}
      type="button"
    >
      <Player
        ref={playerRef}
        size={24}
        icon={icon}
        colorize={
          trashIconState === TrashIconState.Hover ? '#AFA3C4' : '#BFB5CF'
        }
        state={trashIconState}
      />
    </button>
  );
};
