"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // 模擬登入請求
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 模擬驗證
    if (!email || !password) {
      setError("請填寫所有欄位");
      setIsLoading(false);
      return;
    }

    // 這裡可以添加實際的登入邏輯
    console.log("[v0] Login attempt:", { email, rememberMe });
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
      {/* Email 欄位 */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          電子郵件
        </Label>
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input
            id="email"
            type="email"
            placeholder="請輸入您的電子郵件"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "pl-10 h-12 bg-card border-border transition-all duration-300",
              "focus:border-primary focus:ring-2 focus:ring-primary/20",
              "placeholder:text-muted-foreground/60"
            )}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Password 欄位 */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-foreground">
          密碼
        </Label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="請輸入您的密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={cn(
              "pl-10 pr-12 h-12 bg-card border-border transition-all duration-300",
              "focus:border-primary focus:ring-2 focus:ring-primary/20",
              "placeholder:text-muted-foreground/60"
            )}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me 和忘記密碼 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            disabled={isLoading}
            className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
          <Label
            htmlFor="remember"
            className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          >
            記住我
          </Label>
        </div>
        <a
          href="#"
          className="text-sm text-primary hover:text-primary/80 transition-colors font-medium underline-offset-4 hover:underline"
        >
          忘記密碼？
        </a>
      </div>

      {/* 錯誤訊息 */}
      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-shake">
          {error}
        </div>
      )}

      {/* 登入按鈕 */}
      <Button
        type="submit"
        disabled={isLoading}
        className={cn(
          "w-full h-12 text-base font-semibold relative overflow-hidden",
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90 active:scale-[0.98]",
          "transition-all duration-300 ease-out",
          "disabled:opacity-70 disabled:cursor-not-allowed"
        )}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            登入中...
          </span>
        ) : (
          <span className="relative z-10">登入</span>
        )}
        {!isLoading && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
        )}
      </Button>

      {/* 分隔線 */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-4 text-muted-foreground">
            或使用以下方式登入
          </span>
        </div>
      </div>

      {/* 社群登入按鈕 */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant="outline"
          disabled={isLoading}
          className="h-12 font-medium hover:bg-secondary/80 transition-all duration-300 hover:border-primary/30"
        >
          <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={isLoading}
          className="h-12 font-medium hover:bg-secondary/80 transition-all duration-300 hover:border-primary/30"
        >
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </Button>
      </div>
    </form>
  );
}
