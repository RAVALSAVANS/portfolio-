line-clamp-3 Tailwind CSS ka ek utility class hai jo kisi text ko 3 lines mein hi truncate (cut off) kar deta hai, aur baaki ka content ellipsis (...) ke saath chhupa diya jaata hai.

🧠 Simple Definition:
line-clamp-3 = Sirf 3 lines tak text dikhana, uske baad ... lag jaayega.


✅ className="..."
Ye Tailwind ke utility classes ka combination hai jo project card ke container ko style kar raha hai.

🔍 1. overflow-hidden
Card ke andar ka content agar card ke boundaries se bahar nikalta hai to chhupa diya jaata hai.

Mostly rounded corners + image clipping ke liye use hota hai.

🔍 2. transition-transform
Ye batata hai ki transform property (e.g. hover effect) smoothly change hogi.

Without this, hover pe sudden jump hota.

🔍 3. duration-300
Transition hone me 300ms (0.3 second) ka time lagega.

Iska matlab: hover effect thoda smooth lagega.

🔍 4. bg-gray-900
Card ka background color dark gray (almost black) ho jaata hai.

🔍 5. border border-white
Card ke around white border lagta hai.

🔍 6. shadow-2xl
Ye card ko ek deep shadow deta hai, 3D type look create karta hai.

🔍 7. cursor-pointer
Jab mouse card pe hover kare to cursor pointer ban jata hai (i.e., user ko signal ki ye clickable hai).

🔍 8. backdrop-blur-md
Blur effect lagta hai us background pe jahan card ke through blur dikhe.

Ye tab dikhta hai jab card ke neeche koi background ho (like gradient ya image).

🔍 9. rounded-2xl
Card ke corners ko extra rounded banata hai.

🔍 10. hover:shadow-purple-500/50
Jab card pe mouse le jaate ho, to shadow ka color change hoke purple (with 50% opacity) ho jaata hai.

Cool hover glow effect deta hai.

🔍 11. hover:-translate-y-2
Hover karne par card thoda upar uth jaata hai (translateY -2).

-2 means upward shift by 0.5rem (8px).

🔄 transform property kya hai?
transform ek CSS property hai jo kisi element ko move, scale, rotate, skew karne ke liye use hoti hai.
Tailwind me ye utility classes ke form me hota hai (like translate-x-4, rotate-45, scale-110, etc.)

| Transform Function | Kya karta hai (Simple Explanation)        | Example in Tailwind           |
| ------------------ | ----------------------------------------- | ----------------------------- |
| `translateX()`     | X-axis me move karta hai                  | `translate-x-4`               |
| `translateY()`     | Y-axis me move karta hai                  | `-translate-y-2`              |
| `scale()`          | Element ko bada/chhota karta hai          | `scale-110` (110%)            |
| `rotate()`         | Element ko rotate karta hai               | `rotate-45`                   |
| `skewX()`          | X-axis me tilt karta hai                  | `skew-x-12`                   |
| `skewY()`          | Y-axis me tilt karta hai                  | `skew-y-12`                   |
| `perspective()`    | 3D effect ke liye use hota hai            | (Tailwind me by default nahi) |
| `matrix()`         | Advanced transform – rarely used manually | ❌                             |

🔁 Difference between transition-all vs transition-transform
| Property                   | Explanation                                                                                                                |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **`transition-transform`** | Sirf `transform` property (like `translate`, `scale`, `rotate`) ko smooth karta hai.                                       |
| **`transition-all`**       | **Sabhi** transitionable CSS properties (like `color`, `background`, `transform`, `box-shadow`, etc.) ko smooth karta hai. |

🧠 Best Practice:
Jab sirf transform change ho raha ho, tab transition-transform use karo — zyada optimized hota hai.

Jab multiple properties (like transform, color, box-shadow) ek saath change ho rahi ho, tab transition-all use kar sakte ho.
