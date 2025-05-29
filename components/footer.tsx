"use client"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col justify-center items-center gap-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} Manya Jain. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 border-2 rounded-full px-3 py-1">
            <div className="relative flex-shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              All systems online
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}