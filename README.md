
# Task Management App Server

This is the repository for the back-end Node.js/Express.js server of a simple task management web app.


## Features / User Instructions

- Handling HTTP requests between client and database for CRUD operations
- Logging to the console every time a user completes a task
- Logging to the console at 9am every day all the overdue tasks

## API Reference

#### Retrieve all lists

```http
  GET /api/list
```

#### Create list

```http
  POST /api/list/add
```

#### Rename List

```http
  PUT /api/list/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of list to rename |

#### Rename List

```http
  DELETE /api/list/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of list to delete |


#### Retrieve all tasks

```http
  GET /api/task
```

#### Retrieve all incomplete tasks

```http
  GET /api/task/incomplete
```

#### Retrieve all tasks for a specific list

```http
  GET /api/task/incomplete/:id"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of list to retrieve tasks from |

#### Retrieve all incomplete tasks for a specific list

```http
  GET /api/task/incomplete/:id"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of list to retrieve tasks from |

#### Retrieve all overdue tasks

```http
  GET /api/task/overdue"
```

#### Create task

```http
  POST /api/task/add
```

#### Update a task with the specified id

```http
  PUT /api/task/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to update |

#### Move a task with the specified id to different list

```http
  PUT /api/task/updateTaskList/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to move 

#### Update the completion status of task with specified id

```http
  PUT /api/task/updateTaskList/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to update 

#### Delete task with specified id

```http
  DELETE /api/task/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to delete 

#### Delete all tasks in list with specified id

```http
  DELETE /api/task/deleteall/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of list to delete all tasks from 





## Run Locally

Clone the project:

```bash
  git clone https://github.com/LoftyWarne/task-management-app-server.git
```

Go to the project directory:

```bash
  cd task-management-app-server
```

Install dependencies:

```bash
  npm install
```

Start the server:

```bash
  node server.js
```


## Dependencies

See package.json
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`DB_HOST` - address of the database endpoint\
`DB_PORT`- port no of the database\
`DB_USER` - database username\
`DB_PASSWORD` - database password\
`DB_NAME` - database name\
`DB_DRIVER` - database type\
`API_ADDRESS` - address of API used for retrieving overdue tasks
## Running Tests

To run tests, use the following command:

```bash
  npm run test
```


## Authors

- Conor Warne [@LoftyWarne](https://github.com/LoftyWarne)


## Support

For support, email conorwarne92@gmail.com


## Related

Here are some related projects that form the other elements of the full-stack:

[Task Management App Client](https://github.com/LoftyWarne/task-management-app-client.git)

[Task Management App Database](https://github.com/LoftyWarne/task-management-app-db.git)

