import { useEffect, useRef } from 'react';
import { Checkbox } from 'views/components/ui-components/Checkbox';
import styles from './index.module.scss';
import { Player } from '@lordicon/react';
import Trash from 'assets/images/icons/animated/trash.json';
import Settings from 'assets/images/icons/animated/settings.json';

interface InputProps {
  title: string;
  // onClick: () => void;
}

export const Input: React.FC<InputProps> = ({ title }) => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <article className={styles.task}>
      <Checkbox setIsChecked={(e) => console.log(e)} isChecked={true} />
      <p className={styles.taskTitle}>{title}</p>
      <Player ref={playerRef} size={24} icon={Trash} colorize="#BFB5CF" />
      <Player ref={playerRef} size={24} icon={Settings} colorize="#BFB5CF" />
    </article>
  );
};
