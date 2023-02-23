import { useState } from 'react'
import { Button, Stack } from '@mui/material'

import { MSTextField } from 'components/TextField/MSTextField'
import { MovieList } from 'components/MovieList/MovieList'
import { fetchMovies } from 'data/MovieClient'

export const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [movies, setMovies] = useState('')

  const search = async () => fetchMovies(keyword).then(ms => setMovies(ms.Search))

  return (
    <Stack margin={1}>
      <Stack direction='row' spacing={1}>
        <MSTextField
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <Button onClick={() => search()} variant='outlined'>Search</Button>
      </Stack>
      <MovieList movies={movies} />
    </Stack>
  )
}
