import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TransferButtons from "./components/TransferButtons";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tasks, loading, createTask, toggleTaskStatus } = useTasks();
  const [highlightId, setHighlightId] = useState<string | null>(null);

  if (loading) return <div className="p-4">Loading...</div>;

  const pending = tasks.filter((t) => t.status === "pending");
  const completed = tasks.filter((t) => t.status === "completed");
  const highlightedTask = tasks.find((t) => t._id === highlightId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskInput onAdd={createTask} />
      <div className="flex gap-4">
        <TaskList
          title="Pending"
          tasks={pending}
          highlightId={highlightId}
          setHighlightId={setHighlightId}
          onTransfer={toggleTaskStatus}
        />

        <TransferButtons
          onLeft={() => {
            if (highlightedTask && highlightedTask.status === "completed") {
              toggleTaskStatus(highlightedTask);
            }
          }}
          onRight={() => {
            if (highlightedTask && highlightedTask.status === "pending") {
              toggleTaskStatus(highlightedTask);
            }
          }}
        />

        <TaskList
          title="Completed"
          tasks={completed}
          highlightId={highlightId}
          setHighlightId={setHighlightId}
          onTransfer={toggleTaskStatus}
        />
      </div>
    </div>
  );
}
