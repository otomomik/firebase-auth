import type { FC } from 'react'
import { Provider } from '@otomomik/firebase-auth-ui-react'
import { SignIn } from '@otomomik/firebase-auth-ui-react/SignIn'
import { SignUp } from '@otomomik/firebase-auth-ui-react/SignUp'
import { SignOut } from '@otomomik/firebase-auth-ui-react/SignOut'
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
      <SignUp onClickSignIn={() => console.log('onClickSignIn')} />
      <SignOut />
    </Provider>
  )
}
