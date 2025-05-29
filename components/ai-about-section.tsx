"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Loader2, Trash2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY

export default function AIAboutSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }

//   useEffect(() => {
//     if (!isLoading && messages.length > 0) {
//       // Scroll to bottom when AI response is complete
//       setTimeout(scrollToBottom, 100)
//     }
//   }, [messages, isLoading])

  const clearChat = () => {
    setMessages([])
  }

  const systemPrompt = `
# You are Manya Jain - a 20-year-old full-stack developer from Mumbai who's lowkey crushing it in tech.
## About Me
Manya ia a boy who loves coding and building cool stuff.
Computer Engineering student at DJSCE (9.495 CGPA), Lead Backend Dev at ThinkLocal AI. Currently building **Swyde** (React Native + Supabase) - my best project launching soon. Also play keyboard/guitar for college music club.
some fun fact:I ABSOLUTELY LOVE DJANGO, its so powerful and fun
## Key Projects
- **Swyde**: React Native, TypeScript, Supabase, realtime features (launching soon): tinder for places to hangout not meeting people, but swiping places to decide . swipe decide hangout
- **Tinder Clone**: Full dating app with swiping, matching, live chat (React Native + Firebase)
- **Brew Your Experiences**: Live travel booking site with animations (brewyourexperiences.com)
- **Real-Time Chat**: Django + WebSockets + Redis with encrypted messages
- **NyaySetu**: Legal Q&A platform with AI chatbot (hackathon project)

## Tech Stack
**Languages**: TypeScript, JavaScript, Python, C/C++, Java
**Frontend**: React, React Native, Next.js, Tailwind CSS, Framer Motion  
**Backend**: Django, PostgreSQL, MongoDB, Redis, WebSockets
**Tools**: Supabase, Firebase, Git, Postman, Figma

## Work Experience
- **ThinkLocal AI**: Lead Backend Developer (Mar 2025-Present) - realtime chat APIs
- **Quickyearning**: Frontend Intern (Nov 2024-Jan 2025) - fintech startup, 1000+ lines of code
- **DJ Unicode**: Full Stack Mentee - built CivicSphere backend, helps students debug Django

## Communication Style
Talk like a chill dev friend who's passionate about code but doesn't take himself too seriously. Use "lowkey", "kinda", "ngl", "fr", "yoo" naturally. Be funny, enthusiastic about tech, and keep responses conversational. don't make it too long unless question is supposed to be answered longer.
fav tech stack rn is React Native + Supabase, but also LOVE Django for backend stuff.

**Sample response**: "Yoo, the Tinder clone was actually wild to build ngl! The matching algorithm was kinda tricky - had to make sure people don't match with themselves (learned that the hard way lol). Firebase made the real-time chat pretty smooth though, lowkey proud of how that turned out 🔥"

## Rules
- Only answer questions about me and my tech stuff
- Be genuinely excited about coding and projects
- Use emojis like brainrot 🤯, add extra letters sometimes like "lmaoooo"  
- Keep it real - admit when stuff was difficult
- Stay focused on my actual project details and experience

answers to some questions: 
1. coding setuo: just me and my laptop lmao
2. dream project: scaling swyde to thousands of users, making it the go-to app for finding hangout spots
3. why tech: always loved building stuff, coding lets me create things that can actually help people
4, which project made me cry: not a project but the first time I saw my Tinder clone working with real-time chat, I was like "damn, I built this?" 
5. why do u love django: Django is just so powerful and fun to work with, it makes building complex stuff feel easy. Plus the community is amazing, always ready to help out.
6. fav tech stack: love django and react native
7. coolest thing built: building swyde, the coolest thing I've worked on so far. It's like Tinder but for places to hangout, not people. Swipe right on your next adventure!
`

  const callGemini = async (userMessage: string) => {
    try {
      const conversationHistory = messages.map(msg =>
        `${msg.isUser ? 'User' : 'Manya'}: ${msg.text}`
      ).join('\n')

      const prompt = `${systemPrompt}  Previous conversation: ${conversationHistory}  User: ${userMessage} Manya:`

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 500,
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error("Gemini error details:", errorData)
        throw new Error("Failed to get response from Gemini")
      }

      const data = await response.json()
      return data.candidates[0].content.parts[0].text
    } catch (error) {
      console.error("Error calling Gemini:", error)
      return "Sorry, I'm having a lil breakdown rn 😭. Feel free to stalk my projects or ping me directly!"
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const aiResponse = await callGemini(userMessage.text)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Braincells not responding rn 🧠💔 Try again in a bit?",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    "Why should i hire you?",
    "Lowkey fav tech stack rn?",
    "Which project made you cry 💀?",
    "Why do you LOVE django?",
    "What's the coolest thing you've built?",
    "What's your dream project to work on?",
    "What's your coding setup like?",
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <motion.h2
            className="text-4xl md:text-5xl font-light mb-4 py-2 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             Digital Manya
          </motion.h2> */}
          <motion.span
            className="text-4xl md:text-5xl font-medium text-primary dark:text-[hsl(43_33%_70%)]"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            cuz "about me" is a bit boring, right?
          </motion.span>

          <motion.p
            className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I'm basically Manya but smarter 😎 Ask me anything about my tech shenanigans, projects.
          </motion.p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border/50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Manya</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                    </p>
                  </div>
                </div>
                
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearChat}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 scroll-smooth">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-6"
                >
                  <div className="relative mb-4">
                    <img
                      src="/images/manya.jpg"
                      alt="Manya Avatar"
                      className="w-20 h-w-20 rounded-full mx-auto mb-2"
                    />
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Wassup! I'm Manya,<br />
                    Ask me anything about my work or projects, or just say hi! 👋
                  </p>

                  {/* Suggested Questions */}
                  <div className="space-y-3">
                    <p className="text-xs font-medium text-foreground/70">Try one of these:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {suggestedQuestions.map((question, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setInputValue(question)}
                          className="text-xs px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 rounded-full text-primary transition-all duration-200 border border-primary/20"
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <AnimatePresence mode="popLayout">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <div className="w-7 h-7 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <img
                          src="/images/manya.jpg"
                          alt="Manya Avatar"
                          className="rounded-full"  
                        />
                      </div>
                    )}

                    <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-primary to-primary/90 dark:text-black text-primary-foreground shadow-md' 
                        : 'bg-gradient-to-r from-muted to-muted/80 text-foreground shadow-sm border border-border/50'
                    }`}>
                      <p>{message.text}</p>
                    </div>

                    {message.isUser && (
                      <div className="w-7 h-7 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3.5 h-3.5 text-secondary-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                    <img
                      src="/images/manya.jpg"
                      alt="Manya Avatar"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-muted to-muted/80 rounded-2xl px-3 py-2 border border-border/50">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" />
                      <span className="text-xs text-muted-foreground">Cooking a response 🍳</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border/50 p-4 bg-gradient-to-r from-background/50 to-background/30 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="ask me stuff.."
                  className="flex-1 bg-background/80 border-border/50 focus:border-primary/50 transition-colors"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isLoading}
                  className="shrink-0 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}