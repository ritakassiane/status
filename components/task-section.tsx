"use client"

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUpcomingTasks, getCompletedTasks } from "@/lib/project-status";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  nome: string;
  status: "to do" | "in progress" | "dependente" | "complete";
  completedDate?: string;
  created_at?: string;
};

export function TaskSection() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">("upcoming");
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "to do":
        return "bg-gray-700 text-gray-300";
      case "in progress":
        return "bg-blue-900/30 text-blue-300";
      case "dependente":
        return "bg-amber-900/30 text-amber-300";
      case "complete":
        return "bg-green-900/30 text-green-300";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  useEffect(() => {
    async function fetchTasks() {
      try {
        setLoading(true);
        const upcoming = await getUpcomingTasks();
        const completed = await getCompletedTasks();
        setUpcomingTasks(upcoming as Task[]);
        setCompletedTasks(completed as Task[]);
        toast.success("Tarefas carregadas com sucesso");
      } catch (error: any) {
        toast.error(`Erro ao carregar tarefas: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  if (loading) {
    return <div className="w-full py-4 text-center">Carregando tarefas...</div>;
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex border-b border-gray-800">
        <button
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "upcoming" ? "text-white border-b-2 border-[#00FF87]" : "text-gray-400 hover:text-white"
          )}
          onClick={() => setActiveTab("upcoming")}
        >
          Próximas tarefas
        </button>
        <button
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "completed" ? "text-white border-b-2 border-[#00FF87]" : "text-gray-400 hover:text-white"
          )}
          onClick={() => setActiveTab("completed")}
        >
          Tarefas concluídas
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {(activeTab === "upcoming" ? upcomingTasks : completedTasks).map((task) => (
          <div
            key={task.id}
            className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg transition-all hover:bg-gray-900/70"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{task.nome}</h3>
              <span className={cn("text-xs px-2 py-1 rounded-full", getStatusColor(task.status))}>
                {task.status}
              </span>
            </div>
            {task.completedDate && <p className="text-xs text-gray-400 mt-2">Concluído em: {task.completedDate}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
