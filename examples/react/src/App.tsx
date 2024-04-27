import type { FC } from 'react'
import { Provider } from '@firebase-auth/react'
import { SignIn } from '@firebase-auth/react/SignIn'
import { SignOut } from '@firebase-auth/react/SignOut'
import { app } from './utils/firebase'
import { ProviderId } from 'firebase/auth'
import { Page } from './Page'

export const App: FC = () => {
  return (
    <Provider
      app={app}
      providerIds={[ProviderId.PASSWORD, ProviderId.GOOGLE, ProviderId.GITHUB]}
      flow="redirect"
    >
      <Page />
      <SignIn
        onClickSignUp={() => console.log('onClickSignUp')}
        onClickResetPassword={() => console.log('onClickResetPassword')}
      />
      <SignOut />
    </Provider>
  )
}
