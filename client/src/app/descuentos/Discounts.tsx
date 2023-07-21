'use client'
//
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  CardActions,
  Button,
  Divider,
  Chip,
  Box,
} from '@mui/material'
import Back from '@/components/Back'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { getDiscounts } from '@/api/getDiscounts'
import { IDiscounts } from '@/models/discounts'
import CardDiscounts from './CardDiscounts'

const Discounts = ({ discounts }: { discounts: IDiscounts[] }) => {
  return (
    <Grid
      container
      mt={8}
      sx={{
        px: { xs: 2, lg: 0 },
      }}
    >
      <Box display='flex' justifyContent='center' sx={{ width: '100%' }}>
        <Grid item xs={12} lg={8}>
          <Box display='flex' flexDirection='row'>
            <Typography
              fontWeight={700}
              fontSize={24}
              sx={{
                color: 'text.primary',
              }}
            >
              Descuentos
            </Typography>
            <FlashOnIcon
              sx={{
                display: 'flex',
                transform: 'rotate(20deg)',
                fontSize: 28,
                alignSelf: 'center',
              }}
            />
          </Box>
          <Typography
            mt={0.4}
            fontWeight={500}
            fontSize={18}
            color='text.secondary'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            deleniti perferendis.
          </Typography>
          <Container>
            <Grid
              mt={4}
              container
              display='flex'
              sx={{
                justifyContent: { xs: 'space-evenly', md: 'space-between' },
              }}
            >
              {discounts.map((discount, index) => (
                <Grid my={1.8} item key={discount.id}>
                  <CardDiscounts
                    title={discount.attributes.title}
                    description={discount.attributes.description}
                    img_alt={
                      discount.attributes.image.data.attributes.alternativeText
                    }
                    image={
                      discount.attributes.image.data.attributes.formats.small
                        .url
                    }
                    button_background={discount.attributes.buttonBackground}
                    button_color={discount.attributes.buttonColor}
                    promo={discount.attributes.promo}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Box>
    </Grid>
  )
}

export default Discounts
