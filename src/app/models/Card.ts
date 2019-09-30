import  User from './User';

export default interface Card {
    id: number,
    name: string,
    description: string,
    dueDate?: Date | string,
    assignee?: User,
    isDone: boolean
}
