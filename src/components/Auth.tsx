import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async () => {
    const { error } =
      await supabase.auth.signUp({
        email,
        password
      })

    if (error) {
      alert(error.message)
    } else {
      alert('Check email')
    }
  }

  const signIn = async () => {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password
      })

    if (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        placeholder="Password"
      />

      <button onClick={signIn}>
        Login
      </button>

      <button onClick={signUp}>
        Register
      </button>
    </div>
  )
}