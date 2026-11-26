/* =========================================================
   UNKNOWN SMILING GIRL — EPISODE 1
   Written by Smilie K.
   Complete approved PDF script & verified image sequence
   ========================================================= */

const ASSETS = {
  bedroomMorning: "assets/image-3.jpg",   // Scene 1
  livingAlone:    "assets/image-7.jpg",   // Scene 2 (start), Scene 3, Scene 4 (start)
  livingMumma:    "assets/image-12.jpg",  // Scene 2 (Mumma joins), Scene 6 (start)
  livingFamily:   "assets/image-9.jpg",   // Scene 2 (Papa enters), Scene 4 (Papa at table), Scene 6 (debate)
  ruhiArriving:   "assets/image-8.jpg",   // Scene 5 (beat 1)
  ruhiBedroom:    "assets/image-10.jpg",  // Scene 5 (beat 2)
  teepeeDrawing:  "assets/image-11.jpg",  // Scene 5 (beat 3)
  schoolEntrance: "assets/image-4.jpg"    // Episode 2 Teaser
};

/* Optional PixVerse video support:
   When you have PixVerse clips, add `video: "assets/clip-name.mp4"` to any beat below. */

const STORY_BEATS = [
  // =======================================================
  // SCENE 1 — THE SLEEPY MORNING
  // =======================================================
  {
    sceneNum: 1,
    sceneTitle: "Scene 1 — The Sleepy Morning",
    showTitleCard: true,
    image: ASSETS.bedroomMorning,
    alt: "Aarvi sleeping peacefully in her sunlit bedroom",
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: null,
    text: "It was a beautiful Sunday morning. Sunlight gently filled a little girl's colourful bedroom. Surrounded by her favourite toys, teddy bears and soft pillows, Aarvi was sleeping peacefully."
  },
  {
    sceneNum: 1,
    sceneTitle: "Scene 1 — The Sleepy Morning",
    image: ASSETS.bedroomMorning,
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: null,
    text: "From outside her room, Mumma called out."
  },
  {
    sceneNum: 1,
    sceneTitle: "Scene 1 — The Sleepy Morning",
    image: ASSETS.bedroomMorning,
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Aarvi, wake up! It's morning and the sun is already up!"
  },
  {
    sceneNum: 1,
    sceneTitle: "Scene 1 — The Sleepy Morning",
    image: ASSETS.bedroomMorning,
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Then tell the sun to stop showing off! It's Sunday. Even the sun should take a holiday!"
  },
  {
    sceneNum: 1,
    sceneTitle: "Scene 1 — The Sleepy Morning",
    image: ASSETS.bedroomMorning,
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Oh really? Now the sun has to take permission from you before waking up?"
  },
  {
    sceneNum: 1,
    sceneTitle: "Scene 1 — The Sleepy Morning",
    image: ASSETS.bedroomMorning,
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Yes! At least on Sundays!"
  },
  {
    sceneNum: 1,
    sceneTitle: "Scene 1 — The Sleepy Morning",
    image: ASSETS.bedroomMorning,
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: null,
    text: "And just like that, another Sunday morning began in Aarvi's little world."
  },

  // =======================================================
  // SCENE 2 — DORA COMES FIRST!
  // =======================================================
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    showTitleCard: true,
    image: ASSETS.livingAlone,
    alt: "Aarvi sitting on the sofa watching Dora the Explorer",
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "Aarvi was sitting comfortably in the living room, completely absorbed in Dora the Explorer."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "From the kitchen, Mumma called out."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Aarvi, what are you doing?"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "No response."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Aarvi! Did you brush your teeth?"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "Still no response."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "Her voice grew louder."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "AARVI!! I'm asking you something!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Aarvi",
    text: "Yes, Mumma! I'm listening!"
  },
  // Mumma joins Aarvi -> Image 12
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingMumma,
    alt: "Mumma with Aarvi in the living room in front of the television",
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "Mumma came out of the kitchen and walked towards the living room."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Oh, really? Dora asks you something, and you answer immediately. But when I'm asking you questions, you don't even respond! I'm standing right here!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "Aarvi continued watching Dora."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "No response."
  },
  // Papa enters -> Image 9
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    alt: "Aarvi, Mumma, and Papa in the living and dining area",
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Just then, Papa entered the living room."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Calm down. It's early morning. Why are you getting so angry?"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "But look at her!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Oh, she's a child."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "And this child is going to make me mad one day! Look at her answering Dora and ignoring me completely, as if Dora is standing right in front of her and I'm not even here!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi suddenly turned around."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Actually, Mumma, good idea! What if one day Dora suddenly comes out of the TV with all her friends? Wooooow! That would be so exciting!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "She clapped her hands."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Imagine! We could all go together on an adventure!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Mumma looked at Papa, then back at Aarvi."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Oh, wonderful! And while you're busy going on adventures with Dora, who do you think will brush your teeth, give you breakfast and get you ready?"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Come on, Mumma! Of course, I'll take you with me! I can't stay without you. I'm not like my brother. Look at him! He went to Mama's home because he doesn't love you. But I do! That's why I'm here with you!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Papa turned his face away, trying to hide his smile."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Hmm… that's quite a big declaration of love!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Oh really? Then show me your love by brushing your teeth right now! Last warning, Aarvi. Get up and go brush your teeth, otherwise I'll hide the remote. Don't come crying to me later!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi's face dropped."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "No one cares for me! Fine! I'm going!"
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "She slowly got up from the sofa. Before leaving, she turned back once to check whether Mumma was watching."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Mumma raised an eyebrow."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi quickly turned around and marched towards the bathroom, muttering under her breath."
  },
  {
    sceneNum: 2,
    sceneTitle: "Scene 2 — Dora Comes First!",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Nobody understands me…"
  },

  // =======================================================
  // SCENE 3 — A LITTLE KETCHUP TREAT
  // =======================================================
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    showTitleCard: true,
    image: ASSETS.livingAlone,
    alt: "The living room where Aarvi watches Dora the Explorer on the sofa",
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "After brushing her teeth, Aarvi came out of the bathroom and walked towards the dining table."
  },
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    image: ASSETS.livingAlone,
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "There, sitting beside the plates, was her favourite ketchup bottle."
  },
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    image: ASSETS.livingAlone,
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "She looked at it, then glanced around to make sure nobody was watching."
  },
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    image: ASSETS.livingAlone,
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "A little smile appeared on her face."
  },
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    image: ASSETS.livingAlone,
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "Without making a sound, she picked up the bottle and tiptoed towards the living room."
  },
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    image: ASSETS.livingAlone,
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "She settled herself comfortably on the sofa, switched on the television and found Dora."
  },
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    image: ASSETS.livingAlone,
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "A few moments later, she was happily watching her favourite show, squeezing ketchup straight from the bottle."
  },
  {
    sceneNum: 3,
    sceneTitle: "Scene 3 — A Little Ketchup Treat",
    image: ASSETS.livingAlone,
    camClass: "cam-ketchup",
    fx: "tv",
    speaker: null,
    text: "For Aarvi, it was a perfect little treat!"
  },

  // =======================================================
  // SCENE 4 — BREAKFAST ADVENTURES
  // =======================================================
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    showTitleCard: true,
    image: ASSETS.livingAlone,
    alt: "Aarvi sitting on the sofa with Solocate nearby",
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "Aarvi was comfortably sitting on the sofa, watching Dora the Explorer with her favourite ketchup bottle."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "From the dining area, Mumma called out."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Aarvi! What are you doing? Stuck to the television again? Come on, it's breakfast time!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Aarvi",
    text: "Okay, Mumma!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingAlone,
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "But she didn't move."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    alt: "Mumma, Aarvi, and Papa in the living and dining room",
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "A little later, Mumma entered the living room carrying a plate of sandwiches and pastries. Papa was already sitting at the dining table with his morning tea."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "As Mumma approached the sofa, she noticed something suspicious in Aarvi's hands."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Aarvi! What's that you're hiding?"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi quickly held Solocate in front of the ketchup bottle, trying to hide it."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Nothing, Mumma! It's just Solocate!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Papa looked over."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Oh, so Solocate has been eating ketchup too?"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Yesss! He's hungry!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Mumma noticed the ketchup stains around Aarvi's mouth."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Really? Then why is there ketchup all over your face?"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Yeah, right! It's him, not me! It's not my fault. It's my mouth's fault!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Oh! So now your mouth is responsible for everything?"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Yesss! See, Papa understands me!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Mumma shook her head."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Very clever! Now come on, go and sit at the dining table. It's time for breakfast."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "No, no, no! It's Sunday. I'll eat here!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "No, Aarvi. It's bad manners to eat on the sofa."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Sometimes it's okay to do some bad manners, Mumma! Please, please, please! Just this time, please!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Papa joined in."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Come on, it's Sunday. Let her enjoy breakfast here just for today."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Mumma looked at Aarvi."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Fine! Only today. Don't make this a habit!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi's face immediately lit up."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Yeahhh! Okay! I love you, Mumma! You're the best!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "And what about me?"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "I love you too, Papa! But Mumma is the best today!"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Only today?"
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi giggled."
  },
  {
    sceneNum: 4,
    sceneTitle: "Scene 4 — Breakfast Adventures",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "And so, breakfast continued with sandwiches, pastries, cartoons and a little family teasing."
  },

  // =======================================================
  // SCENE 5 — OUR FUTURE HOUSE
  // =======================================================
  // Beat 1: Ruhi arriving -> Image 8
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    showTitleCard: true,
    image: ASSETS.ruhiArriving,
    alt: "Ruhi and Aarvi holding hands at the open doorway",
    camClass: "cam-morning",
    fx: "sunbeams",
    speaker: null,
    text: "Later that afternoon, Ruhi came over to spend some time with Aarvi."
  },
  // Beat 2: Entering Aarvi's bedroom -> Image 10
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.ruhiBedroom,
    alt: "The two girls entering Aarvi's pink bedroom",
    camClass: "cam-teepee",
    fx: "teepee",
    speaker: null,
    text: "The two friends were sitting together in Aarvi's bedroom when Aarvi excitedly showed Ruhi a drawing."
  },
  // Beat 3: Looking at the future-house drawing -> Image 11 (with interactive drawing highlight)
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    alt: "Aarvi and Ruhi looking at their drawing of a house inside the lit teepee",
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "Look! This is our house!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Ruhi",
    text: "Our house? When did we buy a house?"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "We'll buy it together when we grow up!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Ruhi",
    text: "Ohhh! Then where will my room be?"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "We'll have a room for each of us. But we'll still sleep together in one room, okay? I'm scared of the dark."
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Ruhi",
    text: "Come on, Aarvi! Don't be scared. Be strong!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "I'm strong, but still…"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Ruhi",
    text: "Okay, fine! We'll live together."
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: null,
    text: "Aarvi looked at her drawing with excitement."
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "Ruhi, it'll be so much fun when we grow up! We'll have our own house and money. Then we can buy lots of chocolates, toys and so many things! I really want to grow older!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Ruhi",
    text: "Actually, yeah! How about we go to sleep tonight and tomorrow morning we're suddenly big girls?"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "Ooooh, yeah! Then we can go out by ourselves!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Ruhi",
    text: "And we won't have to study, carry those heavy school bags or do homework! We can rest all day long!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "Adults really have so much fun in their lives! I'll frame this drawing, and when we grow up, we'll build a house just like this!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Ruhi",
    text: "Right! And give one to me as well. I'll frame it too!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: "Aarvi",
    text: "Okay!"
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: null,
    text: "The two girls looked at their drawing, imagining the little house they would one day build together."
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: null,
    text: "Neither of them knew what growing up would really bring."
  },
  {
    sceneNum: 5,
    sceneTitle: "Scene 5 — Our Future House",
    image: ASSETS.teepeeDrawing,
    camClass: "cam-teepee",
    fx: "teepee",
    showDrawingHotspot: true,
    speaker: null,
    text: "But for now, their plan was perfect."
  },

  // =======================================================
  // SCENE 6 — THE ICE CREAM DEBATE
  // =======================================================
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    showTitleCard: true,
    image: ASSETS.livingMumma,
    alt: "Aarvi and Mumma together in the living room",
    camClass: "cam-living",
    fx: "tv",
    speaker: null,
    text: "After Ruhi left, Aarvi went looking for Mumma."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Aarvi",
    text: "Mummaaaaaaa!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Yes, Aarvi? What happened?"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Aarvi",
    text: "You know what? You are the best Mumma in the world!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Oh really? So what do you want from this best Mumma in the world?"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Aarvi",
    text: "Nothing much. Just a scoop of ice cream! 😁"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Oh, but I can't."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Aarvi",
    text: "Why, Mumma? It's Sunday!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "Yeah, but it's winter too. And you ate pastry in the morning. It's sweet, so no more sweets."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Aarvi",
    text: "Mumma, please!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingMumma,
    camClass: "cam-living",
    fx: "tv",
    speaker: "Mumma",
    text: "No, Aarvi."
  },
  // Aarvi turns towards Papa -> Image 9
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    alt: "Aarvi, Mumma, and Papa together at home",
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi turned towards Papa."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Papa! Tell Mumma to let me eat ice cream!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "No, Aarvi. It's cold already. If you eat ice cream, you'll catch a cold."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Please, Papa! Please!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "No, Aarvi. It's for your good."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Aaaaaaaaaaa!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "She folded her arms in frustration."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Fine! Don't give me any! When I'm grown up, I'll purchase a big mountain of ice cream!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Mumma looked at her and replied mischievously."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Okay, you know what? You can do it right now as well."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Really, Mumma? How?"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Mumma",
    text: "Go to sleep and see a dream!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "Aaaaaa! You're making fun of me! I'm not talking to both of you! I'm going!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Aarvi marched towards her room, still annoyed."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Papa looked at Mumma."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Papa",
    text: "Well, I think we've officially lost her!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Mumma laughed."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "From the hallway, Aarvi shouted:"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: "Aarvi",
    text: "I CAN STILL HEAR YOU!"
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "Papa burst into laughter."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "For Aarvi, it had been a perfect Sunday — cartoons, pastries, her best friend, big dreams and, of course, a little family drama."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "She had no idea how many things would change as she grew older."
  },
  {
    sceneNum: 6,
    sceneTitle: "Scene 6 — The Ice Cream Debate",
    image: ASSETS.livingFamily,
    camClass: "cam-living",
    fx: "sunbeams",
    speaker: null,
    text: "But that little Sunday would always remain one of her childhood memories."
  },

  // =======================================================
  // EPISODE 2 TEASER — RAINBOW VALLEY SCHOOL
  // =======================================================
  {
    isTeaser: true,
    sceneNum: 7,
    sceneTitle: "Episode 2 Teaser — Rainbow Valley School",
    showTitleCard: true,
    image: ASSETS.schoolEntrance,
    alt: "Morning view of Rainbow Valley School entrance with closed gate and OPEN sign",
    camClass: "cam-school",
    fx: "school",
    speaker: null,
    text: ""
  }
];

