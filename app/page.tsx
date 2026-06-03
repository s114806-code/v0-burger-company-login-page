"use client";

import Image from "next/image";
import { LoginForm } from "@/components/login/login-form";
import { BurgerLogo } from "@/components/login/burger-logo";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* 左側背景區域 */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary" />
        <Image
          src="/images/burger-hero.png"
          alt="美味漢堡"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* 左側品牌訊息 */}
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              品味經典，<br />
              溫暖每一刻
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              歡迎回到美味漢堡會員專區，登入後即可享受專屬優惠與貼心服務
            </p>
          </div>
        </div>
      </div>

      {/* 右側登入表單區域 */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24">
        <div className="w-full max-w-md mx-auto">
          {/* Logo 區域 */}
          <div className="flex flex-col items-center mb-10 animate-fade-in">
            <BurgerLogo />
            <h1 className="mt-6 text-3xl font-bold text-foreground tracking-tight">
              美味漢堡
            </h1>
            <p className="mt-2 text-muted-foreground">
              會員登入
            </p>
          </div>

          {/* 登入表單 */}
          <LoginForm />

          {/* 底部資訊 */}
          <div className="mt-10 text-center text-sm text-muted-foreground animate-fade-in">
            <p>
              還沒有帳號？{" "}
              <a
                href="#"
                className="font-medium text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                立即註冊
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
