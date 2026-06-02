import Link from "next/link";
import { MoveLeft, AlertCircle } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative space-y-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-violet-500/10 flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-violet-500" />
              </div>
            </div>
            <h1 className="text-9xl font-bold tracking-tighter">
              <span className="text-violet-500">4</span>
              <span className="text-white">0</span>
              <span className="text-violet-500">4</span>
            </h1>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Page Not Found</h2>
              <p className="text-gray-400 max-w-md mx-auto">
                This neural path does not exist. Let me guide you back to known territory.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/">
                <Button className="bg-violet-600 hover:bg-violet-500 transition-colors" size="lg">
                  <MoveLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
