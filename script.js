let gifts = [
  { message: "Venti from Genshin Impact, always brings joy and adventure!", image: "venti_image_url" },
  { message: "A cute boba tea to make your day sweeter!", image: "boba_tea_image_url" },
  { message: "A baby cat that will melt your heart with cuteness!", image: "baby_cat_image_url" },
  { message: "A birthday cake because every day with you is a celebration!", image: "birthday_cake_image_url" }
];

let currentGift = 0;

function unwrapGift() {
  if (currentGift < gifts.length) {
    document.getElementById('message').innerText = gifts[currentGift].message;
    document.getElementById('giftImg').src = gifts[currentGift].image;
    document.getElementById('giftImage').classList.remove('hidden');
    currentGift++;
  } else {
    document.getElementById('message').innerText = "The last gift is the best one! 💌";
    document.getElementById('giftBox').style.display = "none"; // Hide gift box when all gifts are opened
  }
}
