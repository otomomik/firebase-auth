import {
  GithubAuthProvider,
  GoogleAuthProvider,
  ProviderId,
  getAuth,
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
