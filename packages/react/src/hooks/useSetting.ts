import { useContext } from 'react'
import { Context } from '../Provider'

export const useSetting = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Providerが見つかりません')
  }

  return context
}
