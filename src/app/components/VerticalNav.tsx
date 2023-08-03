import React, { useState } from 'react'
import { Box, Container, Drawer, IconButton, Button } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const StyledNavIconButton = styled(IconButton)({
    width: '100%',
    height: '48px',
    borderRadius: '0px',
})

const VerticalNav = ({setShowSecondaryNav}: any ) => {
    const theme = useTheme();
    const router = useRouter();
    
  return (
    <Box>
              <Drawer variant='permanent' sx={{
                '& .MuiDrawer-paper': {
                  width: '70px',
                  height: '95vh',
                  bgcolor: theme.palette.primary.main,
                  marginY: '1rem',
                  marginLeft: '1rem',
                  borderBottomLeftRadius: '1rem',
                  borderTopLeftRadius: '1rem',
                }
              }}>
                <Box sx={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  
                }}>
                  <Box width='100%'>
                  <Box>
                    <StyledNavIconButton onClick={() => router.push('/')}>
                      <HomeOutlinedIcon sx={{
                        color: theme.palette.background.default
                      }} />
                    </StyledNavIconButton>
                  </Box>
                  <Box>
                    <StyledNavIconButton>
                      <LanguageOutlinedIcon sx={{
                        color: theme.palette.background.default,
                      }} />
                    </StyledNavIconButton>
                  </Box>
                  <Box>
                    <StyledNavIconButton onClick={() => {
                      setShowSecondaryNav(true);
                    }}>
                      <MonetizationOnOutlinedIcon sx={{
                        color: theme.palette.background.default,
                      }} />
                    </StyledNavIconButton>
                  </Box>
                  </Box>
                  <Box width='100%'>
                  <Box>
                    <StyledNavIconButton>
                      <NotificationsOutlinedIcon sx={{
                        color: theme.palette.background.default,
                      }} />
                    </StyledNavIconButton>
                  </Box>
                  <Box>
                    <StyledNavIconButton>
                      <Person sx={{
                        color: theme.palette.background.default,
                      }} />
                    </StyledNavIconButton>
                  </Box>
                  </Box>
                </Box>
              </Drawer>
            </Box>
  )
}

export default VerticalNav