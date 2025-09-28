import { X } from "lucide-react";
import "./storyPanel.css";

export const StoryUserIcon = ({ src, alt }) => (
  <div className="thumbnail">
    <img src={src} alt={alt} />
  </div>
);

const StoryPanel = ({ storyData, close }) => {
  if (!storyData) {
    return <></>;
  }

  return (
    <div className="story-panel">
      <div className="header">
        <StoryUserIcon src={storyData.avatar} alt={storyData.user}/>
        <div onClick={close}>
          <X color='white' />
        </div>
      </div>

      <img src={storyData.stories[0].image} alt="content not available" />
    </div>
  );
};

export default StoryPanel;
