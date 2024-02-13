export enum TasksStatus {
  Active,
  Fulfilled,
}

export interface TasksStateInterface {
  id: string;
  content: string;
  status: TasksStatus;
}
