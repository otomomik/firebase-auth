import type { ComponentProps, FC } from 'react'
import { SocialButtonGroup } from './SocialButtonGroup'
import * as styles from './sign-in.css'
import clsx from 'clsx'
import { textRecipe } from '../recipes/text.css'
import { useSetting } from '../hooks/useSetting'
import { Divider } from '../components/Divider'
import { borderRecipe } from '../recipes/border.css'
import { EmailPasswordForm } from './EmailPasswordForm'

type Props = {
  onClickSignUp?: VoidFunction
} & Pick<ComponentProps<typeof EmailPasswordForm>, 'onClickResetPassword'>

export const SignIn: FC<Props> = ({ onClickSignUp, onClickResetPassword }) => {
  const { isSocialLogin } = useSetting()

  return (
    <div className={clsx(borderRecipe(), styles.signIn)}>
      <SocialButtonGroup />
      {isSocialLogin && <Divider />}
      <EmailPasswordForm onClickResetPassword={onClickResetPassword} />
      {onClickSignUp && (
        <>
          <Divider />
          <div className={clsx(styles.signUp)}>
            <a
              className={clsx(
                textRecipe({
                  size: 'sm',
                  link: true,
                })
              )}
              onClick={() => onClickSignUp()}
            >
              会員登録はこちらから
            </a>
          </div>
        </>
      )}
    </div>
  )
}

export { GithubButton } from './GithubButton'
export { GoogleButton } from './GoogleButton'
export { SocialButtonGroup } from './SocialButtonGroup'
export { EmailPasswordForm } from './EmailPasswordForm'
