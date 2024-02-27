# Websites Requirements

## installs

1. npm install sass --save-dev
2. npm install bootstrap
3. npm install @fortawesome/fontawesome-free
4. npm install postcss-cli autoprefixer

## scripts configuration

```JSON
"scripts": {
    "sass": "sass --watch scss:assets/css"
  },

```

## including bootstrap in our sass files

```css
//IMPORT FONTS
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap");

//IMPORT BOOSTRAP
@import "../node_modules/bootstrap/scss/bootstrap.scss";

body {
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

img {
  width: 100%;
  display: block;
  object-fit: cover;
}
```
