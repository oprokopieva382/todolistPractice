import { DataPropsType } from "./App";

type TasksPropsType = {
  data: DataPropsType;
};

export const Tasks = (props: TasksPropsType) => {
  return (
    <>
      <h2>{props.data.title}</h2>
      <ul>
        {props.data.tasks.map((t) => {
          return (
            <li>
              <span>{t.taskId}</span>
              <span>{t.title}</span>
              <span>{t.isDone}</span>
            </li>
          );
        })}
      </ul>
      <ul>
        {props.data.students.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    </>
  );
};
