import type { FC } from 'react'
import { Provider, SignIn } from '@firebase-auth/react'
import { app } from './utils/firebase'
import { ProviderId } from 'firebase/auth'
import { Page } from './Page'

export const App: FC = () => {
  return (
    <Provider
      app={app}
      providerIds={[ProviderId.GOOGLE, ProviderId.GITHUB]}
      flow="redirect"
    >
      <Page />
      <SignIn />
    </Provider>
  )
}
