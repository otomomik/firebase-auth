import { FirebaseApp } from 'firebase/app'
import { ProviderId, getAuth, onAuthStateChanged } from 'firebase/auth'
import { createContext, ReactNode, type FC, useEffect, useState } from 'react'

type Context = {
  app: FirebaseApp
  providerIds: [
    (typeof ProviderId)[keyof typeof ProviderId],
    ...(typeof ProviderId)[keyof typeof ProviderId][],
  ]
  flow: 'popup' | 'redirect'
  isReady: boolean
  isLoggedIn: boolean
}
export const Context = createContext({} as Context)

type Props = {
  app: Context['app']
  providerIds: Context['providerIds']
  flow: Context['flow']
  children?: ReactNode
}

export const Provider: FC<Props> = ({ app, providerIds, flow, children }) => {
  const [isReady, setIsReady] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
      setIsReady(true)
      setIsLoggedIn(!!user)
    })
  }, [app])

  return (
    <Context.Provider
      value={{
        app,
        providerIds,
        flow,
        isReady,
        isLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  )
}
