import { getAuth, signOut as firebaseSignOut } from 'firebase/auth'
import { useSetting } from '../hooks/useSetting'

export const signOut = async ({
  app,
}: {
  app: ReturnType<typeof useSetting>['app']
}) => {
  const auth = getAuth(app)

  await firebaseSignOut(auth)
}
