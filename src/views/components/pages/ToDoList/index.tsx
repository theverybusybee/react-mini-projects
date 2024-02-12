import styles from './index.module.scss';
import { TransparentOverlay } from 'views/components/sections/TransparentOverlay';
import { Input } from '../../ui-components/Input';
import { TasksSubmitInput } from 'views/components/ui-components/TasksSubmitInput';
import { useState } from 'react';

export const ToDoList: React.FC = () => {
  const [inputState, setInputState] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputState(e.target.value);
  }

  return (
    <main>
      <TransparentOverlay>
        <TasksSubmitInput value={inputState} onChange={handleInputChange} />
        <ul className={styles.taskList}>
          <li>
            <Input title={'Added task'} />
          </li>
          <li>
            <Input title={'Added task'} />
          </li>
          <li>
            <Input title={'Added task'} />
          </li>
          <li>
            <Input title={'Added task'} />
          </li>
        </ul>
      </TransparentOverlay>
    </main>
  );
};
