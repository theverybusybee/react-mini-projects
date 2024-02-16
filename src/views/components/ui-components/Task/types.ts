import { TasksStatus } from 'views/components/pages/ToDoList/types';

export interface TaskProps {
  title: string;
  handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCheckbox: () => void;
  checkboxState: TasksStatus;
}
