import styles from './index.module.scss';
import { TransparentOverlay } from 'views/components/sections/TransparentOverlay';
import { Input } from '../../ui-components/Input';
import { TasksSubmitInput } from 'views/components/ui-components/TasksSubmitInput';
import { useState } from 'react';
import { TasksStateInterface, TasksStatus } from './types';
import { generateId } from 'data/helpers';
import { TasksChangeInput } from 'views/components/ui-components/TasksChangeInput';

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

  function editTask(taskId: string) {
    setTasksState(
      tasksState.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            status: TasksStatus.Editable,
          };
        }
        return task;
      }),
    );
  }

  function fulfillTask(taskId: string) {
    setTasksState(
      tasksState.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status:
              task.status === TasksStatus.Fulfilled
                ? TasksStatus.Active
                : TasksStatus.Fulfilled,
          };
        }
        return task;
      }),
    );
  }

  return (
    <main>
      <h1 className={styles.title}>Tasks board</h1>
      <TransparentOverlay>
        <TasksSubmitInput
          value={inputState}
          onChange={handleInputChange}
          onSubmit={createTask}
        />

        {!!tasksState.length && (
          <ul className={styles.taskList}>
            {tasksState
              .filter(
                (task) =>
                  task.status === TasksStatus.Active ||
                  task.status === TasksStatus.Editable,
              )
              .map((task) =>
                task.status === TasksStatus.Active ? (
                  <li key={task.id}>
                    <Input
                      title={task.content}
                      handleEdit={() => editTask(task.id)}
                      handleDelete={() => deleteTask(task.id)}
                      handleCheckbox={() => fulfillTask(task.id)}
                      checkboxState={task.status}
                    />
                  </li>
                ) : (
                  <li key={task.id}>
                    {' '}
                    <TasksChangeInput
                      value={inputState}
                      onChange={handleInputChange}
                      onSave={() => {}}
                      onSkip={() => {}}
                    />
                  </li>
                ),
              )}
            {tasksState
              .filter((task) => task.status === TasksStatus.Fulfilled)
              .map(
                (task) =>
                  task && (
                    <li key={task.id}>
                      <Input
                        title={task.content}
                        handleEdit={() => editTask(task.id)}
                        handleDelete={() => deleteTask(task.id)}
                        handleCheckbox={() => fulfillTask(task.id)}
                        checkboxState={task.status}
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
