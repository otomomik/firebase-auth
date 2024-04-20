import { ComponentProps, FC } from 'react'
import { useSetting } from './hooks/useSetting'
import { ProviderId } from 'firebase/auth'
import { GithubButton } from './GithubButton'
import { GoogleButton } from './GoogleButton'
import * as styles from './social-button-group.css'
import clsx from 'clsx'
import { textRecipe } from './recipes/text.css'

type Props = ComponentProps<'div'>

type PickProviderId = Pick<
  typeof ProviderId,
  'GOOGLE' | 'FACEBOOK' | 'GITHUB' | 'TWITTER'
>
const SocialButtons: Record<
  PickProviderId[keyof PickProviderId],
  {
    label: string
    component: FC
  }
> = {
  [ProviderId.FACEBOOK]: {
    label: 'Facebook',
    component: GithubButton,
  },

  [ProviderId.GITHUB]: {
    label: 'Github',
    component: GithubButton,
  },

  [ProviderId.GOOGLE]: {
    label: 'Google',
    component: GoogleButton,
  },

  [ProviderId.TWITTER]: {
    label: 'Twitter',
    component: GithubButton,
  },
}

export const SocialButtonGroup: FC<Props> = ({ className }) => {
  const { providerIds } = useSetting()

  return (
    <div className={clsx(styles.socialButtonGroup, className)}>
      {providerIds
        .filter(
          (id): id is PickProviderId[keyof PickProviderId] =>
            id in SocialButtons
        )
        .map((id) => {
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
