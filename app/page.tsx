"use client"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StatusHeader } from "@/components/status-header";
import { ProjectHeadline } from "@/components/project-headline";
import { ProgressBar } from "@/components/progress-bar";
import { TaskSection } from "@/components/task-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#0F0F0F] text-white font-inter flex flex-col items-center px-4 py-8 md:py-12">
        <div className="w-full max-w-5xl space-y-8 md:space-y-12">
          <StatusHeader />
          <ProjectHeadline />
          <ProgressBar />
          <TaskSection />
          <Footer />
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
