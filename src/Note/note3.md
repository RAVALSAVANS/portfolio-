Tailwind CSS me leading-tight ek line-height utility class hai, jo text ki lines ke beech ka vertical space (line spacing) control karti hai.

🔍 Meaning of leading-tight:
| Class           | Line-height                         |
| --------------- | ----------------------------------- |
| `leading-tight` | `1.25` (i.e. 125% of the font size) |

Yaani agar kisi text ka font-size 20px hai, to uski line-height 20px × 1.25 = 25px ho jaayegi.

🧠 Line-height ka kya kaam hota hai?
Ek paragraph ya heading me multiple lines ho to unke beech kitna vertical gap ho, ye line-height control karta hai.

leading-tight ka use tab kiya jaata hai jab compact aur professional look chahiye hota hai, especially headings me.

📊 Common Line-height Classes in Tailwind:
| Class             | Description                | Line-height |
| ----------------- | -------------------------- | ----------- |
| `leading-none`    | No extra spacing           | `1`         |
| `leading-tight`   | Tight spacing              | `1.25`      |
| `leading-snug`    | Slightly tight             | `1.375`     |
| `leading-normal`  | Default spacing            | `1.5`       |
| `leading-relaxed` | Slightly more space        | `1.625`     |
| `leading-loose`   | More spacing (loose lines) | `2`         |

<p class="text-lg leading-tight">
  This is a paragraph with tight line height.<br />
  It looks more compact and neat.
</p>

Agar tum leading-tight hata do to text lines thodi zyada spaced dikhenge. Headings me usually tight line-height better dikhta hai.


Typing Effect in reat 

React Typing Effect ek React component hai jo kisi text ko typewriter-style animation ke saath dikhata hai — jaise ek letter ek time pe screen pe appear ho raha ho, fir delete ho kar next text type ho raha ho.

Ye effect mostly portfolio websites, hero sections, banners ya animated introductions me use hota hai — jisme tum bolte ho:

“Hi, I am a Web Developer | Frontend Developer | MERN Stack Developer”

<ReactTypingEffect
  text={[
    'Web Devloper',
    'FrontEnd Developer',
    'MERN Stack Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Coder',
  ]}
  speed={100}
  eraseSpeed={50}
  typingDelay={500}
  eraseDelay={2000}
/>

📌 Explanation of Props:
| Prop          | Kaam kya karta hai                                        |
| ------------- | --------------------------------------------------------- |
| `text`        | Ek array of strings, jise ek ek karke type kiya jaata hai |
| `speed`       | Har character type hone ka speed (ms me)                  |
| `eraseSpeed`  | Har character delete hone ka speed (ms me)                |
| `typingDelay` | Pehle text start hone me kitni delay ho (ms me)           |
| `eraseDelay`  | Ek text poora hone ke baad kitni delay me erase ho        |


Tilt Effect in React

React mein Tilt ka use 3D parallax tilt effect dene ke liye kiya jaata hai — jisse koi image ya element hover karne par thoda angle mein ghoomta hai, jaise card ya image screen par rotate ho raha ho mouse ke movement ke saath.

🔮 Iska use kyun kiya jaata hai?
👁‍🗨 Visual engagement badhane ke liye (eye-catching effect)

💻 UI ko modern aur interactive banane ke liye

👆 User interaction ka feedback dene ke liye (like hovering over profile images or cards)

tiltMaxAngleX={20}
tiltMaxAngleY={20}
perspective={1000}
scale={1.05}
transitionSpeed={1000}
gyroscope={true}

Main tumhe simple aur visual tarike se ek-ek prop ka matlab samjhaata hoon:

🔁 tiltMaxAngleX={20}
X-axis (left–right) direction mein kitna maximum tilt (jhukna) allow karna hai.

20 ka matlab: element 20° tak left ya right ghoom sakta hai mouse ke movement ke according.

🧠 Jaise mouse left jaaye to element left tilt karega, right jaaye to right.

🔁 tiltMaxAngleY={20}
Y-axis (top–bottom) direction mein kitna jhukega.

20 ka matlab: element 20° tak up ya down tilt hoga.

🧠 Jaise mouse upar ho to element upar jhukega, neeche ho to neeche.

🔮 perspective={1000}
Ye 3D depth ka illusion create karta hai.

1000 means — element ka perspective distance 1000px hai.

Zyada value (e.g., 2000) doge to effect subtle ho jaayega.

Kam value (e.g., 500) doge to effect zyada dramatic lagega.

🧠 Isse ye decide hota hai ki 3D rotation kitna deep ya shallow dikhega.

🔍 scale={1.05}
Hover karne par element kitna zoom kare.

1.05 ka matlab: 5% zoom in.

Agar scale={1} rakhoge to zoom bilkul nahi karega.

🧠 Jaise user hover kare, card thoda bada dikhne lage.

⚡ transitionSpeed={1000}
Tilt hone ka animation kitni speed se chalega, in milliseconds.

1000 = 1 second (slow & smooth)

300 = fast transition

🧠 Hover karte waqt smoothness ka control deta hai.

📱 gyroscope={true}
Agar mobile device use ho raha ho, to ye allow karega ki element phone ke hilne ke saath tilt kare.

true = gyroscope sensor use hoga.

false = phone tilt se effect nahi hoga.

🧠 Isse mobile par bhi 3D movement ka experience aata hai.

✅ Summary Table:
| Prop              | Meaning                                  |
| ----------------- | ---------------------------------------- |
| `tiltMaxAngleX`   | Left-right tilt angle limit              |
| `tiltMaxAngleY`   | Up-down tilt angle limit                 |
| `perspective`     | Depth of 3D effect                       |
| `scale`           | Hover zoom-in scale                      |
| `transitionSpeed` | Tilt animation ka speed (ms)             |
| `gyroscope`       | Mobile device tilt sensor ka use ya nahi |

🔮 perspective ka matlab kya hota hai?
Jab hum kisi element ko 3D mein rotate karte hain (jaise tilt effect mein hota hai), to browser ko yeh batana padta hai:

“Viewer aur element ke beech ka distance kitna samjha jaaye?”

Ye distance perspective ke through define hota hai.

🧠 Ek Real-Life Example Socho:
Agar tum kisi cardboard ko haath mein leke rotate karte ho:

Agar door le jaake rotate karo (jaise 1 meter door) → rotation kam dikhai deta hai.

Agar nazdeek leke rotate karo → rotation zyada dikhai deta hai.

Same tarah:

perspective: 100 → Zyada 3D effect, jaise card tumhare bilkul paas ho.

perspective: 1000 → Subtle/normal 3D effect, jaise thoda door ho.

perspective: 2000 → Aur bhi halka effect, jaise aur door ho.

🔍 perspective={1000} in Tilt Effect

<Tilt perspective={1000} />

| Value              | Effect Description                        |
| ------------------ | ----------------------------------------- |
| `perspective=300`  | Zyada dramatic tilt (strong 3D effect)    |
| `perspective=1000` | Balanced, realistic tilt (default choice) |
| `perspective=2000` | Bahut halka tilt, subtle 3D look          |

✅ Tip:
Agar tumhara 3D tilt zyada extreme lag raha hai, to perspective ko 1000 ya 1500 karo — smooth dikhega.