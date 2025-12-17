
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function Header({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        <Rocket className="w-6 h-6 text-blue-600" />
        <span>{title}</span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/features" className="text-sm font-medium hover:text-blue-600">Features</Link>
        <Link href="/pricing" className="text-sm font-medium hover:text-blue-600">Pricing</Link>
        <Link href="/about" className="text-sm font-medium hover:text-blue-600">About</Link>
        <Link href="/login" className="px-4 py-2 bg-black text-white rounded-md text-sm font-bold hover:bg-gray-800 transition">Get Started</Link>
      </nav>
    </header>
  );
}
