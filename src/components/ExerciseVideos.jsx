import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
   // if (!exerciseVideos.length) return "loading";

   return (
      <Box sx={{ mt: { lg: "200px", xs: "20px" }, p: "30px 0" }}>
         <Typography variant="h3" mb="33px" textTransform="capitalize">
            Watch <span style={{ color: "#ff2625" }}>{name} </span>
            exercise vidoes
         </Typography>
         <Stack
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
            sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
         >
            {exerciseVideos?.slice(0, 6).map((item, index) => (
               <a
                  href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="exercise-video"
               >
                  <img
                     src={item.video.thumbnails[0].url}
                     alt={item.video.title}
                  />
                  <Box>
                     <Typography variant="h4" color="#000">
                        {item.video.title}
                     </Typography>
                     <Typography variant="h6" color="#000">
                        {item.video.channelName}
                     </Typography>
                  </Box>
               </a>
            ))}
         </Stack>
      </Box>
   );
};

export default ExerciseVideos;
