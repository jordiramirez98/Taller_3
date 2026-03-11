import React, { useContext } from 'react'
// IMPORTAR CONTEXTO generalizado
import { ShopContext } from '../hooks/useContext1'

import {
    Box,
    Typography,
    Button,
    CardMedia,
    Card,
    CardContent,
    Grid,
    CardActions,
    Chip
} from '@mui/material'


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'




// COMPONENTE TARJETA
const ProductCard = ({ product }) => {

    const { favorites, addFavorite, removeFavorite, cart, addToCart } = useContext(ShopContext)

    const isFavorite = favorites.some(item => item.id === product.id)
    const isInCart = cart.some(item => item.id === product.id)

    const handleFavorite = () => {
        if (isFavorite) {
            removeFavorite(product.id)
        } else {
            addFavorite(product)
        }
    }

    return (
        <Card sx={{ maxWidth: 300, height: '100%', display: 'flex', flexDirection: 'column' }}>

            {/* Imagen */}
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={product.image}
                    title={product.title}
                />

                {product.badge && (
                    <Chip
                        label={product.badge}
                        size="small"
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                        color="error"
                        variant="filled"
                    />
                )}
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>

                <Typography gutterBottom variant="h6">
                    {product.title}
                </Typography>

                <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', display: 'block', mb: 1 }}
                >
                    {product.category}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 2 }}
                >
                    {product.description}
                </Typography>

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                >
                    $ {product.price.toLocaleString()}
                </Typography>

            </CardContent>

            {/* BOTONES */}
            <CardActions sx={{ pt: 0, gap: 1 }}>

                <Button
                    size="small"
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{ flex: 1 }}
                    onClick={() => addToCart(product)}
                    disabled={isInCart}
                >
                    {isInCart ? 'En carrito' : 'Comprar'}
                </Button>

                <Button
                    size="small"
                    onClick={handleFavorite}
                    sx={{ color: isFavorite ? 'error.main' : 'inherit' }}
                >
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>

            </CardActions>

        </Card>
    )
}


// COMPONENTE PRINCIPAL
export const Article = () => {

    const productos = [
        {
            id: 1,
            image: '/img/imagen_1.webp',
            title: 'Altavoces Estandar - Hifi',
            category: 'Instrumentos',
            description: 'Sonido cálido y clásico, componente liviano perfecto para cualquier ocación.',
            price: 180000,
            badge: 'En stock'
        },
        {
            id: 2,
            image: '/img/imagen_2.jpg',
            title: 'Equipo 3 Vias',
            category: 'Instrumentos',
            description: 'potencia y alto volumen equilibrado sin perdida de audio.',
            price: 325000,
            badge: 'Oferta'
        },
        {
            id: 3,
            image: '/img/imagen_3.webp',
            title: 'Sistemas De Sonido',
            category: 'Clásicos',
            description: 'Fieles a la calidad de sonido.',
            price: 749999,
            badge: ''
        },
        {
            id: 4,
            image: '/img/imagen_4.webp',
            title: 'Diademas',
            category: 'Auriculares',
            description: 'Graves profundos y sonido equilibrado para estudios.',
            price: 139999,
            badge: 'En stock'
        },
        {
            id: 5,
            image: '/img/imagen_5.webp',
            title: 'Altvoces',
            category: 'Altavoves para la "TV"',
            description: 'Mucha claridad para series o peliculas.',
            price: 2850000,
            badge: 'Oferta'
        },
        {
            id: 6,
            image: '/img/imagen_6.jpg',
            title: 'Audifonos en cable',
            category: 'Accesorios',
            description: 'Auricular de alta calidad (HIFI) para tu celular.',
            price: 954800,
            badge: ''
        }
    ]

    return (
        <Box sx={{ p: 4, backgroundColor: 'background.default', minHeight: '100vh' }}>

            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ mb: 4, fontWeight: 'bold' }}
            >
                Artículos de Primera Calidad
            </Typography>

            <Grid container spacing={3}>

                {productos.map((producto) => (

                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={producto.id}>
                        <ProductCard product={producto} />
                    </Grid>

                ))}

            </Grid>

        </Box>
    )
}