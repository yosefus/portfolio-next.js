const arrWork = [
  {
    name: 'calc-react',
    he: {
      title: 'מחשבון בריאקט',
      description: 'מחשבון מעוצב וריספונסיבי בריאקט, ובעזרת שימוש בuseReducer',
      note: 'שימוש בפריסה בgrid, קוד נקי ואלגנטי בעזרת useReducer',
    },
    en: {
      title: 'react calculator',
      description: 'Designed and responsive calculator in React, using useReducer',
      note: 'Using a grid layout, clean and elegant code using useReducer',
    },
    tec: ['html', 'css', 'react', 'animation'],
    sort_path: ['frontend', 'react'],
    web_link: 'https://calculator-with-react-yosefus.netlify.app',
    git_link: 'https://github.com/yosefus/react-calc-app',
    img_path: '/images/calc.png',
  },
  {
    name: 'tic-tac-toe-react',
    he: {
      title: 'איקס עיגול - ריאקט',
      description: 'משחק פשוט ואלגנטי של איקס עיגול',
      note: 'כולל תוספות של הוספת שמות שחקנים, חזרה צעד לאחור ואיפוס משחק',
    },
    en: {
      title: 'react tic tac toe',
      description: 'A simple but elegant game of tic tac toe',
      note: 'Includes additions of adding player names, back step back and game reset',
    },
    tec: ['html', 'css', 'react', 'bootstarp', 'animation'],
    sort_path: ['frontend', 'react'],
    web_link: 'https://tic-tac-toe-react-yosefus.netlify.app',
    git_link: 'https://github.com/yosefus/tic-tac-toe-react',
    img_path: '/images/tic.png',
    difficulty: 'easy',
  },
  {
    name: 'tic-tac-toe-js',
    he: {
      title: 'איקס עיגול - js',
      description: 'משחק מעוצב של איקס עיגול',
      note: 'בנייה של קוד נקי בגאווה סקריפט טהור',
    },
    en: {
      title: 'pure js tic tac toe',
      description: 'A simple game of tic tac toe with only js html css',
      note: 'Includes additions of adding player names, back step back and game reset',
    },
    tec: ['html', 'css', 'js', 'animation'],
    sort_path: ['frontend'],
    web_link: 'https://tic-tac-toe-pure-js-yosefus.netlify.app',
    git_link: 'https://github.com/yosefus/tic-tac-toe--pure-JavaScript',
    img_path: '/images/ticjs.png',
    difficulty: 'easy',
  },
  {
    name: 'Countries-next.js',
    he: {
      title: 'מדינות בnext.js',
      description: 'מידע על מדינות, כולל חיפוש מדינה ודף מידע לכל מדינה בנפרד',
      note: 'משתמש בsaas, וnext.js, וframer-motion ליצירת אנימציות רספונסיבי מלא ',
    },
    en: {
      title: 'Countries info next.js',
      description: 'Country information, including country search and country-specific information sheet',
      note: 'Uses saas, and next.js, and framer-motion to create animations, fully responsive',
    },
    tec: ['html', 'sass', 'next', 'animation'],
    sort_path: ['frontend'],
    web_link: 'https://countries-next-yosefus.netlify.app',
    git_link: 'https://github.com/yosefus/countries-api-next',
    img_path: '/images/country.jpg',
    difficulty: 'easy',
  },

  {
    name: 'mern-to-do-list-react',
    he: {
      title: 'to do list - mern',
      description: 'פרויקט מקצה לקצה של משימות - כולל הוספת משימות, עדכון משימות מחיקת משימה ועוד',
      note: 'צד לקוח ריספונסיבי בריאקט וcss בשיטת המודולס, וצד שרת בnode.js ואקספרס',
    },
    en: {
      title: 'to do list - mern',
      description: 'a simple MERN project, to do list with add delete and update a task',
      note: 'Uses module-css, and react, server side with node.js express and mongo.db, fully responsive',
    },
    tec: ['html', 'react', 'mongo', 'animation', 'node', 'css', 'express'],
    sort_path: ['frontend', 'backend'],
    web_link: 'https://to-do-list-yosefus.netlify.app/',
    git_link: 'https://github.com/yosefus/react-to-do-list-simpe-front',
    img_path: '/images/to-do-list-react.jpg',
    difficulty: 'medium',
  },
  {
    name: 'mern-to-do-list-ts',
    he: {
      title: 'to do list - typeScript',
      description: 'פרויקט מקצה ניהול משימות - כולל הוספת משימות, עדכון משימות, דדליין, מחיקת משימה ועוד',
      note: 'ריספונסיבי מלא , שמירת הרשימה על הדפדפן במחשב בעזרת localStorage , כתיבה בריאקט בשילוב של טייפסקריפט ',
    },
    en: {
      title: 'to do list - typeScript',
      description: 'to do list with add delete and update a task, and a deadline option',
      note: 'Uses module-scss, and react with typeScript, fully responsive',
    },
    tec: ['html', 'react', 'ts', 'sass'],
    sort_path: ['frontend'],
    web_link: 'https://to-do-list-ts-yosefus.netlify.app/',
    git_link: 'https://github.com/yosefus/todolist-ts',
    img_path: '/images/to-do-list-ts.jpg',
    difficulty: 'medium',
  },
  {
    name: 'simple-wesite',
    he: {
      title: 'אתר תדמית פשוט',
      description: ' אתר תדמית ריספונסיבי פשוט',
      note: 'אתר ריספונסיבי בנוי עם נקסט וless.js עם אנימציות מספריית aos',
    },
    en: {
      title: 'simple website with Less',
      description: 'A simple responsive website',
      note: 'Responsive website using less.js and aos for great design',
    },
    tec: ['html', 'next', 'animation', 'less', 'css'],
    sort_path: ['frontend'],
    web_link: 'https://simple-website-yosefus.netlify.app/',
    git_link: 'https://github.com/yosefus/next-simple-website',
    img_path: '/images/simple-web.jpg',
    difficulty: 'easy',
  },
  {
    name: 'movies-rental-mern',
    he: {
      title: 'שרת ולקוח- אתר לניהול השכרת סרטים',
      description: 'כולל הוספת סרטים כאדמין מחיקה עידכון מלאי ועוד...',
      note: ' כולל מיון לפי נושאים סידור לפי דירוג וחיפוש',
    },
    en: {
      title: 'movies rental website-mern',
      description: 'with option to add delete and update a movie when connected as an admin',
      note: 'with search sort by and order by options',
    },
    tec: ['react', 'mongo', 'express', 'bootstarp', 'node'],
    sort_path: ['frontend', 'backend'],
    web_link: 'https://trying-again-and-again.herokuapp.com',
    git_link: 'https://github.com/yosefus/moviesapp',
    img_path: '/images/movies-site.jpg',
    difficulty: 'medium',
  },
  {
    name: 'exercises-project -mern',
    he: {
      title: 'אתר תרגול תכנות',
      description: ' אתר מורכב ליצירת ופרסום תרגילים לפי שפות תכנות ועוד...',
      note: ' כולל אפשרויות לחיפוש, שימוש בטוקן הצפנת סיסמאות וניהול הרשאות בצד הלקוח והשרת',
    },
    en: {
      title: 'Development exercises -mern',
      description: 'A complex site for creating and publishing exercises',
      note: 'with search by, token, password encryption, permissions Management on the server and client',
    },
    tec: ['react', 'mongo', 'express', 'sass', 'node'],
    sort_path: ['frontend', 'backend'],
    web_link: 'https://exercises-yosefus.herokuapp.com',
    git_link: 'https://github.com/yosefus/exercise-workin',
    img_path: '/images/exercise.jpg',
    difficulty: 'hard',
  },
  {
    name: 'memory game',
    he: {
      title: 'משחק הזיכרון',
      description: 'משחק זיכרון פשוט בונילה',
      note: 'עם ניקוד, שמירת שמות השחקנים, ובחירת כמות הקלפים - נבנה עם בוטסטראפ וג`אוה סקריפט',
    },
    en: {
      title: 'memory card game js',
      description: 'game with only vanila js html css and bootstrap',
      note: 'with score, reset game, choose the number of the card on the board and more',
    },
    tec: ['html', 'css', 'js', 'bootstarp'],
    sort_path: ['frontend'],
    web_link: 'https://memory-game-js-yosefus.netlify.app/',
    git_link: 'https://github.com/yosefus/memory-game',
    img_path: '/images/memory.jpg',
    difficulty: 'easy',
  },
  {
    name: 'care e-commerce',
    he: {
      title: 'אתר חנות אלקטרונית לקניית רכבים',
      description: 'נבנה בנקסט ומטריאל כולל חיבור לפייפל ובניית מסד נתונים במונגו',
      note: 'כולל הוספת הסרת מוצרים מהעגלה- ניהול משתנים גלובלים מורכבים וקוקיז',
    },
    en: {
      title: 'e-commerce car store',
      description: 'build with next.js material ui paypal mongo.db',
      note: 'with cart managment - global varibles with context and useReducer and more... ',
    },
    tec: ['material', 'next', 'sass', 'mongo'],
    sort_path: ['frontend', "backend"],
    web_link: 'https://cars-store-nextjs-yosefus.netlify.app/',
    git_link: 'https://github.com/yosefus/e-commerce-next-material',
    img_path: '/images/store.jpg',
    difficulty: 'hard',
  },
];

export default arrWork;
