export const getOneArticle = async (slug: string) => {
  const res = await fetch(
    `${process.env.API_URL}/articles?populate=*&?filters[slug][$eq]=${slug}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
