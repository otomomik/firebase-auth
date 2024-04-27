import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const borderRecipe = recipe({
  variants: {
    width: {
      default: {
        borderWidth: 1,
      },
    },
    style: {
      solid: {
        borderStyle: 'solid',
      },
    },
    color: {
      default: {
        borderColor: 'rgba(8,19,26,0.1411764705882353)',
      },
      black: {
        borderColor: '#333333',
      },
    },
  },
  defaultVariants: {
    width: 'default',
    style: 'solid',
    color: 'default',
  },
})
export type BorderRecipeVariants = NonNullable<
  RecipeVariants<typeof borderRecipe>
>
