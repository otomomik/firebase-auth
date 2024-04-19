import { ComponentProps, FC } from 'react'
import { useSetting } from './hooks/useSetting'
import { ProviderId } from 'firebase/auth'
import { GithubButton } from './GithubButton'
import { GoogleButton } from './GoogleButton'

type Props = ComponentProps<'div'>

const SocialButtons: Record<(typeof ProviderId)[keyof typeof ProviderId], FC> =
  {
    [ProviderId.FACEBOOK]: GithubButton,
    [ProviderId.GITHUB]: GithubButton,
    [ProviderId.GOOGLE]: GoogleButton,
    [ProviderId.PASSWORD]: GithubButton,
    [ProviderId.PHONE]: GithubButton,
    [ProviderId.TWITTER]: GithubButton,
  }

export const SocialButtonGroup: FC<Props> = ({ className }) => {
  const { providerIds } = useSetting()

  return (
    <div className={className}>
      {providerIds.map((id) => {
        const Component = SocialButtons[id]

        return <Component key={id} />
      })}
    </div>
  )
}
