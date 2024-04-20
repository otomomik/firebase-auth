import { FC } from 'react'
import { BaseButton } from '../components/BaseButton'
import * as baseButtonStyles from '../components/BaseButton/style.css'
import { Input } from '../components/Input'
import * as styles from './email-password-form.css'
import clsx from 'clsx'
import { textRecipe } from '../recipes/text.css'

type Props = {
  onClickResetPassword?: VoidFunction
}

export const EmailPasswordForm: FC<Props> = ({ onClickResetPassword }) => {
  return (
    <div className={clsx(styles.emailPasswordForm)}>
      <div className={clsx(styles.inputGroup)}>
        <label
          className={clsx(
            textRecipe({
              size: 'sm',
              weight: 'bold',
            })
          )}
          htmlFor="email"
        >
          メールアドレス
        </label>
        <Input id="email" type="email" placeholder="mail@example.com" />
      </div>
      <div className={clsx(styles.inputGroup)}>
        <label
          className={clsx(
            textRecipe({
              size: 'sm',
              weight: 'bold',
            })
          )}
          htmlFor="password"
        >
          パスワード
        </label>
        <Input id="password" type="password" />
      </div>
      {onClickResetPassword && (
        <div className={clsx(styles.resetPassword)}>
          <a
            className={clsx(
              textRecipe({
                size: 'sm',
                link: true,
              })
            )}
            onClick={() => onClickResetPassword()}
          >
            パスワードを忘れた方
          </a>
        </div>
      )}
      <BaseButton
        className={clsx(
          textRecipe({
            weight: 'bold',
          }),
          baseButtonStyles.squareButton
        )}
      >
        ログイン
      </BaseButton>
    </div>
  )
}