/* =========================================================
   STATE & DOM ELEMENTS
   ========================================================= */
let currentIndex = 0;
let currentImageUrl = "";
let titleOverlayActive = false;
const imageAspectCache = new Map();

const body = document.body;
const memoryWallView = document.getElementById("memory-wall-view");
const storyView = document.getElementById("story-view");
const openEp1Btn = document.getElementById("open-episode-1-btn");
const backToWallBtn = document.getElementById("back-to-wall-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

const stageBackdrop = document.getElementById("stage-backdrop");
const stageViewport = document.getElementById("stage-viewport");
const artFrame = document.getElementById("art-frame");
const sceneImage = document.getElementById("scene-image");
const sceneVideo = document.getElementById("scene-video");
const sceneBadgeText = document.getElementById("scene-badge-text");

const sceneTitleOverlay = document.getElementById("scene-title-overlay");
const overlayEpisodeLabel = document.getElementById("overlay-episode-label");
const overlaySceneTitle = document.getElementById("overlay-scene-title");

const storyHud = document.getElementById("story-hud");
const dialogueCard = document.getElementById("dialogue-card");
const speakerPill = document.getElementById("speaker-pill");
const lineCounter = document.getElementById("line-counter");
const dialogueText = document.getElementById("dialogue-text");
const prevLineBtn = document.getElementById("prev-line-btn");
const nextLineBtn = document.getElementById("next-line-btn");

const houseHotspot = document.getElementById("house-drawing-hotspot");
const drawingNote = document.getElementById("drawing-note");

const teaserHud = document.getElementById("teaser-hud");
const schoolNoticeBoard = document.getElementById("school-notice-board");
const teaserBackBtn = document.getElementById("teaser-back-btn");
const replayEp1Btn = document.getElementById("replay-ep1-btn");
const noticeModal = document.getElementById("notice-modal");
const closeNoticeBtn = document.getElementById("close-notice-btn");

const transitionVeil = document.getElementById("transition-veil");
const assetWarning = document.getElementById("asset-warning");
const assetWarningText = document.getElementById("asset-warning-text");

/* =========================================================
   ASPECT-RATIO LOCKED ART FRAME (NO CROPPING / NO DRIFT)
   ========================================================= */
function fitArtFrame() {
  if (storyView.hidden) return;
  const vw = stageViewport.clientWidth - 24;
  const vh = stageViewport.clientHeight - 8;
  if (vw <= 0 || vh <= 0) return;

  const ratio = imageAspectCache.get(currentImageUrl) || (16 / 9);
  let targetW = vw;
  let targetH = targetW / ratio;

  if (targetH > vh) {
    targetH = vh;
    targetW = targetH * ratio;
  }

  artFrame.style.width = `${Math.floor(targetW)}px`;
  artFrame.style.height = `${Math.floor(targetH)}px`;
}

window.addEventListener("resize", fitArtFrame);

function preloadAssets() {
  Object.values(ASSETS).forEach((src) => {
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        imageAspectCache.set(src, img.naturalWidth / img.naturalHeight);
        if (src === currentImageUrl) fitArtFrame();
      }
    };
    img.src = src;
  });
}

