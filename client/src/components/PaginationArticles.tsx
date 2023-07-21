'use client'
import { useState } from 'react'
import { IArticles } from '@/models/articles'
import Pagination from '@mui/material/Pagination'
import { Box } from '@mui/system'

const PaginationArticles = ({ articles }: { articles: IArticles[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(4)

  // Get current articles
  const last = currentPage * articlesPerPage
  const first = last - articlesPerPage
  const current = articles.slice(first, last)

  current.sort(
    (a, b) =>
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
  )

  const pageNumber = []

  for (let i = 0; i < Math.ceil(articles.length / articlesPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <>
      {/* ONLY MD BREAKPOINT */}
      <Pagination
        count={pageNumber.length}
        onChange={(e, page) => setCurrentPage(page)}
        page={currentPage}
        shape='rounded'
        showFirstButton
        showLastButton
        color='warning'
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          mt: 3,
        }}
      />

      {/* ONLY XS BREAKPOINT */}
      <Pagination
        count={pageNumber.length}
        onChange={(e, page) => setCurrentPage(page)}
        page={currentPage}
        shape='rounded'
        color='warning'
        sx={{
          display: { xs: 'flex', sm: 'none', md: 'none' },
          justifyContent: 'center',
          mt: 2,
        }}
      />
    </>
  )
}

export default PaginationArticles
