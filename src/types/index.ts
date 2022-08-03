export enum COLUMN_TYPE {
  BACKLOG = "backlog",
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
  CLOSED = "closed",
}

export type Task = {
  name: string;
  desc: string;
  assign: string;
  type: COLUMN_TYPE;
}