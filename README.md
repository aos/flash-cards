## CS Flash Cards

> Flash cards web app designed to aid in CS study  
> Built mobile-first

![Main](http://i.imgur.com/PMMDLrHm.png)
(Main view)
![Running a card - w/ code formatting](http://i.imgur.com/UkHLTomm.png)
(Card view - code formatting)

### Stack
Front-end: Vue.js  
Back-end: Node.js (express), MongoDB  

### Why?
The purpose of this project is two-fold:
1. To learn MEVN, as part of becoming a full-stack developer.
2. To be able to create and store flash cards online, as part of my note-taking process in studying CS. Flash cards can be made with code-block formatting.

### User roles
- Add cards
- View each card (front/back)
- View list of all cards
- Cycle randomly through cards
- Edit each card
- Mark known/unknown

### Timeline
- [x] 7/19/2017 - Minimal viable product

### Missing features (to be added at a later date) 
- [x] Login/Register failure error display (7/27/2017)
- [ ] Run cards by different tags (Code, General, Random)
- [ ] Implement spaced-repetition algorithm
- [ ] Multiple decks per user
- [ ] Shared user decks

### Planned
- [ ] Unit tests and E2E tests 
- [ ] Port to firebase 

### Installation (local)

Install using terminal, or optionally download from link above:
```
git clone https://github.com/aos/flash-cards.git
cd flash-cards
npm install
```

- For production build:  
`npm run build`

- For development build:  
`npm run dev`

Remove `.sample` from `.env` file name.

Additionally, the back-end server and `mongod` instance must be started:

Run each command in its own terminal instance:  
- Server: `npm run start`  
- Mongo: `mongod`

You should be good to go! Enjoy