import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { borderRecipe } from '../../recipes/border.css'
import * as styles from './style.css'

type Props = Pick<
  ComponentProps<'input'>,
  'id' | 'type' | 'defaultValue' | 'onChange' | 'onBlur' | 'placeholder'
>

export const Input: FC<Props> = (props) => {
  return <input className={clsx(borderRecipe(), styles.input)} {...props} />
}
