import { style } from '@vanilla-extract/css'

export const baseButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderWidth: 1,
  borderColor: '#333333',
  cursor: 'pointer',
  borderStyle: 'solid',
  ':hover': {
    borderColor: '#000000',
  },
})

export const roundButton = style({
  borderRadius: '100%',
})

export const squareButton = style({
  borderRadius: 16,
})
