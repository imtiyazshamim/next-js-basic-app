import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Shamim Imtiyaz</h1>
        <Link href="/about" className="text-blue-600">About</Link>
        <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
        <Link href="/dashboard/setting" className="text-blue-600">Setting</Link>
    </main>
  );
}
