import { createTodo } from "@/actions/todoAction";
import { Button } from "@/components/button/Button";
import Form from "@/components/form/Form";
import Input from "@/components/input/Input";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <h1 className="text-4xl font-extrabold">Đăng Dizi</h1>
      <Form action={createTodo}>
        <Input name="input" type="text" placeholder="enter todo..."></Input>
        <Button text="add todo" type="submit"></Button>
      </Form>
      {
        data.map((todo, id) => (
          <div key={id}>{todo.title}</div>
        ))
      }
    </div>
  );
}
