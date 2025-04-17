import { configureStore } from "@reduxjs/toolkit";
import podcastCounterSlice from "@/redux/slices/podcastSlice";
import episodeCounterSlice from "@/redux/slices/episodeSlice";
import searchCounterSlice from "@/redux/slices/searchSlice";
import searchCountSlice from "@/redux/slices/searchCountSlice";
import podcastEpisodeCounterSlice from "@/redux/slices/podcastEpisode";
import latestEpisodesCounterSlice from "@/redux/slices/latestEpisode";

export const store = configureStore({
  reducer: {
    podcast: podcastCounterSlice,
    episode: episodeCounterSlice,
    search: searchCounterSlice,
    podcastEpisode: podcastEpisodeCounterSlice,
    latestEpisode: latestEpisodesCounterSlice,
    searchCount: searchCountSlice,
  },
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
