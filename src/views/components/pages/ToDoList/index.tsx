import styles from './index.module.scss';
import { TransparentOverlay } from 'views/components/sections/TransparentOverlay';
import { Input } from '../../ui-components/Input';
import { TasksSubmitInput } from 'views/components/ui-components/TasksSubmitInput';
import { useState } from 'react';
import { TasksStateInterface, TasksStatus } from './types';
import { generateId } from 'data/helpers';

export const ToDoList: React.FC = () => {
  const [inputState, setInputState] = useState('');
  const [tasksState, setTasksState] = useState<TasksStateInterface[] | []>([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputState(e.target.value);
  }

  function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputState) return;
    setTasksState([
      {
        id: generateId(),
        content: inputState,
        status: TasksStatus.Active,
      },
      ...tasksState,
    ]);
    setInputState('');
  }

  function deleteTask(taskId: string) {
    setTasksState(tasksState.filter((task) => task.id !== taskId));
  }

  return (
    <main>
      <TransparentOverlay>
        <TasksSubmitInput
          value={inputState}
          onChange={handleInputChange}
          onSubmit={createTask}
        />
        {!!tasksState.length && (
          <ul className={styles.taskList}>
            {tasksState.map(
              (task) =>
                task && (
                  <li key={task.id}>
                    <Input
                      title={task.content}
                      handleDelete={() => deleteTask(task.id)}
                    />
                  </li>
                ),
            )}
          </ul>
        )}
      </TransparentOverlay>
    </main>
  );
};
