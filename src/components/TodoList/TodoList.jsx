import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
        key={todo.id}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>

        {todo.user && <UserInfo user={todo.user} />}
      </article>
    ))}
  </section>
);
