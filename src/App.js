import TypeWriter from "typewriter-effect";
import { Typography, Grid, IconButton, Card, CardContent, Link, CardMedia, Box } from '@mui/material';
import { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import avatar from "./avatar.jpg";
function App() {
  const [complete, setComplete] = useState(false);
  return (<Grid
    style={{ background: 'linear-gradient(#e66465, #9198e5)', height: '100vh' }}
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Card sx={{ background: "rgba(27, 31, 34, 0.85)", width: "60vw", height: "60vh", color: "#ffffff", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" sx={{ width: "8vw", height: "8vw", margin: "15px", borderRadius: "50%" }} image={avatar} />

      <CardContent sx={{ flex: '1 0 auto' }}>

        <Typography component="div" variant="h5" display="flex">
          <TypeWriter onInit={(tw) => {
            tw.changeDelay(50).typeString(`Hi, I'm Hiep Trinh. I'm a sophomore majoring CS at Miami University.<br /><br />
            I play <a href="https://leetcode.com/clonemasterUwU/">competitive programming</a> for fun while 
            dipping my toes in traditional CS fields (<a href="https://github.com/clonemasterUwU/anothersql">database</a>, 
            <a href="https://github.com/clonemasterUwU/cse474">compiler</a>, ) as well as 
            <a href="https://github.com/clonemasterUwU/cse201">web programming </a>.<br /><br />
            Thanks for reading. Let's connect.`).start().callFunction((e) => {
              e.elements.cursor.style.animation = 'none'
              e.elements.cursor.style.display = 'none'
              setComplete(true)
            });
          }} />

        </Typography>
      </CardContent>
      {complete && <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 1, pb: 1 }}>
        <Link href="https://www.linkedin.com/in/hi%E1%BB%87p-tr%E1%BB%8Bnh-kh%C3%A1nh-9b9098190/">
          <IconButton>
            <LinkedInIcon fontSize="large" color="primary" />
          </IconButton>
        </Link>
        <Link href="https://github.com/clonemasterUwU">
          <IconButton>
            <GitHubIcon fontSize="large" color="primary" />
          </IconButton>
        </Link>
        <Link href="mailto:hiep.trinhkhanh0466@gmail.com">
          <IconButton>
            <EmailIcon fontSize="large" color="primary" />
          </IconButton>
        </Link>
      </Box>
      }
    </Card>
  </Grid>
  );
}

export default App;
