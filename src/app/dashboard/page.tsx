'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { MetaMaskSDK } from '@metamask/sdk';
import detectEthereumProvider from '@metamask/detect-provider';

const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)
    return balance
}

const DashboardPage = () => {
    const [nameAndEmail, setNameAndEmail] = useState({
        name: '',
        email: ''
    });
    const [account, setAccount] = useState<string | null>(null);
    const [accountBalance, setAccountBalance] = useState<any>(null);
    
    useEffect(() => {
        const getProvider = async () => {
          const provider = await detectEthereumProvider({ silent: true })
        }
        getProvider()
    }, [])

    const handleNameAndEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setNameAndEmail({
                ...nameAndEmail,
                name: value
            });
        } else if (name === 'email') {
            setNameAndEmail({
                ...nameAndEmail,
                email: value
            });
        }
    }, [nameAndEmail]);

    const handleConnectToMetaMask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const accounts: any = await window?.ethereum?.request({
            method: 'eth_requestAccounts'
        })
        .catch((err) => {
            if (err.code === 4001) {
                alert('Please connect to MetaMask.');
            } else {
                console.log(err);
            }
        });

        const account = accounts[0];
        setAccount(account);
        const balance = await window.ethereum!.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
        }).catch((err) => {
            console.log(err);
        });
        if (balance) {
            const formattedBalance = formatBalance(balance as string);
            setAccountBalance(formattedBalance);
        }
    }

  return (
    <Container>
        <Box position='absolute' left='400px' display='flex' flexDirection='column' gap='5rem' pt='1rem' justifyContent='center' alignItems='center'>
            <Typography variant='h3'>Dashboard</Typography>
            {!account && !accountBalance ? (<Box>
                <Box component='form' onSubmit={handleConnectToMetaMask}>
                    <Box display='flex' flexDirection='column' gap='1rem'>
                    <TextField required label='Name' name='name' variant='outlined' value={nameAndEmail.name} onChange={handleNameAndEmailChange} />
                    <TextField required label='Email' name='email' variant='outlined' value={nameAndEmail.email} onChange={handleNameAndEmailChange} />
                    </Box>
                    <Button type='submit' variant='contained' sx={{
                        marginTop: '1rem',
                    }}>Connect to Wallet</Button>
                </Box>
            </Box>
        ) : <Typography>{`Hi ${nameAndEmail.name}, Your Metamask wallet has a balance of ${accountBalance}`}</Typography>}
        </Box>
    </Container>
  )
}

export default DashboardPage