export interface TodoApi {
    id: string;
    description: string;
    isComplete: boolean;
    dueDate?: string | null;
}

export interface Todo extends TodoApi {
    loading: boolean;
    status: TodoStatus;
}

export enum TodoStatus {
    COMPLETE = 'complete',
    OVERDUE = 'overdue',
    ONTRACK = 'ontrack'
}
