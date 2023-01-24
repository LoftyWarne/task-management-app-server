
# Task Management App Server

This is the repository for the back-end Node.js/Express.js server of a simple task management web app.


## Features / User Instructions

- Handling HTTP requests between client and database for CRUD operations
- Logging to the console every time a user completes a task
- Logging to the console at 9am every day all the overdue tasks

Future Features:
- Authentication
- Use an API Gateway for routing
- Move each route handler and cron jobs into separate Lambda functions
- Create a test environment database and add tests
- More detailed API documentation

## API Reference

#### Retrieve all lists

```http
  GET /api/list
```

#### Create list

```http
  POST /api/list/add
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tbl_ListName`(body)      | `string` | **Required**. Name of list |

#### Rename List

```http
  PUT /api/list/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of list to rename |
| `tbl_ListName`(body)      | `string` | **Required**. New name of list |

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

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tbl_taskName`(body)      | `string` | **Required**. Name of new task |
| `tbl_TaskDescription`(body)      | `string` | **Required**. Description of new task |
| `tbl_TaskDeadline`(body)      | `date` | **Required**. Deadline for new task |
| `tbl_FK_List`(body)      | `integer` | **Required**. Foreign key of list of new task |

#### Update a task with the specified id

```http
  PUT /api/task/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to update |
| `tbl_taskName`(body)      | `string` | **Required**. Name of updated task |
| `tbl_TaskDescription`(body)      | `string` | **Required**. Description of updated task |
| `tbl_TaskDeadline`(body)      | `date` | **Required**. Deadline for updated task |
| `tbl_FK_List`(body)      | `integer` | **Required**. Foreign key of list of updated task |

#### Move a task with the specified id to different list

```http
  PUT /api/task/updateTaskList/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to move  |
| `tbl_FK_List`(body)      | `integer` | **Required**. Foreign key of new list to move task to |

#### Update the completion status of task with specified id

```http
  PUT /api/task/updateTaskList/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to update |
| `tbl_TaskComplete`(body)      | `boolean` | **Required**. New task completion status |

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


## Authors

- Conor Warne [@LoftyWarne](https://github.com/LoftyWarne)


## Support

For support, email conorwarne92@gmail.com


## Related

Here are some related projects that form the other elements of the full-stack:

[Task Management App Client](https://github.com/LoftyWarne/task-management-app-client.git)

[Task Management App Database](https://github.com/LoftyWarne/task-management-app-db.git)

