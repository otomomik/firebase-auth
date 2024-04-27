import { useAuth } from '@otomomik/firebase-auth-ui-react'
import { getAuth } from 'firebase/auth'
import { FC } from 'react'
import { app } from './utils/firebase'

export const Page: FC = () => {
  const auth = useAuth()
  console.log(auth)

  if (auth.isLoggedIn) {
    console.log(getAuth(app).currentUser)
  }
  return <div></div>
}
