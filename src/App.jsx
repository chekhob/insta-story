import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScrollPanel from "./scroll_panel/scrollPanel";
import StoryPanel from "./story_panel/storyPanel";

const data = [
  {
    id: 1,
    user: "alice_photos",
    avatar: "https://picsum.photos/60/60?random=1",
    stories: [
      {
        id: 1,
        image: "https://picsum.photos/400/700?random=1",
        timestamp: "2h",
      },
      {
        id: 2,
        image: "https://picsum.photos/400/700?random=2",
        timestamp: "1h",
      },
    ],
  },
  {
    id: 2,
    user: "travel_bob",
    avatar: "https://picsum.photos/60/60?random=3",
    stories: [
      {
        id: 3,
        image: "https://picsum.photos/400/700?random=4",
        timestamp: "30m",
      },
      {
        id: 4,
        image: "https://picsum.photos/400/700?random=5",
        timestamp: "15m",
      },
      {
        id: 5,
        image: "https://picsum.photos/400/700?random=6",
        timestamp: "5m",
      },
    ],
  },
  {
    id: 3,
    user: "foodie_sara",
    avatar: "https://picsum.photos/60/60?random=7",
    stories: [
      {
        id: 6,
        image: "https://picsum.photos/400/700?random=8",
        timestamp: "3h",
      },
    ],
  },
  {
    id: 4,
    user: "fitness_mike",
    avatar: "https://picsum.photos/60/60?random=9",
    stories: [
      {
        id: 7,
        image: "https://picsum.photos/400/700?random=10",
        timestamp: "4h",
      },
      {
        id: 8,
        image: "https://picsum.photos/400/700?random=11",
        timestamp: "2h",
      },
    ],
  },
  {
    id: 5,
    user: "art_emma",
    avatar: "https://picsum.photos/60/60?random=12",
    stories: [
      {
        id: 9,
        image: "https://picsum.photos/400/700?random=13",
        timestamp: "6h",
      },
    ],
  },
];

function App() {
  const [viewedStories, setViewedStories] = useState([]); // Will add later

  const [storySelected, setStorySelected] = useState(null);
  const onIconClick = (index) => {
    console.log(data[index]);
    setStorySelected(data[index]);
  };

  const onExitPanel = () => {
    setStorySelected(null);
  };

  return (
    <>
      <div>
        {!storySelected ? (
          <ScrollPanel data={data} onIconClick={onIconClick} />
        ) : (
          <StoryPanel storyData={storySelected} close={onExitPanel} />
        )}
      </div>
    </>
  );
}

export default App;
