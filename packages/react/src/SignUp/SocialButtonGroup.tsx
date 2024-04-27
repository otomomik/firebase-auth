import { ComponentProps, FC } from 'react'
import { SocialProviderId, useSetting } from '../hooks/useSetting'
import { ProviderId } from 'firebase/auth'
import { GithubButton } from './GithubButton'
import { GoogleButton } from './GoogleButton'
import * as styles from './social-button-group.css'
import clsx from 'clsx'

type Props = ComponentProps<'div'>

const SocialButtons: Record<
  SocialProviderId[keyof SocialProviderId],
  {
    component: FC
  }
> = {
  [ProviderId.GITHUB]: {
    component: GithubButton,
  },
  [ProviderId.GOOGLE]: {
    component: GoogleButton,
  },
}

export const SocialButtonGroup: FC<Props> = ({ className }) => {
  const { isSocialLogin, socialProviderIds } = useSetting()

  if (!isSocialLogin) {
    return null
  }

  return (
    <div className={clsx(styles.socialButtonGroup, className)}>
      {socialProviderIds.map((id) => {
        const social = SocialButtons[id]
        const Component = social.component

        return <Component key={id} />
      })}
    </div>
  )
}
