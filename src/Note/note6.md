✅ pb-24 jo hai, wo py-24 ke bottom part ko override karega.

🧠 Samjho isko:
py-24 => padding-top: 6rem; padding-bottom: 6rem;

pb-24 => padding-bottom: 6rem;

Toh dono jagah same value hai, isliye koi farq nahi pad raha. But, agar hota:

jsx
Copy
Edit
className="py-24 pb-12"
Toh:
Top padding: 6rem (from py-24)

Bottom padding: 3rem (from pb-12) — ✅ because pb-12 overrides py-24 ka bottom part.

🔁 Summary:
py-* = top + bottom

pb-* = sirf bottom

Jab dono ek saath likhe jaate hain, pb-* bottom padding ke liye final value set karta hai, py-* ke bottom ko overwrite karta hai.

# Work Component

| Class                 | Meaning                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| `overflow-hidden`     | Agar andar ka content bada ho, toh cut kar dega (scroll ya visible nahi hoga)                                 |
| `rounded-2xl`         | Corner ko bahut zyada gol kar deta hai (large border-radius)                                                  |
| `border border-white` | 1px ki safed border lagata hai                                                                                |
| `bg-gray-900`         | Background ka color **dark gray (very dark)** kar deta hai                                                    |
| `shadow-2xl`          | Bahut gehri shadow deta hai (depth effect)                                                                    |
| `backdrop-blur-md`    | Piche ka background blur hota hai agar transparency ya blur-supporting area ho (like modals or glassmorphism) |


| Class                        | Meaning                                                                                |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| `cursor-pointer`             | Jab mouse le jao to pointer ban jata hai (clickable indication)                        |
| `transition-transform`       | Jo bhi **transform** changes honge (like translate, scale), unko smoothly apply karega |
| `duration-300`               | Transition ki duration 300ms hogi (0.3 seconds)                                        |
| `hover:-translate-y-2`       | Hover pe 0.5rem (8px) upar uth jaayega — floating/hover effect                         |
| `hover:shadow-purple-500/50` | Hover karne par purple shadow dikhai degi with 50% opacity                             |
