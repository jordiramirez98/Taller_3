import React from 'react'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 'auto',
        bgcolor: 'rgba(255,111,0,0.85)',
        color: 'white',
        width: '100%',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>

        <Typography variant="body2">
          &copy; Sistema Compras - JORDY RAMIREZ.
        </Typography>

        <Typography variant="body2">
          <a 
            href="https://github.com/jordiramirez98/Taller_3"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Ver repositorio en GitHub
          </a>
        </Typography>

      </Box>
    </Box>
  )
}
