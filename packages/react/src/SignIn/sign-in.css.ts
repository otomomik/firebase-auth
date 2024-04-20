import { style } from '@vanilla-extract/css'

export const signIn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  maxWidth: 360,
  paddingTop: 24,
  paddingBottom: 24,
})

export const signUp = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
