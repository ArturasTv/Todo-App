export type Task = {
  id: number | string;
  text: string;
  time: string;
  isChecked: boolean;
  isCompleted: boolean;
};

export type Tasks = Task[];
