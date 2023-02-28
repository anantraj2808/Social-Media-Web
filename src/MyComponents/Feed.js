import {
  Box
} from "@mui/material";
import React from "react";
import FeedItem from "./FeedItem";

const Feed = () => {
  return (
    <Box flex={5} p={2}>
      <FeedItem image="https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
      <FeedItem image="https://images.unsplash.com/photo-1597423243847-6a62e5dce477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
      <FeedItem image="https://images.unsplash.com/photo-1677552929439-082dabf4e88f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <FeedItem image="https://images.unsplash.com/photo-1677435783271-d7e9a0bf5755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
    </Box>
  );
};

export default Feed;
