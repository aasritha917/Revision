import React from "react";
import type { Tam } from "../types";

interface TaskItemProps {
  task: Tam;
  onDelete?: (id: string) => void; // optional, to prevent crash
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <div className="flex items-center justify-between border rounded px-3 py-2 bg-white shadow-sm">
      <span
        className={`${
          task.status === "completed" ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>
      {onDelete && (
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default TaskItem;
