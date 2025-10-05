import ScrollAnimation from "../components/ScrollAnimation.jsx";
import ImageTextCard from "../components/ImageTextCard.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollAnimation />
      <ImageTextCard
        titleText={"Technológia és infrastruktúra"}
        imgOnLeft={true}
        img={"/technologia.jpg"}
        pText={
          "Gyors, stabil hálózat biztosítja a működést, 5G-vel és WiFi 6E-vel, AI-alapú biztonsági \n"+
          "megoldásokkal. Minden adminisztráció digitálisan zajlik, papír nélkül, felhőalapú tárolással\n"+
          "Mesterséges intelligencia elemzi az adatokat, robotok és drónok segítik a mindennapokat\n" +
          "Okoseszközök irányítják a világítást, a hőmérsékletet és a belső folyamatokat"
        }
      />
      <ImageTextCard
        titleText={"Kutatás és innováció"}
        imgOnLeft={false}
        img={"/kutatas.jpg"}
        pText={
          "Korszerű laborokban és tesztkörnyezetekben zajlik a munka, VR és nanotechnológia \n"+
          "támogatásával. Gyors prototípusgyártásra 3D nyomtatás és digitális gépek állnak \n"+
          "rendelkezésre. Startupok számára mentorok, befektetők és közösségi terek kínálnak támogatást."
        }
      />
      <ImageTextCard
        titleText={"Emberközpontúság"}
        imgOnLeft={true}
        img={"/emberkozpontusag.jpg"}
        pText={
          "Rugalmas munkakörnyezet várja a felhasználókat coworking irodákkal, nyugodt zónákkal és\n"+
          "hibrid lehetőségekkel. Az oktatás modern formában történik: VR-szimulációk, e-learning és\n"+
          "játékosított tanulás. A különböző területek szakemberei közösen dolgoznak a projektekben."
        }
      />
      <ImageTextCard
        titleText={"Példák high-tech intézményekre"}
        imgOnLeft={false}
        img={"/pelda(utolso).jpg"}
        pText={
          "MIT Media Lab az USA-ban, a Fraunhofer Intézetek Németországban, az Apple Park \n" +
          "Kaliforniában, valamint a legmodernebb okoskórházak Szingapúrban."
        }
      />
      <Footer />
    </div>
  );
}

export default App;
