export const ArticleStatus = {
  Draft: 1,
  ProofreadingRequested: 2,
  Ready: 3,
  Published: 4,
} as const

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]
