import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import * as SecureStore from 'expo-secure-store'

interface UserProviderProps {
  children: ReactNode
}

interface User {
  name: string
  email: string
}

interface UserContextData {
  isLoggedIn: boolean
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  logoff: () => Promise<void>
  recoverPassword?: (email: string) => Promise<void>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    async function loadStoredData() {
      const storedUser = await SecureStore.getItemAsync('user')

      if (storedUser) {
        const userData: User = JSON.parse(storedUser)
        if (userData.email) {
          setUser(userData)
        }
      } else {
        setUser(null)
      }
    }

    loadStoredData()
  }, [])

  async function signIn(email: string, password: string) {
    const userCredential = { email, password }
    await SecureStore.setItemAsync('user', JSON.stringify(userCredential))
  }

  async function logoff() {
    await SecureStore.deleteItemAsync('user')
    setUser(null)
  }

  // TODO
  // async function recoverPassword(email: string) {
  // }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: false,
        user: user || null,
        signIn,
        logoff,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(UserContext)

  return context
}
