package com.avanade.task_board.model.dto;

import com.avanade.task_board.model.Task;
import lombok.Data;

@Data
public class TaskResponseDTO {
    private Long id;
    private String title;
    private String status;

    // Construtor que converte Entity para DTO
    public TaskResponseDTO(Task task) {
        this.id = task.getId();
        this.title = task.getTitle();
        this.status = task.getStatus();
    }
}