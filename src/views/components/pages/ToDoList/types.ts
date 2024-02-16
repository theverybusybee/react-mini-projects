export enum TasksStatus {
  Active,
  Editable,
  Fulfilled,
}

export interface TasksStateInterface {
  id: string;
  content: string;
  status: TasksStatus;
}
