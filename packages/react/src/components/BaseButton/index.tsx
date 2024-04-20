import { ComponentProps, FC } from 'react'
import * as styles from './style.css'
import clsx from 'clsx'
import { borderRecipe } from '../../recipes/border.css'

type Props = Pick<ComponentProps<'button'>, 'children' | 'onClick'>

export const BaseButton: FC<Props> = ({ ...props }) => {
  return (
    <button
      className={clsx(borderRecipe(), styles.baseButton, styles.roundButton)}
      {...props}
    />
  )
}
