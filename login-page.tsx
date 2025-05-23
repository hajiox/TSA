import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { signIn } from "next-auth/react"   // ← これを追加

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">TSA（TECHNICAL STAFF AI SYSTEM）</h1>
          <p className="text-xl text-gray-600">業務管理ポータルへようこそ</p>
          <p className="text-gray-500">Googleログインで管理を開始します</p>
        </div>

        <div className="pt-6">
          <Button
            size="lg"
            onClick={() => signIn("google")}  // ← これを追加！
            className="h-12 px-8 bg-black hover:bg-gray-800 text-white w-full max-w-xs mx-auto flex items-center justify-center gap-2"
          >
            <LogIn className="h-5 w-5" />
            Googleでログイン
          </Button>
        </div>
      </div>
    </div>
  )
}
