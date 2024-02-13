import { TasksStatus } from 'views/components/pages/ToDoList/types';

export interface InputProps {
  title: string;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCheckbox: () => void;
  checkboxState: TasksStatus;
}
