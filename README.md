# Todo App
Implement a simple todo app that loads a list of todo items from a remote server.
Each todo item has a status indicating if it has been completed or not as well as an optional due date.
When a todo item is marked complete, the server should be notified about the updated status.
If a todo is past its due date but not yet completed it should be clearly indicated to the user that it is overdue.

## To Build
Clone repository and run `npm install` then `ng serve --open`.
Your default browser should navigate to `http://localhost:4200/`.

##Notes
1. Does not include tests
2. App was simple and straightforward I decided against using ngRx Store Module
3. Mocks were used for personal testing, they are not referenced in running the application
