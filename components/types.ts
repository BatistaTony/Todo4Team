export interface ITodo {
  task: string;
  isDone: boolean;
  member: string;
  date: Date;
}

export interface IContextTodo {
  todos: Array<ITodo>;
  setToDo: Function | any;
  setMember: Function | any;
  members: Array<IMember>;
}

export interface IMember {
  name: string;
}
