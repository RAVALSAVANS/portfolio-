const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

🔍 Explanation (Line by Line):
✅ const handleScroll = (sectionId) => {
Yeh ek arrow function hai jiska naam handleScroll hai.

Is function ko ek argument milta hai: sectionId (ye ek string hoti hai — jaise "about", "skills" etc.).

Jab function call hota hai, woh kisi section ke ID par scroll karega.

✅ const section = document.getElementById(sectionId);
document.getElementById(...) se HTML page ka wo element milta hai jiska ID sectionId se match karta ho.

Example: Agar sectionId = "about" hai, toh yeh DOM se <section id="about">...</section> element fetch karega.

Aur uss element ko section variable mein store karega.

✅ if (section) { ... }
Yeh check karta hai ki kya section exist karta hai ya nahi (null ya undefined nahi hai).

Agar element mil gaya DOM mein, tabhi next line chalegi.

✅ section.scrollIntoView({ behavior: "smooth" });
Yeh line browser ko bolti hai ki jo section mila hai us par scroll karo.

behavior: "smooth" ka matlab hai — scroll animation smoothly hogi, suddenly nahi jump karega.