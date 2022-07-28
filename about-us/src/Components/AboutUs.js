import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './MainFeaturedPost.js';
import Main from './Main.js';
import { /*TextField,*/ Typography } from '@mui/material';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const sections = [
  // { title: 'Technology', url: '#' },
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
];

<Typography>About Us</Typography>

const mainFeaturedPost = {
  title: 'About Us',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'data:image/jpeg;base64,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',
  imageText: 'need an image here',
};
 
// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
// ];

// const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

const theme = createTheme();



export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="About Us" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            { {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} }
          </Grid> */}
          <Grid container spacing={5} sx={{ borderBottom:60, borderColor: 'white'}} >
            <Main title="“Our mission as an organization is to serve our neighbors as expert, caring partners in their health. We do this by creating innovative, effective, affordable systems of care that our neighbors value. This is our promise to you. We call it The ChristianaCare Way.”"/>
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
            <Button
            href='#'
            fullWidth
            sx={{ mt: 2 }}
            variant='contained'
            color='primary'>
              Back to My Account
            </Button>
            <Button
            href='#'
            fullWidth
            sx={{ mt: 1 }}
            variant='contained'
            color='primary'>
              Back to Home
            </Button>
          </Grid>
        </main>
      </Container>      
    </ThemeProvider>
  );
}