/* =========================================================
   NAVIGATION & RENDERING
   ========================================================= */
function fadeTransition(callback) {
  transitionVeil.classList.add("active");
  setTimeout(() => {
    callback();
    requestAnimationFrame(() => {
      transitionVeil.classList.remove("active");
    });
  }, 320);
}

function enterEpisode1() {
  fadeTransition(() => {
    memoryWallView.hidden = true;
    memoryWallView.classList.remove("active");
    storyView.hidden = false;
    storyView.classList.add("active");
    currentIndex = 0;
    renderBeat(true);
  });
}

function returnToMemoryWall() {
  fadeTransition(() => {
    noticeModal.hidden = true;
    storyView.hidden = true;
    storyView.classList.remove("active");
    memoryWallView.hidden = false;
    memoryWallView.classList.add("active");
    body.className = "theme-everbliss";
  });
}

function renderBeat(isSceneEntry = false) {
  const beat = STORY_BEATS[currentIndex];
  const prevBeat = currentIndex > 0 ? STORY_BEATS[currentIndex - 1] : null;
  const sceneChanged = isSceneEntry || !prevBeat || prevBeat.sceneNum !== beat.sceneNum;

  // Theme identity switch
  if (beat.isTeaser) {
    body.className = "theme-school";
  } else {
    body.className = "theme-childhood";
  }

  // Top scene indicator
  sceneBadgeText.textContent = beat.sceneTitle;

  // Media update
  if (beat.video) {
    sceneImage.hidden = true;
    sceneVideo.hidden = false;
    if (sceneVideo.getAttribute("src") !== beat.video) {
      sceneVideo.src = beat.video;
      sceneVideo.play().catch(() => {});
    }
  } else {
    sceneVideo.pause();
    sceneVideo.hidden = true;
    sceneImage.hidden = false;
    if (currentImageUrl !== beat.image) {
      currentImageUrl = beat.image;
      sceneImage.style.opacity = "0.2";
      sceneImage.onload = () => {
        if (sceneImage.naturalWidth && sceneImage.naturalHeight) {
          imageAspectCache.set(beat.image, sceneImage.naturalWidth / sceneImage.naturalHeight);
        }
        assetWarning.hidden = true;
        fitArtFrame();
        sceneImage.style.opacity = "1";
      };
      sceneImage.onerror = () => {
        assetWarningText.textContent = `Missing image file: "${beat.image}". Please place the 8 mapped images inside the assets/ folder.`;
        assetWarning.hidden = false;
      };
      sceneImage.src = beat.image;
      sceneImage.alt = beat.alt || beat.sceneTitle;
      stageBackdrop.style.backgroundImage = `url("${beat.image}")`;
    }
  }

  // Camera & environmental animation classes
  artFrame.className = `art-frame ${beat.camClass || ""}`;
  artFrame.setAttribute("data-fx", beat.fx || "");
  fitArtFrame();

  // Interactive Scene 5 drawing highlight
  houseHotspot.hidden = !beat.showDrawingHotspot;
  if (!beat.showDrawingHotspot) {
    drawingNote.hidden = true;
  }

  // Teaser vs Story HUD
  if (beat.isTeaser) {
    storyHud.hidden = true;
    teaserHud.hidden = false;
    schoolNoticeBoard.hidden = false;
  } else {
    teaserHud.hidden = true;
    schoolNoticeBoard.hidden = true;
    noticeModal.hidden = true;
    storyHud.hidden = false;

    // Speaker & dialogue
    if (beat.speaker) {
      speakerPill.hidden = false;
      speakerPill.textContent = beat.speaker;
      speakerPill.className = `speaker-pill speaker-${beat.speaker.toLowerCase()}`;
      dialogueText.classList.remove("is-narration");
    } else {
      speakerPill.hidden = true;
      dialogueText.classList.add("is-narration");
    }

    dialogueText.textContent = beat.text;
    const storyTotal = STORY_BEATS.length - 1; // excluding teaser
    lineCounter.textContent = `${currentIndex + 1} / ${storyTotal}`;
    prevLineBtn.disabled = currentIndex === 0;
    nextLineBtn.textContent = currentIndex === storyTotal - 1 ? "Continue to School ›" : "Continue ›";
  }

  // Gentle Scene Title Overlay
  if (sceneChanged && beat.showTitleCard) {
    titleOverlayActive = true;
    overlayEpisodeLabel.textContent = beat.isTeaser
      ? "End of Episode 1"
      : "Episode 1 — One Sunday, A Thousand Little Memories";
    overlaySceneTitle.textContent = beat.sceneTitle;
    sceneTitleOverlay.hidden = false;
  } else {
    titleOverlayActive = false;
    sceneTitleOverlay.hidden = true;
  }
}

