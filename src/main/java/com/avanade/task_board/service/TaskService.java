package com.avanade.task_board.service;

import com.avanade.task_board.model.Task;
import com.avanade.task_board.model.dto.TaskResponseDTO;
import com.avanade.task_board.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public List<TaskResponseDTO> findAll() {
        return repository.findAll().stream()
                .map(TaskResponseDTO::new)
                .toList();
    }

    public Task create(Task task) {
        return repository.save(task);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Tarefa não encontrada");
        }
        repository.deleteById(id);
    }
}