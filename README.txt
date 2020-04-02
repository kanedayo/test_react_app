---
$ node -v; npm -v
v13.12.0
6.14.4
---

-------
Node / React 入門 ( create-react-app )
https://naokeyzmt.com/blog/node-js/


mkdir nodetest
cd nodetest
npm init -y
npm install create-react-app
node_modules/.bin/create-react-app myapp
cd myapp
npm start # アプリの起動

npm run build # コンパイル

npm install -g serve
serve -s build # productionモードで起動


--参考
myapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
----------



-------
React 入門
https://naokeyzmt.com/rogue/nextjs-react/

mkdir nexttest
cd nexttest
npm init -y
npm install --save react react-dom next
mkdir pages

vi package.json
```:json
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

vi pages/index.js
```:js
import Link from 'next/Link';
const Index = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
);
export default Index;
```

vi pages/about.js
```:js
const About = () => (
  <div>
    <h1>This page is About</h1>
  </div>
);
export default About;
```

npm run dev
