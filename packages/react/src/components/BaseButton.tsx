import { ComponentProps, FC } from 'react'

type Props = Pick<ComponentProps<'button'>, 'children' | 'onClick'>

export const BaseButton: FC<Props> = ({ ...props }) => {
  return <button {...props} />
}
