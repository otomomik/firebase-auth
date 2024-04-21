import { Fragment, ComponentProps, FC } from 'react'
import { SocialButtonGroup } from './SocialButtonGroup'
import * as styles from './sign-in.css'
import clsx from 'clsx'
import { textRecipe } from '../recipes/text.css'
import { Divider } from '../components/Divider'
import { borderRecipe } from '../recipes/border.css'
import { EmailPasswordForm } from './EmailPasswordForm'
import { useSetting } from '../hooks/useSetting'

type EmailPasswordFormProps = ComponentProps<typeof EmailPasswordForm>
type Props = {
  onClickSignUp?: VoidFunction
  onClickResetPassword?: EmailPasswordFormProps['onClickResetPassword']
}

export const SignIn: FC<Props> = ({ onClickSignUp, onClickResetPassword }) => {
  const { isEmailPasswordLogin, isSocialLogin } = useSetting()

  return (
    <div className={clsx(borderRecipe(), styles.signIn)}>
      {[
        isSocialLogin && <SocialButtonGroup />,
        isEmailPasswordLogin && (
          <EmailPasswordForm onClickResetPassword={onClickResetPassword} />
        ),
        onClickSignUp && (
          <div className={clsx(styles.signUp)}>
            <a
              className={clsx(
                textRecipe({
                  size: 'sm',
                  link: true,
                })
              )}
              onClick={onClickSignUp}
            >
              会員登録はこちらから
            </a>
          </div>
        ),
      ]
        .filter(Boolean)
        .map((component, index) => (
          <Fragment key={index}>
            {index !== 0 && <Divider />}
            {component}
          </Fragment>
        ))}
    </div>
  )
}
