'use client'

import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm space-y-6 rounded-lg border p-6 shadow">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">TSA 管理画面</h1>
          <p className="text-sm text-muted-foreground">
            Googleアカウントでログインしてください
          </p>
        </div>

        <Button
          className="w-full"
          onClick={() => signIn("google")}
        >
          <LogIn className="mr-2 h-4 w-4" />
          Googleでログイン
        </Button>
      </div>
    </div>
  )
}
