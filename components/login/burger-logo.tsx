"use client";

export function BurgerLogo() {
  return (
    <div className="relative w-20 h-20 group">
      {/* 外圈光暈效果 */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500" />
      
      {/* Logo 主體 */}
      <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        {/* 漢堡圖示 */}
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* 上層麵包 */}
          <path
            d="M12 24 C12 14, 52 14, 52 24"
            className="animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <line x1="12" y1="24" x2="52" y2="24" />
          
          {/* 芝麻 */}
          <circle cx="22" cy="19" r="1.5" fill="currentColor" />
          <circle cx="32" cy="17" r="1.5" fill="currentColor" />
          <circle cx="42" cy="19" r="1.5" fill="currentColor" />
          
          {/* 生菜 */}
          <path d="M10 30 Q17 33, 24 30 Q31 27, 38 30 Q45 33, 54 30" />
          
          {/* 肉排 */}
          <rect x="11" y="34" width="42" height="6" rx="2" fill="currentColor" opacity="0.9" />
          
          {/* 起司 */}
          <path d="M10 44 L14 48 L24 44 L34 48 L44 44 L54 48 L54 44 L10 44" fill="currentColor" opacity="0.7" />
          
          {/* 下層麵包 */}
          <path d="M12 48 L12 52 Q32 58, 52 52 L52 48" />
        </svg>
      </div>
      
      {/* 裝飾光點 */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping opacity-75" style={{ animationDuration: "2s" }} />
    </div>
  );
}
