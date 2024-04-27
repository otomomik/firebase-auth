import { ComponentProps, FC } from 'react'
import { useSetting } from '../hooks/useSetting'
import { ProviderId } from 'firebase/auth'
import { signInWithSocial } from '../utils/signIn'
import { BaseButton } from '../components/BaseButton'
import { GoogleIcon } from '../icons/Google'
import * as baseButtonStyles from '../components/BaseButton/style.css'
import { textRecipe } from '../recipes/text.css'
import * as styles from './social-button.css'
import clsx from 'clsx'

type Props = Omit<ComponentProps<typeof BaseButton>, 'children'>

export const GoogleButton: FC<Props> = ({ ...props }) => {
  const providerId = ProviderId.GOOGLE
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
      className={clsx(baseButtonStyles.squareButton, styles.socialButton)}
      {...{ ...props, onClick: props?.onClick ?? handleClick }}
    >
      <GoogleIcon />
      <span
        className={textRecipe({
          weight: 'bold',
        })}
      >
        Googleで登録
      </span>
    </BaseButton>
  )
}
