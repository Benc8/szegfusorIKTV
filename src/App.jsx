import ScrollAnimation from "../components/ScrollAnimation.jsx";
import ImageTextCard from "../components/ImageTextCard.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollAnimation />
      <ImageTextCard
        titleText={"ecsedi"}
        imgOnLeft={true}
        img={"/technologia.jpg"}
        pText={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus\n" +
          "          ad doloribus eveniet explicabo ipsum minus nulla saepe sapiente sed."
        }
      />
      <ImageTextCard
        titleText={"ecsedi"}
        imgOnLeft={false}
        img={"/kutatas.jpg"}
        pText={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus\n" +
          "          ad doloribus eveniet explicabo ipsum minus nulla saepe sapiente sed."
        }
      />
      <ImageTextCard
        titleText={"ecsedi"}
        imgOnLeft={true}
        img={"/emberkozpontusag.jpg"}
        pText={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus\n" +
          "          ad doloribus eveniet explicabo ipsum minus nulla saepe sapiente sed."
        }
      />
      <ImageTextCard
        titleText={"ecsedi"}
        imgOnLeft={false}
        img={"/pelda(utolso).jpg"}
        pText={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus\n" +
          "          ad doloribus eveniet explicabo ipsum minus nulla saepe sapiente sed."
        }
      />
      <Footer />
    </div>
  );
}

export default App;