function dismissTitleOverlay() {
  if (!titleOverlayActive) return;
  titleOverlayActive = false;
  sceneTitleOverlay.hidden = true;
}

function goNext() {
  if (titleOverlayActive) {
    dismissTitleOverlay();
    return;
  }
  if (currentIndex < STORY_BEATS.length - 1) {
    const prevScene = STORY_BEATS[currentIndex].sceneNum;
    currentIndex += 1;
    const nextScene = STORY_BEATS[currentIndex].sceneNum;
    if (prevScene !== nextScene) {
      fadeTransition(() => renderBeat(true));
    } else {
      renderBeat(false);
    }
  }
}

function goPrev() {
  if (titleOverlayActive) {
    dismissTitleOverlay();
    return;
  }
  if (currentIndex > 0) {
    const prevScene = STORY_BEATS[currentIndex].sceneNum;
    currentIndex -= 1;
    const nextScene = STORY_BEATS[currentIndex].sceneNum;
    if (prevScene !== nextScene) {
      fadeTransition(() => renderBeat(false));
    } else {
      renderBeat(false);
    }
  }
}

/* =========================================================
   EVENT LISTENERS
   ========================================================= */
openEp1Btn.addEventListener("click", enterEpisode1);
backToWallBtn.addEventListener("click", returnToMemoryWall);

