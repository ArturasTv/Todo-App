import { create } from "zustand";
import type { Task, Tasks } from "../types/tasks";

const INITIAL_TASKS: Task[] = [
  {
    id: 2,
    text: "Suplanuoti problemos sprendimą",
    time: "2021-08-20T12:00",
    isChecked: false,
    isCompleted: false,
  },
  {
    id: 3,
    text: "Pradėti koduoti programos kodą",
    time: "2021-08-30T12:00",
    isChecked: false,
    isCompleted: false,
  },
  {
    id: 4,
    text: "Pradėti programos testavimą",
    time: "2021-09-20T12:00",
    isChecked: false,
    isCompleted: false,
  },
  {
    id: 5,
    text: "Programos dokumentavimas",
    time: "2021-09-30T12:00",
    isChecked: false,
    isCompleted: false,
  },
  {
    id: 1,
    text: "Apsibrėžti problemą ",
    time: "2021-08-15T12:00",
    isChecked: false,
    isCompleted: false,
  },
].sort((a, b) => (a.time > b.time ? 1 : -1));

interface TodoListState {
  tasks: Tasks;
  addTask: (task: Task) => void;
  deleteTask: (id: Task["id"]) => void;
  checkTask: (id: Task["id"]) => void;
  completeTasks: () => void;
}

const useTodoListStore = create<TodoListState>()((set) => ({
  tasks: INITIAL_TASKS,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: [...state.tasks.filter((task) => task.id !== id)],
    })),
  checkTask: (id) =>
    set((state) => ({
      tasks: [
        ...state.tasks.map((task) => {
          if (id === task.id) {
            task.isChecked = !task.isChecked;
          }

          return task;
        }),
      ],
    })),
  completeTasks: () =>
    set((state) => ({
      tasks: [
        ...state.tasks.map((task) => {
          if (task.isChecked) {
            task.isChecked = false;
            task.isCompleted = true;
          }

          return task;
        }),
      ],
    })),
}));

export default useTodoListStore;
