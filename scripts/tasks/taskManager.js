import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}

export function updateTask(taskId) {
  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-desc").value;
  const status = document.getElementById("task-status").value;
  const modal = document.getElementById("task-modal");

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.map(task =>
    task.id === taskId
      ? { ...task, title, description, status }
      : task
  );

  saveTasksToStorage(updatedTasks);
  clearExistingTasks();
  renderTasks(updatedTasks);
  modal.close();
}

export function deleteTask(taskId) {
  const modal = document.getElementById("task-modal");

  const tasks = loadTasksFromStorage();
  const updatedTasks = tasks.filter(task => task.id !== taskId);

  saveTasksToStorage(updatedTasks);
  clearExistingTasks();
  renderTasks(updatedTasks);
  modal.close();
}
