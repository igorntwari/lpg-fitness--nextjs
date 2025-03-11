import classNames from "classnames";
import { montserrat } from "../assets";
import StoryListItem from "@/components/story-list-item";
import BackgroundShapes from "@/components/background-shapes";

export interface Story {
  id: number;
  name: string;
  story: string;
  image: string;
}

const StoriesArray: Story[] = [
  {
    id: 0,
    name: "Derek",
    story:
      "Derek improved his strength and endurance significantly at LPG Fitness",
    image:
      "https://images.unsplash.com/flagged/photo-1576579206905-df3aa87352b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzcyUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    name: "Isabella",
    story: "Isabella reached her fitness milestones at LPG Fitness",
    image:
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "John",
    story:
      "John gained 10 pounds of lean muscle through our specialized program",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Sophia",
    story:
      "Sophia improved her fitness and discovered a passion for wellness at LPG Fitness",
    image:
      "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3MlMjBnaXJsfGVufDB8fDB8fHww",
  },
];

export default function Stories() {
  const displayStories = StoriesArray.map((story) => (
    <StoryListItem key={story.id} {...story} />
  ));

  return (
    <section className="py-5 md:py-16" id="stories">
      <div className="space-y-5 relative">
        <BackgroundShapes />
        <h1
          className={classNames(
            montserrat.className,
            "font-medium text-2xl text-center relative",
          )}
        >
          Success Stries
        </h1>
        <p className="text-center relative">
          Be inspired by the transformational journeys of our members at LPG
          Fitness
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4">
          {displayStories}
        </div>
      </div>
    </section>
  );
}
