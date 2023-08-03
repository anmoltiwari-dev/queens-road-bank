"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const TokenPage = () => {
  const [contractAddress, setContractAddress] = useState<string>("");
  const [address, setAddress] = useState<any>(null);

  const handleContractAddressChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setContractAddress(value);
    },
    []
  );

  const handleConnectToPolygonscan = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const polygonscanApires = await fetch(
        `https://api.polygonscan.com/api?module=contract&action=getabi&address=${contractAddress}&apikey=${process.env.NEXT_PUBLIC_POLYGONSCAN_API_KEY}`
      );
      const polygonscanRes = await polygonscanApires.json();
      setAddress(polygonscanRes?.result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Box position="absolute" left="400px">
        <Typography variant="h3">Tokens</Typography>
        {!address ? (
          <Box>
            <Box component="form" onSubmit={handleConnectToPolygonscan}>
              <Box display="flex" flexDirection="column" gap="1rem">
                <TextField
                  label="Contract Address"
                  name="contract-address"
                  variant="outlined"
                  value={contractAddress}
                  onChange={handleContractAddressChange}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "1rem",
                }}
              >
                Connect to Polygoscan
              </Button>
            </Box>
          </Box>
        ) : ( address === 'Invalid API Key' ? <Typography>The contract you provided is Invalid</Typography>:
            <Typography>{`${address}`}</Typography>
        )}
      </Box>
    </Container>
  );
};

export default TokenPage;
