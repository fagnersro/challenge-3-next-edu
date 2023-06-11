'use client'
import { Github } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function OauthGitButtom() {
  const { data: session } = useSession()

  if (session) {
    redirect('/start')
  }

  return (
    <button
      onClick={() => {
        signIn('github')
      }}
      className="flex h-[3.375rem] w-[19.5rem] items-center justify-center gap-4 rounded-lg bg-[#000] font-bold text-[#E1E1E6]"
    >
      <Github />
      Sign in with GitHub
    </button>
  )
}
