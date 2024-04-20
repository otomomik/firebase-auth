import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const borderRecipe = recipe({
  variants: {
    width: {
      normal: {
        borderWidth: 1,
      },
    },
    style: {
      solid: {
        borderStyle: 'solid',
      },
    },
    color: {
      black: {
        borderColor: '#333333',
      },
    },
  },
  defaultVariants: {
    width: 'normal',
    style: 'solid',
    color: 'black',
  },
})
export type BorderRecipeVariants = NonNullable<
  RecipeVariants<typeof borderRecipe>
>
