import { useContext } from 'react'
import { Context } from '../Provider'
import { ProviderId } from 'firebase/auth'

export type SocialProviderId = Pick<typeof ProviderId, 'GOOGLE' | 'GITHUB'>

export const useSetting = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Providerが見つかりません')
  }

  const socialProviderIds = context.providerIds.filter(
    (id): id is SocialProviderId[keyof SocialProviderId] =>
      id === ProviderId.GOOGLE || id === ProviderId.GITHUB
  )
  const isSocialLogin = socialProviderIds.length > 0

  return {
    ...context,
    socialProviderIds,
    isSocialLogin,
  }
}
