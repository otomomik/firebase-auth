import { ComponentProps, FC } from 'react'
import { SocialProviderId, useSetting } from './hooks/useSetting'
import { ProviderId } from 'firebase/auth'
import { GithubButton } from './GithubButton'
import { GoogleButton } from './GoogleButton'
import * as styles from './social-button-group.css'
import clsx from 'clsx'
import { textRecipe } from './recipes/text.css'

type Props = ComponentProps<'div'>

const SocialButtons: Record<
  SocialProviderId[keyof SocialProviderId],
  {
    label: string
    component: FC
  }
> = {
  [ProviderId.GITHUB]: {
    label: 'Github',
    component: GithubButton,
  },
  [ProviderId.GOOGLE]: {
    label: 'Google',
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
        const label = social.label
        const Component = social.component

        return (
          <div className={clsx(styles.button)} key={id}>
            <Component />
            <label
              className={clsx(
                textRecipe({
                  size: 'xs',
                }),
                styles.label
              )}
            >
              {label}
            </label>
          </div>
        )
      })}
    </div>
  )
}
