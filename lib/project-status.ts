import { supabase } from "./subabase";
import { mockPhases, mockCompletedTasks, mockUpcomingTasks } from "./mock-data";

// Função para buscar as fases (ordenadas por data de criação)
export async function getFases() {
  // const { data, error } = await supabase
  //   .from("fases")
  //   .select("*")
  //   .order("created_at", { ascending: true });

  // if (error) throw new Error(error.message);
  // return data;
  
  return mockPhases;
}

// Função para buscar as tarefas pendentes
export async function getUpcomingTasks() {
  // const { data, error } = await supabase
  //   .from("tarefas_fase")
  //   .select("*")
  //   .not("status", "eq", "complete")
  //   .order("created_at", { ascending: true });

  // if (error) throw new Error(error.message);
  // return data;
  
  return mockUpcomingTasks;
}

// Função para buscar as tarefas concluídas
export async function getCompletedTasks() {
  // const { data, error } = await supabase
  //   .from("tarefas_fase")
  //   .select("*")
  //   .eq("status", "complete")
  //   .order("created_at", { ascending: true });

  // if (error) throw new Error(error.message);
  // return data;
  
  return mockCompletedTasks;
}