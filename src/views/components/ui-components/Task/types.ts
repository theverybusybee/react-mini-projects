import { TasksStatus } from 'views/components/pages/ToDoList/types';

export interface TaskProps {
  title: string;
  status: TasksStatus;
  handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCheckbox: () => void;
  checkboxState: TasksStatus;
}
