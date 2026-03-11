import React from 'react'
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Card,
  CardContent,
  Grid,
  CardActions
} from '@mui/material'


export const Content = () => {

  const bannerUrl =
    "/img/principal_1.webp"
  return (
    <Box sx={{ m: 0, p: 0, overflow: 'hidden' }}>

      {/* Hero / Banner */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          width: '100vw',
          height: { xs: '50vh', sm: '60vh', md: '75vh' },
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
        }}
      >
        <Box
          sx={{
            bgcolor: 'rgba(0,0,0,0.45)',
            color: '#fff',
            p: { xs: 3, md: 6 },
            borderRadius: 2,
            maxWidth: 1100,
            mx: 2
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: '700', lineHeight: 1.1 }}
          >
            Sonido De Alta Fidelidad
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.95 }}>
           Audio de máxima precisión, detalle y transparencia, minimizando distorsiones y ruido para acercarse al sonido original.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, borderRadius: '20px' }}
          >
            Ver productos
          </Button>
        </Box>
      </Box>

      {/* Bienvenida */}
      <Box
        sx={{
          p: 4,
          backgroundColor: 'background.default',
          color: 'text.primary',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sound - HIFI
        </Typography>

        <Typography>
          Alta Calidad De Sonido.
        </Typography>
      </Box>

      {/* Cartas de productos */}
      <Box sx={{ p: 4, backgroundColor: 'background.default' }}>
        <Grid container spacing={3} justifyContent="center">

          {/* Mini Parlantes*/}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image="/img/imagen_1.webp"
                alt="Altavoces Estandar - Hifi "
              />
              <CardContent>
                <Typography variant="h6">


      
                Mini Parlantes 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Línea de parlantes que ofrece una experiencia de audio inmersiva con alta fidelidad y bajos profundos, ideal para eventos o uso profesional.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Más</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Equipo 3 Vias */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image="/img/imagen_2.jpg"
                alt="Equipo 3 Vias"
              />
              <CardContent>
                <Typography variant="h6">
                  Equipo 3 Vias
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Diseñado para reproducir audio completo con mayor fidelidad y menor distorsión, especializando cada componente en un rango de frecuencia específico.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Más</Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Sistema de sonido */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image="/img/imagen_3.webp"
                alt="Sistemas De Sonido"
              />
              <CardContent>
                <Typography variant="h6">
                Sistema De Sonido
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Conjunto de componentes de audio diseñado para recrear una experiencia inmersiva cinematográfica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Más</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Diademas */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="419"
                image="/img/imagen_4.webp"
                alt="Diademas"
              />
              <CardContent>
                <Typography variant="h6">
                  Diademas
                </Typography>
                <Typography variant="body2" color="text.secondary">
              Diademas ergonómicas y resistentes, diseñados para largas sesiones de uso, con énfasis en comodidad y alta fidelidad de sonido (plano o equilibrado). 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Más</Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Box>

    </Box>
  )
}
