import { createTodo } from "@/actions/todoAction";
import { Button } from "@/components/button/Button";
import Form from "@/components/form/Form";
import Input from "@/components/input/Input";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold">Đăng Dizi</h1>
      <Form action={createTodo}>
        <Input name="input" type="text" placeholder="enter todo..."></Input>
        <Button text="add todo" type="submit"></Button>
      </Form>
    </div>

  );
}
