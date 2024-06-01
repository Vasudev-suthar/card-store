import React from 'react';
import './App.css'
import Card from './components/card';

const cardData = [
  { id: 1, cardName: "Card 1", image: "https://cdn.ebaumsworld.com/mediaFiles/picture/1961176/81660963.jpg" },
  { id: 2, cardName: "Card 2", image: "https://img.freepik.com/premium-photo/random-best-photo_865967-224191.jpg" },
  { id: 3, cardName: "Card 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUl9oX_yULU2PCq0Cv8tosX_wGeYnUCBBegg&s" },
  { id: 4, cardName: "Card 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsx7rxjKkQdlDXk3gOSN_iG9tPYIQ55JSgeQ&s" },
  { id: 5, cardName: "Card 5", image: "https://i.pinimg.com/236x/fc/c5/5e/fcc55eb97f9e22065a9a6a88dc982d85.jpg" },
  { id: 6, cardName: "Card 6", image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
  { id: 7, cardName: "Card 7", image: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717113600&semt=sph" },
  { id: 8, cardName: "Card 8", image: "https://static.vecteezy.com/system/resources/previews/022/448/291/non_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg" },
  { id: 9, cardName: "Card 9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s" },
  { id: 10, cardName: "Card 10", image: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg" },
  { id: 11, cardName: "Card 11", image: "https://static.toiimg.com/thumb/msid-70784314,width-400,resizemode-4/70784314.jpg" },
  { id: 12, cardName: "Card 12", image: "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg" }
];


function App() {

  return (
    <>
      <h1 className='h1'>All the cards are here.</h1>
      <div className='card-box'>
        {cardData.map(card => (
          <Card key={card.id} cardName={card.cardName} image={card.image} />
        ))}
      </div>
    </>
  )
}

export default App
