import React from 'react'
import companiesData from "../data/companies.json";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Grid,
    Container
} from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'; 
import { useState, useEffect } from "react";

const Main = ({ search, location, industry }) => {
    const [companies, setCompanies] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);

    
    useEffect(() => {
        setCompanies(companiesData);
        setFilteredCompanies(companiesData);
    }, []);

    
    useEffect(() => {
        let result = companies;

      
        if (search) {
            result = result.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        
        if (location) {
            result = result.filter((c) => c.location === location);
        }

       
        if (industry) {
            result = result.filter((c) => c.industry === industry);
        }

        setFilteredCompanies(result);
    }, [search, location, industry, companies]);


    return (
        <>
            

            <Container maxWidth="lg" sx={{ marginTop: 4 }}>
                <Grid container spacing={5}>
                    {filteredCompanies.map((company) => (
                        <Grid item xs={12} sm={12} md={6} lg={3} key={company.id}>
                            <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%', width:"250px"}}>

                               
                                <CardMedia
                                    component="img"
                                    image={company.logo}
                                    alt={company.name}
                                    sx={{ width: 140, height: 140, objectFit: "contain", padding: 2, margin: '0 auto' }}
                                />

                                
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h6">{company.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        📍 {company.location}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        🏢 {company.industry}
                                    </Typography>
                                </CardContent>

                               
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        href={company.officialWebsite || "#"}
                                        target="_blank"
                                    >
                                        Visit Site
                                        <ArrowOutwardIcon sx={{ fontSize: '0.875rem', ml: 1 }} />
                                    </Button>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {filteredCompanies.length === 0 && (
                    <Typography variant="h4" textAlign="center" sx={{ mt: 4 }}>
                        No companies found
                    </Typography>
                )}
           
            </Container>
           
      </>
  )
}

export default Main