import { getTodos } from "../../../lib/db/queries";
import { getUsers } from "../../../lib/db/userqueries";


export default async function ProfilePage() {
const todos = await getTodos();
const users = await getUsers();
console.log('todos: ', todos)
console.log('users: ', users)
  return <div>
    <ul>
        {todos.map(todo =>(
            <li>
                {todo.text}
            </li>
        ))}
    </ul>
  </div>;
}