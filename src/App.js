import "./App.css";

const firstproduct = {
  image:
    /* "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71cFpnm0b6S._AC_UL320_.jpg"*/
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/7172Ozg1beL._AC_UL320_.jpg",
  brandname: "ACCOX",
  description:
    "Men's Full Long Sleeves Regular Fit Cotton Formal Checkred shirt",
  price: "INR 499",
};
const secondproduct = {
  image: "https://m.media-amazon.com/images/I/71qFKjYNX6L._AC_UL320_.jpg",
  brandname: "IndoPrimo",
  description: "Men's Regular Fit Casual Shirt",
  price: "INR 799",
};
const thirdproduct = {
  image:
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61pO4foNB9L._AC_UL320_.jpg",
  brandname: "Molimen",
  description: "Cotton Men's Casual Kurta for Men with Full Sleeve Shirt",
  price: "INR 499",
};
const fourthproduct = {
  image:
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/A1Eq7dA3HUL._AC_UL320_.jpg",
  brandname: "Park Avenue",
  description: "Men's Full Long Sleeves Regular Skinny Fit Shirt",
  price: "INR 839",
};
const fifthproduct = {
  image:
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61+8RQWEZKL._AC_UL320_.jpg",
  brandname: "Generic",
  description: "New RR Cloth Store'sFull Shirt",
  price: "INR 300",
};
const sixthproduct = {
  image:
    "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41K8J6J3fUL._AC_UL320_.jpg",
  brandname: "XPIOR",
  description: " Regular Fit Shirt for Men Casual",
  price: "INR 499",
};
function App() {
  return (
    <div className="Shirtcollection">
      <h2 className="Title">SHIRT COLLECTIONS</h2>
      <Model />
    </div>
  );
}
function Offer1() {
  return alert("Today offer only INR 299.. Don't Miss it.. ");
}
function Offer() {
  return alert("Today offer only INR 599.. Don't Miss it.. ");
}
function Model() {
  return (
    <main className="Store">
      <Brandname
        image={firstproduct.image}
        brandname={firstproduct.brandname}
        description={firstproduct.description}
        price={firstproduct.price}
      />
      <button className="deal1" onClick={Offer1}>
        Deal of the day
      </button>
      <Brandname
        image={secondproduct.image}
        brandname={secondproduct.brandname}
        description={secondproduct.description}
        price={secondproduct.price}
      />
      <Brandname
        image={thirdproduct.image}
        brandname={thirdproduct.brandname}
        description={thirdproduct.description}
        price={thirdproduct.price}
      />

      <Brandname
        image={fourthproduct.image}
        brandname={fourthproduct.brandname}
        description={fourthproduct.description}
        price={fourthproduct.price}
      />
      <Brandname
        image={fifthproduct.image}
        brandname={fifthproduct.brandname}
        description={fifthproduct.description}
        price={fifthproduct.price}
      />
      <button className="deal" onClick={Offer}>
        Deal of the day
      </button>

      <Brandname
        image={sixthproduct.image}
        brandname={sixthproduct.brandname}
        description={sixthproduct.description}
        price={sixthproduct.price}
      />
    </main>
  );
}
function Brandname(props) {
  return (
    <section className="Product">
      <img className="Image" src={props.image} alt="" />
      <h2 className="Brandname">{props.brandname} </h2>
      <h3 className="Description">{props.description} </h3>
      <h2 className="Price">{props.price} </h2>
    </section>
  );
}

export default App;
