import { useState } from 'react'
import { Button, Stack } from '@mui/material'

import { MSTextField } from 'components/TextField/MSTextField'

const MovieList = 'movies go there'

export const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [movies] = useState('')

  const search = async () => window.alert('search invoked')

  return (
    <Stack>
      <Stack direction='row'>
        <MSTextField
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <Button onClick={() => search()} />
      </Stack>
      <MovieList movies={movies} />
    </Stack>
  )
}
