import { style } from '@vanilla-extract/css'

export const baseButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  cursor: 'pointer',
  ':hover': {
    borderColor: '#000000',
  },
})

export const roundButton = style({
  borderRadius: '100%',
})

export const squareButton = style({
  borderRadius: 4,
  paddingTop: 8,
  paddingBottom: 8,
})
