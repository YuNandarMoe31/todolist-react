import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="w-full h-screen  bg-zinc-800 flex flex-col gap-y-9 justify-center items-center">
        <h1 className="text-4xl text-center text-gray-300 font-bold">To Do List</h1>
        <Form />
        <List />
      </div>
    </>
  );
}

export default App;
