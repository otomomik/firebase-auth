import { style } from '@vanilla-extract/css'

export const emailPasswordForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: '100%',
  paddingLeft: 16,
  paddingRight: 16,
})

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const resetPassword = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
