export interface TasksChangeInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSkip: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
