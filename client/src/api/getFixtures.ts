export const getFixtures = async () => {
  const res = await fetch(
    `${process.env.API_URL}/fixtures/${process.env.PARAMETER}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
