import type { FC } from 'react'
import { helloWorld } from '@firebase-auth/react'

export const App: FC = () => {
  console.log(helloWorld())
  return <>Hello world!</>
}
