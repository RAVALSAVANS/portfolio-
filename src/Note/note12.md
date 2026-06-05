1. useRef ka kaam
useRef() ek special React hook hai jo DOM element ka reference store karta hai, taki hum us element ko directly access kar saken — bina state update kare.

2. Tumhare code mein kaise use ho raha hai
const form = useRef();

Ye ek ref object banata hai (form.current), jo initially null hota hai.

Phir form tag mein:

<form ref={form} onSubmit={sendEmail}>

Yaha ref={form} ka matlab hai ki jab form render hoga, uska actual HTML <form> element form.current me store ho jayega.

3. Kahan use ho raha hai
Tumhare sendEmail function me:
emailjs.sendForm(..., form.current, ...)

form.current se tum EmailJS ko poora form element pass kar rahe ho, taki wo us form ke saare inputs (name, email, subject, message) automatically read karke send kar de.

Aur:
form.current.reset();

Ye form ke fields clear kar deta hai (DOM method) jab message successfully send ho jata hai.

✅ Simple samajh lo:
useRef() yaha do kaam kar raha hai:

EmailJS ko direct form element dena (data send karne ke liye).

Message send hone ke baad form reset karna.

Agar const form = useRef(); hata doge, to tum direct document.querySelector() use karna padega — jo React mein recommended nahi hai.