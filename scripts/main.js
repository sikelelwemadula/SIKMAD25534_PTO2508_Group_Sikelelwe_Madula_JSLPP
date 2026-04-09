import { loadTasksFromStorage, saveTasksToStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

// Fetch tasks from API when page loads
async function fetchAndLoadTasksFromAPI() {
  try {
    const response = await fetch('https://jsl-kanban-api.vercel.app/');
    const tasks = await response.json();
    
    // Save API tasks to localStorage
    saveTasksToStorage(tasks);
    
    // Re-initialize the board with the API data
    clearExistingTasks();
    renderTasks(tasks);
  } catch (error) {
    console.error('Error fetching tasks from API:', error);
    // Fall back to localStorage/initialTasks if API fails
    initTaskBoard();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Try to load from API first, fallback to localStorage
  fetchAndLoadTasksFromAPI();
  setupModalCloseHandler();
  setupNewTaskModalHandler();
});