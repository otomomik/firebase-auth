import { Fragment, FC } from 'react'
import * as styles from './sign-up.css'
import clsx from 'clsx'
import { textRecipe } from '../recipes/text.css'
import { Divider } from '../components/Divider'
import { borderRecipe } from '../recipes/border.css'
import { useSetting } from '../hooks/useSetting'
import { SocialButtonGroup } from './SocialButtonGroup'

type Props = {
  onClickSignIn?: VoidFunction
}

export const SignUp: FC<Props> = ({ onClickSignIn }) => {
  const { isSocialLogin } = useSetting()

  return (
    <div className={clsx(borderRecipe(), styles.signUp)}>
      {[
        isSocialLogin && <SocialButtonGroup />,
        onClickSignIn && (
          <div className={clsx(styles.signIn)}>
            <a
              className={clsx(
                textRecipe({
                  size: 'sm',
                  link: true,
                })
              )}
              onClick={onClickSignIn}
            >
              ログインはこちらから
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
