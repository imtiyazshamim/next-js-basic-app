"use client"
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const router = useRouter();
  const back = () =>{
    router.push('/');
  }
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <button onClick={back} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
          <h1>Dashboard</h1>
      </main>
    );
  }
  