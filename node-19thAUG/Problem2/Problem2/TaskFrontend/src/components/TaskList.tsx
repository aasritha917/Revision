import type { Tam } from "../types";
import TaskItem from "./TaskItem";

type Props = {
  title: string;
  tasks: Tam[];
  highlightId: string | null;
  setHighlightId: (id: string | null) => void;
  onTransfer: (task: Tam) => void;
};

export default function TaskList({
  title,
  tasks,
  highlightId,
  setHighlightId,
  onTransfer,
}: Props) {
  return (
    <div className="w-1/2 border rounded p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ul className="space-y-2">
        {tasks.map((t) => (
          <TaskItem
            key={t._id}
            task={t}
            isHighlighted={highlightId === t._id}
            onClick={() =>
              setHighlightId(highlightId === t._id ? null : t._id)
            }
            onTransfer={() => onTransfer(t)}
          />
        ))}
      </ul>
    </div>
  );
}
