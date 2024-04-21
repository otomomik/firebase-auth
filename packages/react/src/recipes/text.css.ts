import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const textRecipe = recipe({
  variants: {
    size: {
      xs: {
        fontSize: '0.75rem',
      },
      sm: {
        fontSize: '0.875rem',
      },
      md: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1.125rem',
      },
      xl: {
        fontSize: '1.25rem',
      },
      xxl: {
        fontSize: '1.5rem',
      },
    },
    color: {
      normal: {
        color: '#333333',
      },
      error: {
        color: '#ff0000',
      },
    },
    link: {
      true: {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
    weight: {
      light: {
        fontWeight: '300',
      },
      normal: {
        fontWeight: '400',
      },
      bold: {
        fontWeight: '700',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'normal',
    weight: 'normal',
  },
})
export type TextRecipeVariants = NonNullable<RecipeVariants<typeof textRecipe>>
