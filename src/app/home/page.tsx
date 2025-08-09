import Introduction from "@/components/home/introduction";
import About from "@/components/home/about";
import Features from "@/components/home/features";
import Articles from "@/components/home/articles";

const Home = () => {
  return (
    <div>
      <div className="bg-accent">
        <Introduction />
      </div>
      <div className="bg-primary">
        <About />
      </div>
      <div className="bg-accent">
        <Features />
      </div>
      <div className="bg-accent">
        <Articles />
      </div>
    </div>
  );
};

export default Home;
