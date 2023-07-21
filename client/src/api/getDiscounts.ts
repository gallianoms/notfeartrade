export const getDiscounts = async () => {
  const res = await fetch(
    `${process.env.API_URL}/discounts${process.env.PARAMETER}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
