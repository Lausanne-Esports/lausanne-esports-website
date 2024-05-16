export const Language = {
  French: 1,
  English: 2,
} as const

export type Language = (typeof Language)[keyof typeof Language]
