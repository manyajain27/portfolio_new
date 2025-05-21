import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="container py-24 md:py-32 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Sharing my thoughts, experiences, and insights on software development and design.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="p-8 border rounded-xl bg-card">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-muted-foreground">
              I'm currently working on some interesting articles. Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
