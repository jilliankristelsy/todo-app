export interface Todo {
    id: string;
    description: string;
    isComplete: boolean;
    dueDate?: string | null;
}
