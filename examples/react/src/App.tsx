import type { FC } from 'react'
import { Provider, SignIn } from '@firebase-auth/react'
import { app } from './utils/firebase'
import { GoogleAuthProvider } from 'firebase/auth'

export const App: FC = () => {
  return (
    <Provider
      app={app}
      providerIds={[GoogleAuthProvider.PROVIDER_ID]}
      flow="redirect"
    >
      Hello world!
      <SignIn />
    </Provider>
  )
}
