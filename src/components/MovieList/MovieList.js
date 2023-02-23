import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export const MovieList = (props) => {
    return (
        <List p='10' pt='3' spacing={2}>
            {props.movies && props.movies.map(m => {
                return (
                    <ListItem key={m.id} listStyleType='disc'>
                        <Typography>[image placeholder]</Typography>
                        <Typography>{m.Title}</Typography>
                        <IconButton variant="solid">
                            <FavoriteBorder />
                        </IconButton>
                        {/*Todo logic for favouirites*/}
                    </ListItem>
                )
            })}
        </List>
    )
}

MovieList.propTypes = {
    movies: PropTypes.node.isRequired
}