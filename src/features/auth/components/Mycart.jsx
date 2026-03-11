import React, { useContext } from 'react'
import { ShopContext } from "../../view/hooks/useContext1"

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";

export const Mycart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Mi Carrito
      </Typography>

      {cart.length === 0 && (
        <Typography>No tienes productos en el carrito</Typography>
      )}

      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
                <Typography sx={{ mt: 1 }}>{item.description}</Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  $ {item.price.toLocaleString()}
                </Typography>
                <Button
                  size="small"
                  color="error"
                  sx={{ mt: 2 }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
