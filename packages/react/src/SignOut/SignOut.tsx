import { ComponentProps, FC } from 'react'
import { BaseButton } from '../components/BaseButton'
import * as baseButtonStyles from '../components/BaseButton/style.css'
import { useSetting } from '../hooks/useSetting'
import { signOut } from '../utils/signOut'
import clsx from 'clsx'

type Props = ComponentProps<typeof BaseButton>

export const SignOut: FC<Props> = ({ children = 'ログアウト', ...props }) => {
  const { app, isLoggedIn } = useSetting()

  if (!isLoggedIn) {
    return null
  }

  const handleClick = async () => {
    await signOut({
      app,
    })
  }

  return (
    <BaseButton
      {...{
        ...props,
        className: clsx(baseButtonStyles.squareButton, props.className),
        onClick: props?.onClick ?? handleClick,
      }}
    >
      {children}
    </BaseButton>
  )
}
