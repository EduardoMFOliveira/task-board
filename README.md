# 📋 Task Board - Gerenciador de Tarefas

## ✨ Funcionalidades

✅ **CRUD completo** de tarefas  
✅ **Filtros por status** (A fazer, Fazendo, Concluído)  
✅ **Interface intuitiva** e responsiva  
✅ **Confirmação** ao excluir tarefas  
✅ **Notificações visuais** de ações  
✅ **Persistência em banco de dados**  

## 🛠 Tecnologias Utilizadas

### Backend
- **Java 17**
- **Spring Boot 3.2+**
- **Spring Data JPA**
- **H2 Database** (Desenvolvimento)
- **MySQL/PostgreSQL** (Produção)

### Frontend
- **HTML5** semântico
- **CSS3** moderno com Flexbox/Grid
- **JavaScript** puro (ES6+)
- **Font Awesome** para ícones

## 🚀 Como Executar

### Pré-requisitos
- JDK 17+
- Maven 3.9+
- Node.js (opcional para frontend)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/EduardoMFOliveira/task-board.git
cd task-board
```

2. **Configure o banco de dados**  
Edite `src/main/resources/application.properties`:
```properties
# Para desenvolvimento (H2)
spring.datasource.url=jdbc:h2:mem:taskdb
spring.h2.console.enabled=true

# Para produção (MySQL)
# spring.datasource.url=jdbc:mysql://localhost:3306/taskboard
# spring.datasource.username=usuario
# spring.datasource.password=senha
```

3. **Execute a aplicação**
```bash
mvn spring-boot:run
```

4. **Acesse no navegador**
```
http://localhost:8080
```

## 🌐 Endpoints da API

| Método | Endpoint       | Descrição               |
|--------|----------------|-------------------------|
| GET    | /tasks         | Lista todas as tarefas  |
| POST   | /tasks         | Cria nova tarefa        |
| PUT    | /tasks/{id}    | Atualiza uma tarefa     |
| DELETE | /tasks/{id}    | Remove uma tarefa       |

## 🎨 Personalização

### Cores dos status
Edite no arquivo `styles.css`:
```css
.task-card.todo {
    border-left: 5px solid #FFA500; /* Laranja */
}

.task-card.doing {
    border-left: 5px solid #1E90FF; /* Azul */
}

.task-card.done {
    border-left: 5px solid #32CD32; /* Verde */
}
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ por [Eduardo]**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eduardo-mendesfdo/) 
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EduardoMFOliveira)

## 🎉 Agradecimentos

- Equipe da Avanade pelo bootcamp
- Comunidade Spring
- Stack Overflow pelos insights valiosos
