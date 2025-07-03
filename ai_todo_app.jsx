import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";

// Simulated AI Benefit Function
const analyzeTask = (task) => {
  if (task.toLowerCase().includes("urgent")) {
    return "⚠️ High priority! Complete ASAP.";
  } else if (task.toLowerCase().includes("review")) {
    return "🔎 Requires careful review.";
  } else {
    return "✅ Looks manageable.";
  }
};

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        completed: false,
        aiInsight: analyzeTask(newTask),
      },
    ]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-2xl">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">AI To-Do App</h1>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Enter your task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1"
            />
            <Button onClick={addTask} className="bg-purple-600 hover:bg-purple-700 text-white">
              Add
            </Button>
          </div>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex justify-between items-center p-3 rounded-lg transition-colors duration-300 ${
                  task.completed ? "bg-green-100" : "bg-white"
                }`}
              >
                <div>
                  <p
                    className={`text-lg ${
                      task.completed ? "line-through text-gray-500" : "text-gray-900"
                    }`}
                  >
                    {task.text}
                  </p>
                  <p className="text-sm text-gray-500">{task.aiInsight}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => toggleTask(task.id)}
                    className={
                      task.completed
                        ? "border-green-600 text-green-600 hover:bg-green-50"
                        : "border-gray-400 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    {task.completed ? <CheckCircle size={20} /> : "Done"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => removeTask(task.id)}
                    className="border-red-500 text-red-500 hover:bg-red-50"
                  >
                    <XCircle size={20} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoApp;
