import { FC } from 'react'
import { BaseButton } from '../components/BaseButton'
import * as baseButtonStyles from '../components/BaseButton/style.css'

export const EmailPasswordForm: FC = () => {
  return (
    <div>
      <div>
        <label>メールアドレス</label>
        <input type="email" />
      </div>
      <div>
        <label>パスワード</label>
        <input type="password" />
      </div>
      <div>
        <BaseButton className={baseButtonStyles.squareButton}>
          ログイン
        </BaseButton>
      </div>
    </div>
  )
}
