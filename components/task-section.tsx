"use client"

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUpcomingTasks, getCompletedTasks } from "@/lib/project-status";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

type Task = {
  id: string;
  nome: string;
  status: "to do" | "in progress" | "dependente" | "complete";
  completedDate?: string;
  created_at?: string;
  previsao?: string;
};

export function TaskSection() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed" | "schedule">("upcoming");
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
        <button
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "schedule" ? "text-white border-b-2 border-[#00FF87]" : "text-gray-400 hover:text-white"
          )}
          onClick={() => setActiveTab("schedule")}
        >
          Cronograma
        </button>
      </div>

      {activeTab === "schedule" ? (
        <div className="space-y-8">
          <div className="bg-[#151515] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-8 text-white">CRONOGRAMA - BRING</h2>
            
            <div className="space-y-12">
              {/* SPRINT 1 */}
              <div>
                <h3 className="text-xl font-medium text-[#00FF87] mb-8">SPRINT 1</h3>

                {/* Step 1 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#00FF87]/20 text-[#00FF87] px-3 py-1 rounded-full text-sm font-medium">
                      Step 1
                    </div>
                    <div className="text-gray-300">30 dias úteis</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5 flex items-center justify-center text-[#00FF87]">
                        ✓
                      </div>
                      <span className="text-gray-300">
                        Briefing Bot Mirela: Extração de dados sobre o Bot de Mirela
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5 flex items-center justify-center text-[#00FF87]">
                        ✓
                      </div>
                      <span className="text-gray-300">
                        Criação e testes da Identidade do bot de Mirela (sem funções)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5 flex items-center justify-center text-[#00FF87]">
                        ✓
                      </div>
                      <span className="text-gray-300">
                        Integração e testes de identidade + funções
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5 flex items-center justify-center">
                        🟠
                      </div>
                      <span className="text-gray-300">
                        TASK BÔNUS: Plataforma para que Mirela seja capaz de visualizar payments
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#222] p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                    <p className="text-gray-300">Entrega do Bot Mirela usando API não Oficial</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#00FF87]/20 text-[#00FF87] px-3 py-1 rounded-full text-sm font-medium">
                      Step 2
                    </div>
                    <div className="text-gray-300">20 dias úteis</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">UI/UX com protótipo do sistema web completo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">
                        [Visão da Agência] Desenvolvimento e integração da plataforma
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">Integração de funcionalidades para follow ups</span>
                    </div>
                  </div>

                  <div className="bg-[#222] p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                    <p className="text-gray-300">
                      Plataforma funcional para VISÃO AGÊNCIA e VISÃO CLIENTE
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#00FF87]/20 text-[#00FF87] px-3 py-1 rounded-full text-sm font-medium">
                      Step 3
                    </div>
                    <div className="text-gray-300">30 dias úteis</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">
                        [API Oficial] Criação da interface do clone do WhatsApp
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">
                        Integração do bot com a API Oficial
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#222] p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                    <p className="text-gray-300">
                      Plataforma funcional com interface de chat para API Oficial
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#00FF87]/20 text-[#00FF87] px-3 py-1 rounded-full text-sm font-medium">
                      Step 4
                    </div>
                    <div className="text-gray-300">10 dias úteis</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">Integração do Bring Bot com a plataforma</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">Integração do Bring Bot Briefing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">Adição de recurso Webhooks na plataforma</span>
                    </div>
                  </div>

                  <div className="bg-[#222] p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">O que esse Step entrega?</h4>
                    <p className="text-gray-300">
                      Funcionalidades Bring Bot, Bring Bot Briefing e Webhooks
                    </p>
                  </div>
                </div>
              </div>

              {/* SPRINT 2 */}
              <div>
                <h3 className="text-xl font-medium text-[#00FF87] mb-8">SPRINT 2</h3>

                {/* Step 5 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#00FF87]/20 text-[#00FF87] px-3 py-1 rounded-full text-sm font-medium">
                      Step 5
                    </div>
                    <div className="text-gray-300">20 dias úteis</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 border border-gray-500 rounded mt-0.5"></div>
                      <span className="text-gray-300">Testes e Correções Finais</span>
                    </div>
                  </div>

                  <div className="bg-[#222] p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">O que esse step entrega?</h4>
                    <p className="text-gray-300">
                      Todos os testes realizados, bugs resolvidos e documentação
                    </p>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="bg-[#00FF87]/10 p-6 rounded-lg border border-[#00FF87]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-[#00FF87]" />
                  <h3 className="text-lg font-medium text-white">Total: 110 dias úteis</h3>
                </div>
                <p className="text-gray-300">
                  90 dias úteis na fase de desenvolvimento e 20 dias úteis na fase de teste
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
              {task.previsao && <p className="text-xs text-gray-400 mt-2">Previsão: {task.previsao}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
