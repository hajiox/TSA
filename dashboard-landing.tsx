import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, BarChart3, TrendingUp, LogIn } from "lucide-react"

export default function DashboardLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  AI業務支援ポータル
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  シフト・Web売上・卸売上を、Googleログインから一元管理
                </p>
              </div>
              <div className="space-x-4 mt-8">
                <Button size="lg" className="h-12 px-8 gap-2">
                  <LogIn className="h-5 w-5" />
                  Googleでログイン
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">シフト管理</CardTitle>
                  <CardDescription>スタッフのシフトを簡単に作成・管理・共有できます</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AIによるシフト最適化、自動シフト生成、スタッフへの通知機能を搭載しています。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Web売上管理</CardTitle>
                  <CardDescription>オンラインショップの売上データを一元管理</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    各ECサイトの売上を自動集計し、分析レポートを生成します。トレンド分析や予測機能も利用可能です。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">卸売上管理</CardTitle>
                  <CardDescription>取引先ごとの売上データを追跡・管理</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    取引先別の売上推移、支払い状況、在庫状況などを一目で確認できます。請求書の自動生成も可能です。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2025 Aizu Brand Hall</p>
        <p className="text-xs text-muted-foreground sm:ml-auto">Powered by Vercel + OpenAI</p>
      </footer>
    </div>
  )
}
