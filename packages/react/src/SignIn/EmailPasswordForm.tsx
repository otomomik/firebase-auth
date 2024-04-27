import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { BaseButton } from '../components/BaseButton'
import * as baseButtonStyles from '../components/BaseButton/style.css'
import { Input } from '../components/Input'
import * as styles from './email-password-form.css'
import clsx from 'clsx'
import { textRecipe } from '../recipes/text.css'
import { useSetting } from '../hooks/useSetting'
import { signInWithEmailPassword } from '../utils/signIn'
import { validateEmail, validatePassword } from '../utils/validate'

type Props = {
  onClickResetPassword?: VoidFunction
}

export const EmailPasswordForm: FC<Props> = ({ onClickResetPassword }) => {
  const { app, isEmailPasswordLogin } = useSetting()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<
    Record<'email' | 'password', string | null>
  >({
    email: null,
    password: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isEmailPasswordLogin) {
    return null
  }

  const isDisabled = isSubmitting || email === '' || password === ''

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (isSubmitting) {
      return
    }
    setIsSubmitting(true)
    event.preventDefault()

    const emailMessage = validateEmail(email)
    const passwordMessage = validatePassword(password)
    setErrors((prev) => ({
      ...prev,
      email: emailMessage,
      password: passwordMessage,
    }))

    const isEmailValid = emailMessage === null
    const isPasswordValid = passwordMessage === null
    if (isEmailValid && isPasswordValid) {
      await signInWithEmailPassword({
        app,
        email,
        password,
      })
    }

    setIsSubmitting(false)
  }

  return (
    <form className={clsx(styles.emailPasswordForm)} onSubmit={handleSubmit}>
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
        <Input
          id="email"
          type="email"
          placeholder="mail@example.com"
          onChange={handleChangeEmail}
        />
        {!!errors.email && (
          <span
            className={clsx(
              textRecipe({
                size: 'sm',
                color: 'error',
              })
            )}
          >
            {errors.email}
          </span>
        )}
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
        <Input id="password" type="password" onChange={handleChangePassword} />
        {!!errors.password && (
          <span
            className={clsx(
              textRecipe({
                size: 'sm',
                color: 'error',
              })
            )}
          >
            {errors.password}
          </span>
        )}
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
        type="submit"
        disabled={isDisabled}
      >
        ログイン
      </BaseButton>
    </form>
  )
}
