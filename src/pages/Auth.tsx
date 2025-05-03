"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn, Mail, UserIcon, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        navigate("/")
      }
    }

    checkUser()
    // Add listener for auth state changes to potentially redirect if logged in elsewhere
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        console.log("Auth state changed to SIGNED_IN, navigating home.")
        navigate("/")
      }
    })

    // Cleanup listener on component unmount
    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [navigate])

  // Handle email/password authentication
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      if (isSignUp) {
        // Sign up
        console.log(`Signing up user with email: ${email}, redirecting to: ${window.location.origin}/auth-callback`)

        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              // Use provided username, fallback to email prefix
              username: username.trim() || email.split("@")[0],
            },
            // IMPORTANT: Use dynamic origin for email verification link
            emailRedirectTo: `${window.location.origin}/auth-callback`,
          },
        })

        if (signUpError) throw signUpError

        setSuccess("Account created! Please check your email to confirm your account.")
        toast({
          title: "Account created!",
          description: "Please check your email to confirm your account.",
          duration: 5000,
          className: "bg-opacity-800 backdrop-blur-0 bg-yellow-600",
        })
        // Clear form on successful signup request
        setEmail("")
        setPassword("")
        setUsername("")
      } else {
        // Sign in
        console.log(`Signing in user with email: ${email}`)

        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (signInError) throw signInError
      }
    } catch (err: any) {
      console.error("Auth error:", err)
      const errorMessage = err.message || "An error occurred during authentication."
      setError(errorMessage)
      toast({
        title: "Authentication Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
        className: "bg-opacity-800 backdrop-blur-0 bg-yellow-600",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError("") // Clear previous errors
    try {
      console.log(`Redirecting to Google auth with redirectTo: ${window.location.origin}/auth-callback`)

      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          // IMPORTANT: Use dynamic origin for OAuth callback
          redirectTo: `${window.location.origin}/auth-callback`,
        },
      })

      if (oauthError) throw oauthError
      // No need to set loading false here, the page will redirect
    } catch (err: any) {
      console.error("Google sign in error:", err)
      const errorMessage = err.message || "Failed to initiate Google Sign-In."
      setError(errorMessage)
      toast({
        title: "Google Sign In Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
        className: "bg-opacity-800 backdrop-blur-0 bg-yellow-600",
      })
      setGoogleLoading(false) // Set loading false only if error occurs before redirect
    }
  }

  return (
    <div className="min-h-screen bg-festival-cream/30 dark:bg-gray-800/30 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md border border-festival-golden/30 dark:border-festival-golden/20 shadow-lg dark:bg-gray-800">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div>
              <CardTitle className="text-2xl font-heading text-festival-maroon dark:text-white">
                {isSignUp ? "Create an Account" : "Welcome Back"}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                {isSignUp ? "Sign up to join the fun!" : "Log in to your account to continue"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        {/* Success message area */}
        {success &&
          !error && ( // Only show success if no error
            <div className="mx-6 mb-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-sm text-green-700 dark:text-green-300">{success}</span>
            </div>
          )}

        {/* Error message area */}
        {error && (
          <div className="mx-6 mb-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
            <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
          </div>
        )}

        <CardContent className="pt-4">
          {/* Don't render form if signup success message is shown */}
          {!success && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-white">
                    Username
                  </Label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      id="username"
                      className="pl-9 border-gray-300 dark:border-gray-600 focus:border-festival-golden focus:ring focus:ring-festival-golden/20 dark:bg-gray-700 dark:text-white"
                      placeholder="Choose a username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-white">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    className="pl-9 border-gray-300 dark:border-gray-600 focus:border-festival-golden focus:ring focus:ring-festival-golden/20 dark:bg-gray-700 dark:text-white"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  className="border-gray-300 dark:border-gray-600 focus:border-festival-golden focus:ring focus:ring-festival-golden/20 dark:bg-gray-700 dark:text-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                />
                {isSignUp && <p className="text-xs text-gray-500 dark:text-gray-400">Minimum 6 characters.</p>}
              </div>

              <Button
                type="submit"
                disabled={isLoading || googleLoading}
                className="w-full bg-festival-maroon hover:bg-festival-maroon/90 text-white dark:bg-festival-golden dark:hover:bg-festival-golden/90 dark:text-festival-maroon"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
                {isLoading ? "Processing..." : isSignUp ? "Sign Up" : "Log In"}
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-white">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                disabled={isLoading || googleLoading}
                onClick={handleGoogleSignIn}
                className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                {googleLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <svg
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 261.8 0 120.3 109.8 8.8 244 8.8c77.7 0 142 31.4 190.1 78.4l-73.1 73.1c-30.8-28.6-70.1-46.3-117-46.3-89.7 0-162.4 72.7-162.4 162.4s72.7 162.4 162.4 162.4c101.5 0 138-73.9 143.4-110.3H244v-91.1h236.1c2.3 12.7 3.9 26.4 3.9 40.8z"
                    ></path>
                  </svg>
                )}
                {googleLoading ? "Redirecting..." : `Sign ${isSignUp ? "up" : "in"} with Google`}
              </Button>
            </form>
          )}
        </CardContent>

        {/* Don't show toggle if signup success message is shown */}
        {!success && (
          <CardFooter className="flex justify-center pt-4">
            <Button
              variant="link"
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError("") // Clear errors when toggling
                setSuccess("") // Clear success message when toggling
              }}
              className="text-sm text-festival-maroon hover:text-festival-maroon/80 dark:text-white dark:hover:text-gray-300"
            >
              {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

export default Auth
