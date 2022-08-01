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

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
      contrastText: '#000',
    },
    secondary: {
      main: '#5583de',
      contrastText: '#fff',
    },
  },
});



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
          <Grid container spacing={5} sx={{ borderBottom:60, borderColor: ' #62A2FF'}} >
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