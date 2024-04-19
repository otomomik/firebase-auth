import { useContext } from 'react'
import { Context } from './Provider'

export const useAuth = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Providerが見つかりません')
  }

  const { isReady, isLoggedIn } = context

  return {
    isReady,
    isLoggedIn,
  }
}
