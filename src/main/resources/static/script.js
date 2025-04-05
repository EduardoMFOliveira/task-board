const API_URL = "/tasks";

// Carrega tarefas quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

// Função para carregar tarefas do servidor
async function loadTasks() {
  try {
    showLoader();
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao carregar tarefas");
    const tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    console.error("Erro:", error);
    showAlert("Falha ao carregar tarefas", "error");
  } finally {
    hideLoader();
  }
}

// Renderiza as tarefas na tela
function renderTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML =
      '<p class="empty-message">Nenhuma tarefa encontrada</p>';
    return;
  }

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = `task-card ${task.status.toLowerCase()}`;
    taskElement.innerHTML = `
            <div class="task-content">
                <h3>${task.title}</h3>
                <p>${task.description || "Sem descrição"}</p>
                <small>${formatStatus(task.status)}</small>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})">
                <i class="fas fa-trash"></i> Excluir
            </button>
        `;
    taskList.appendChild(taskElement);
  });
}

// Adiciona nova tarefa
async function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const description = document.getElementById("taskDescription").value.trim();
  const status = document.getElementById("taskStatus").value;

  if (!title) {
    showAlert("O título é obrigatório", "error");
    return;
  }

  try {
    showLoader();
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        status,
      }),
    });

    if (!response.ok) throw new Error("Erro ao criar tarefa");

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    showAlert("Tarefa criada com sucesso!", "success");
    loadTasks();
  } catch (error) {
    console.error("Erro:", error);
    showAlert("Falha ao criar tarefa", "error");
  } finally {
    hideLoader();
  }
}

// Exclui uma tarefa
async function deleteTask(id) {
  if (!confirm("Tem certeza que deseja excluir esta tarefa?")) return;

  try {
    showLoader();
    const response = await fetch(`/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao excluir tarefa");
    }

    showAlert("Tarefa excluída com sucesso!", "success");
    loadTasks(); // Recarrega a lista após exclusão
  } catch (error) {
    console.error("Erro detalhado:", error);
    showAlert(error.message || "Falha ao excluir tarefa", "error");
  } finally {
    hideLoader();
  }
}

// Formata o status para exibição
function formatStatus(status) {
  const statusMap = {
    TODO: "A fazer",
    DOING: "Em progresso",
    DONE: "Concluído",
  };
  return statusMap[status] || status;
}

// Mostra mensagem de alerta
function showAlert(message, type) {
  const alert = document.createElement("div");
  alert.className = `alert ${type}`;
  alert.textContent = message;
  document.body.appendChild(alert);

  setTimeout(() => {
    alert.style.animation = "slideIn 0.3s reverse forwards";
    setTimeout(() => alert.remove(), 300);
  }, 3000);
}

// Mostra indicador de carregamento
function showLoader() {
  let loader = document.getElementById("loader");
  if (!loader) {
    loader = document.createElement("div");
    loader.id = "loader";
    loader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loader);
  }
}

// Esconde indicador de carregamento
function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.remove();
  }
}
