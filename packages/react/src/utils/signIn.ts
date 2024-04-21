import {
  GithubAuthProvider,
  GoogleAuthProvider,
  ProviderId,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'
import { useSetting } from '../hooks/useSetting'

export const signInWithSocial = async ({
  app,
  providerId,
  flow,
}: {
  app: ReturnType<typeof useSetting>['app']
  providerId: ReturnType<typeof useSetting>['providerIds'][number]
  flow: ReturnType<typeof useSetting>['flow']
}) => {
  const auth = getAuth(app)

  const Provider = (() => {
    switch (providerId) {
      case ProviderId.GOOGLE:
        return GoogleAuthProvider
      case ProviderId.GITHUB:
        return GithubAuthProvider
      default:
        throw new Error('Invalid providerId')
    }
  })()

  const provider = new Provider()
  await (flow === 'popup'
    ? signInWithPopup(auth, provider)
    : signInWithRedirect(auth, provider))
}

export const signInWithEmailPassword = async ({
  app,
  email,
  password,
}: {
  app: ReturnType<typeof useSetting>['app']
  email: string
  password: string
}) => {
  const auth = getAuth(app)

  await signInWithEmailAndPassword(auth, email, password)
}
