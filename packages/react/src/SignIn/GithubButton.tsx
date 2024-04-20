import { ComponentProps, FC } from 'react'
import { useSetting } from '../hooks/useSetting'
import { ProviderId } from 'firebase/auth'
import { GithubIcon } from '../icons/Github'
import { signInWithSocial } from '../utils/signIn'
import { BaseButton } from '../components/BaseButton'

type Props = Omit<ComponentProps<typeof BaseButton>, 'children'>

export const GithubButton: FC<Props> = ({ ...props }) => {
  const providerId = ProviderId.GITHUB
  const { app, providerIds, flow } = useSetting()

  if (!providerIds.includes(providerId)) {
    return null
  }

  const handleClick = async () => {
    await signInWithSocial({
      app,
      providerId,
      flow,
    })
  }

  return (
    <BaseButton
      id={providerId}
      {...{ ...props, onClick: props?.onClick ?? handleClick }}
    >
      <GithubIcon />
    </BaseButton>
  )
}