sceneTitleOverlay.addEventListener("click", dismissTitleOverlay);

dialogueCard.addEventListener("click", (e) => {
  if (e.target.closest("#prev-line-btn")) return;
  goNext();
});

prevLineBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  goPrev();
});

nextLineBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  goNext();
});

// Scene 5 subtle house drawing highlight (non-interrupting)
houseHotspot.addEventListener("click", (e) => {
  e.stopPropagation();
  drawingNote.hidden = !drawingNote.hidden;
});

// Episode 2 Teaser interactions
schoolNoticeBoard.addEventListener("click", (e) => {
  e.stopPropagation();
  noticeModal.hidden = false;
});

closeNoticeBtn.addEventListener("click", () => {
  noticeModal.hidden = true;
});

noticeModal.addEventListener("click", (e) => {
  if (e.target === noticeModal) noticeModal.hidden = true;
});

teaserBackBtn.addEventListener("click", () => {
  goPrev();
});

replayEp1Btn.addEventListener("click", () => {
  fadeTransition(() => {
    currentIndex = 0;
    renderBeat(true);
  });
});

// Fullscreen toggle
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
});

// Keyboard support for desktop readers
document.addEventListener("keydown", (e) => {
  if (storyView.hidden) return;
  if (!noticeModal.hidden) {
    if (e.key === "Escape") noticeModal.hidden = true;
    return;
  }
  const beat = STORY_BEATS[currentIndex];
  if (beat.isTeaser) {
    if (e.key === "ArrowLeft") goPrev();
    return;
  }
  if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
    e.preventDefault();
    goNext();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    goPrev();
  }
});

preloadAssets();