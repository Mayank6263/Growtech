import { useState } from "react";
import Card from "./components/Cards.js";
function App() {
  const user = [
    {
      Img: "https://img.freepik.com/photos-gratuite/peinture-lac-montagne-montagne-arriere-plan_188544-9126.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_593265.jpg",
      date: "7/11/19",
      size: "6.8 mb",
    },
    {
      Img: "https://img.freepik.com/photos-premium/montagnes-nuitgenerative-ai_218381-14190.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_593265.jpg",
      date: "7/27/13",
      size: "3.4 mb",
    },
    {
      Img: "https://img.freepik.com/photos-gratuite/lone-tree_181624-46361.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_461207.jpg",
      date: "5/27/15",
      size: "3.2 mb",
    },
    {
      Img: "https://img.freepik.com/photos-premium/fujinomiya-shizuoka-au-japon_44353-13.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_113410.jpg",
      date: "5/19/12",
      size: "7.6 mb",
    },
    {
      Img: "https://img.freepik.com/photos-gratuite/vue-vieil-arbre-dans-lac-montagnes-couvertes-neige-dans-jour-nuageux_181624-28954.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_773337.jpg",
      date: "5/7/16",
      size: "5.8 mb",
    },
    {
      Img: "https://img.freepik.com/vecteurs-premium/paysage-nuit-fond_126980-47.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_773337.jpg",
      date: "8/15/17",
      size: "7.8 mb",
    },
    {
      Img: "https://img.freepik.com/photos-premium/feuilles_7954-626.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_773337.jpg",
      date: "7/18/17",
      size: "7.6 mb",
    },
    {
      Img: "https://img.freepik.com/photos-premium/beau-coucher-soleil-rochers-long-plage_103127-640.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_773337.jpg",
      date: "10/6/13",
      size: "5.5 mb",
    },
    {
      Img: "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_773337.jpg",
      date: "1/31/14",
      size: "5.7 mb",
    },
    {
      Img: "https://img.freepik.com/photos-gratuite/lac-dans-montagnes_1204-502.jpg?semt=ais_hybrid&w=740",
      filename: "IMG_773337.jpg",
      date: "9/23/16",
      size: "7.2 mb",
    },
    {
      Img: "https://img.freepik.com/photos-gratuite/paysage-lac-coucher-soleil_395237-259.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_654663.jpg",
      date: "11/1/20",
      size: "8.3 mb",
    },
    {
      Img:"https://img.freepik.com/photos-premium/vue-imprenable-nature-fjord-montagnes-beau-reflet-emplacement-montagnes-scandinaves-norvege-image-artistique-monde-beaute_367038-723.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_654863.jpg",
      date: "11/1/20",
      size: "8.3 mb",
    },
    { 
      Img:"https://img.freepik.com/photos-gratuite/vue-imprenable-lac-zugspitze-entoure-forets-eibsee_181624-12052.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_854663.jpg",
      date: "11/1/20",
      size: "8.3 mb",
    },
    { 
      Img:"https://img.freepik.com/photos-premium/vue-panoramique-du-lac-montagnes-enneigees-contre-ciel-au-coucher-du-soleil_1048944-9611697.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_954663.jpg",
      date: "11/1/20",
      size: "8.3 mb",
    },
    { 
      Img:"https://img.freepik.com/photos-gratuite/beau-paysage-naturel-arc-ciel_23-2150169057.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_774663.jpg",
      date: "11/1/20",
      size: "8.3 mb",
    },
    { 
      Img:"https://img.freepik.com/photos-premium/vue-panoramique-montagnes-enneigees-contre-ciel-nuit_1048944-19748039.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_3454663.jpg",
      date: "11/1/20",
      size: "8.3 mb",
    },
    { 
      Img:"https://img.freepik.com/photos-gratuite/belle-photo-petit-lac-bateau-rames-bois-vue-nuages-couper-souffle-dans-ciel_181624-2490.jpg?ga=GA1.1.2015574803.1749892283&semt=ais_hybrid&w=740",
      filename: "IMG_654663.jpg",
      date: "11/1/20",
      size: "8.3 mb",
    },
    
  ];
  const [data, setdata] = useState(user);
  return (
    <div className="cntainer">
    <div className="app-container">
      {data.map((item, index) => (
        <div key={index}>
          <Card mydata={item} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
