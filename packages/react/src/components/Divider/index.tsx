import { FC } from 'react'
import * as styles from './style.css'
import clsx from 'clsx'

export const Divider: FC = () => {
  return <div className={clsx(styles.divider)} />
}
