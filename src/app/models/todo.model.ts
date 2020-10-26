export interface TodoApi {
    id: string;
    description: string;
    isComplete: boolean;
    dueDate?: string | null;
}

export interface Todo extends TodoApi {
    status: TodoStatus;
}

export enum TodoStatus {
    COMPLETE = 'complete',
    OVERDUE = 'overdue',
    ONTRACK = 'ontrack'
}
