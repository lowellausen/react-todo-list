import React, { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { ItemForm } from "./components/ItemForm";
import { ItemList } from "./components/TaskList";

export interface Task {
  name: string;
  description: string;
}

export interface FormItem {
  id: string;
  label: string;
  onChange: (value: string) => void;
}

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const titleItem = {id: "title", label: "Title", onChange: (value: string) => setName(value)};
  const descriptionItem = {id: "description", label: "Description", onChange: (value: string) => setDescription(value)};

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { name, description }]);
  }

  return (
    <div>
      <Header/>
      <ItemForm 
        onSubmit = {onSubmit}
        items = { [titleItem, descriptionItem]}
        buttonLabel= "Add"
      />  
      <ItemList
        tasks={tasks}
      />
    </div>
  );
}

export default App;
