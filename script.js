let gifts = [
  { message: "Venti from Genshin Impact, always brings joy and adventure!", image: "venti_image_url" },
  { message: "A cute boba tea to make your day sweeter!", image: "boba_tea_image_url" },
  { message: "A baby cat that will melt your heart with cuteness!", image: "baby_cat_image_url" },
  { message: "A birthday cake because every day with you is a celebration!", image: "data:image/jpeg;base64,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" }
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
