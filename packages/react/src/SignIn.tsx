import type { FC } from 'react'
import { SocialButtonGroup } from './SocialButtonGroup'
import * as styles from './sign-in.css'
import clsx from 'clsx'
import { textRecipe } from './recipes/text.css'
import { useSetting } from './hooks/useSetting'
import { Divider } from './components/Divider'
import { borderRecipe } from './recipes/border.css'

type Props = {
  onClickSignUp?: VoidFunction
}

export const SignIn: FC<Props> = ({ onClickSignUp }) => {
  const { isSocialLogin } = useSetting()

  return (
    <div className={clsx(borderRecipe(), styles.signIn)}>
      <SocialButtonGroup />
      {isSocialLogin && <Divider />}
      <div>Emal & Password</div>
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
