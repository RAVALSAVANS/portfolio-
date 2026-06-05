# Education.jsx

<div className="absolute left-0 w-1 h-full transform -translate-x-1/2 bg-white sm:left-1/2 sm:-translate-x-0"></div>

ye vertical line bana raha hai jo timeline ke beech ya left side me dikhni chahiye.

1️⃣ Mobile screen (left-0 -translate-x-1/2)
left-0 → element ka left edge container ke left se 0 position pe aayega.

-translate-x-1/2 → element ko apne khud ke width ka aadha left shift karega.

Kyun?
Tumhara vertical line w-1 (1px ya 0.25rem) wide hai, aur agar tum simply left-0 lagao, to wo line element ke bilkul andar start ho jayegi.
Lekin tum chahte ho ki wo content ke border ke bilkul center me aaye.
Isliye usko apni width ka aadha left shift kiya gaya.

📌 Visual samjho:
left-0 without translate → |content
left-0 with -translate-x-1/2 →   |content (centered on boundary)

2️⃣ Large screen (sm:left-1/2 sm:-translate-x-0)
sm:left-1/2 → screen badi hone par line ko container ke 50% width pe le jao (center me).

sm:-translate-x-0 → ab center me already rakha hai, to shift ki zarurat nahi, isliye translate-x remove.

🔹 Conclusion
-translate-x-1/2 ka kaam hai line ko apne center point se align karna, jab tum usko exact left ya right position pe lagate ho.
Agar ye remove kar doge, to mobile view me vertical line thoda left side chipak jayegi, center align nahi hogi.

🧠 Socho tumhare paas ek div hai:
Uski width hai w-1 (Tailwind me ~0.25rem ≈ 4px)

Tum usko absolute left-0 de rahe ho.

📍 Case 1: left-0 without -translate-x-1/2
| ← container ka left edge
████  ← vertical line ka pura 4px part yaha se start hota hai
content...

Matlab vertical line ka left edge bilkul container ke left pe hai,
lekin iska center left edge se 2px andar hai.

📍 Case 2: left-0 -translate-x-1/2

|  ████  ← vertical line ka center bilkul container ke edge pe aa gaya
content...

-translate-x-1/2 ka matlab:

Element ko apne width ka aadha left shift karo.
Agar width = 4px hai, to shift = 2px.

Is shifting ki wajah se line ka center exactly container ke edge pe aa jata hai, na ki andar.

📌 Easy Example:
Socho ek 4px wide pencil tum table ke edge pe rakhte ho.

Agar tum "left-0" lagate ho → pencil ka left side table edge pe hai.

Agar tum "-translate-x-1/2" lagate ho → pencil ka center table edge pe aa jata hai.

💡 Ye trick isliye use hoti hai kyunki CSS me left, top, right, bottom position hammesha element ke border se calculate hoti hai, center se nahi.
-translate-x-1/2 lagane se tum apne element ka center align kara pate ho.