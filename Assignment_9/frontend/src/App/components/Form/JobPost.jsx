
import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

export default function JobPost({ jobPosts }) {
    return (
        <Box sx={{ padding: '20px' }}>
            <Grid container spacing={4}>
                {/* Loop through the jobPosts and create a card for each job */}
                {jobPosts.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                        <Card
                            sx={{
                                backgroundColor: '#FFFBE6', // Light yellow for card background
                                borderRadius: '10px',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <CardContent>
                                {/* Job Title */}
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {job.title}
                                </Typography>
                                {/* Job Description */}
                                <Typography variant="body2" gutterBottom>
                                    {job.description}
                                </Typography>
                                {/* Last Updated */}
                                <Typography
                                    variant="caption"
                                    sx={{ display: 'block', marginBottom: '10px' }}
                                >
                                    {job.lastUpdated}
                                </Typography>
                                {/* Apply Button */}
                                <Button
                                    href={job.applyLink}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#E3D392', // Slightly darker yellow for button
                                        color: '#333',
                                    }}
                                >
                                    Apply Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

