RESTAURANT WEBSITE (sample project)
====================================

FILES
  index.html   Home page (hero, services, signature dishes, menu showcase, about, reviews, contact)
  menu.html    Full menu, add to cart, GST bill, send order to WhatsApp
  admin.html   Owner panel: login, add/edit/delete dishes, change prices, mark sold out
  data.js      ONE place for name, phone, WhatsApp number, GST rate, admin password and default menu
  style.css    ONE stylesheet for colours, fonts, layout, animations
  images/      all food photos

CHANGE THE RESTAURANT NAME / PHONE / PASSWORD
  Open data.js and edit the SETTINGS block at the top.
  Also search index.html for "Restaurant" in the <title> and the schema block to update SEO text.

ADMIN PAGE
  Open yoursite.com/admin.html and log in (default password: admin123, CHANGE IT in data.js).
  IMPORTANT: this is a sample. Menu changes save in the browser (localStorage), so they show only on
  the device used to edit. For a real restaurant, connect Firebase so changes show for every visitor,
  and use real login instead of a password in the code.

DEPLOY (GitHub + Vercel)
  1. Create a GitHub repository and push all these files (keep the images folder).
  2. On vercel.com choose Add New > Project, import the repository, click Deploy.
     No build settings are needed because this is a plain static site.
