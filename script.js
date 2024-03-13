const collection = [
    {
        title: 'The Binding of Isaac: Rebirth',
        developer: ['Edmund McMillen'],
        releaseDate: '4 Nov, 2014',
        genre: ['Action Roguelike', 'Dungeon Crawler'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg?t=1617174663',
        description: "Following Isaac on his journey players will find bizarre treasures that change Isaac's form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets and fight his way to safety.",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/250900"
    },
    {
        title: 'Hades',
        developer: 'Super Giant Games',
        releaseDate: '17 Sep, 2020',
        genre: ['Action Roguelike', 'Hack and Slash'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1702510146',
        description: "As the immortal Prince of the Underworld, you'll wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unraveling more of the story with each unique escape attempt.",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/1145360"
    },
    {
        title: 'Hollow Knight',
        developer: 'Team Cherry',
        releaseDate: '24 Feb, 2017',
        genre: ['Metroidvania', 'Platformer'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1695270428',
        description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/367520"
    },
    {
        title: 'COCOON',
        developer: 'Geometric Interactive',
        releaseDate: '29 Sep, 2023',
        genre: ['Puzzle', 'Exploration', 'Adventure'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1497440/header.jpg?t=1709319413',
        description: "COCOON is a unique take on the puzzle adventure genre, where each world exists within an orb that you can carry on your back. Wrap your head around the core mechanic of leaping between worlds—and combine, manipulate, and rearrange them to solve intricate puzzles.",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/1497440"
    },
    {
        title: 'Cult of the Lamb',
        developer: 'Massive Monster',
        releaseDate: '11 Aug, 2022',
        genre: ['Base Building', 'Action Roguelike'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header_alt_assets_5.jpg?t=1709567867',
        description: 'Start your own cult in a land of false prophets, venturing out into diverse and mysterious regions to build a loyal community of woodland Followers and spread your Word to become the one true cult.',
        reviews: "Very Positive",
        link: "https://store.steampowered.com/app/1313140"
    },
    {
        title: 'Oxygen Not Included',
        developer: 'Klei Entertainment',
        releaseDate: '30 Jul, 2019',
        genre: ['Colony Sim', 'Survival', 'Management'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/457140/header.jpg?t=1701909927',
        description: "Oxygen Not Included is a space-colony simulation game. Deep inside an alien space rock your industrious crew will need to master science, overcome strange new lifeforms, and harness incredible space tech to survive, and possibly, thrive.",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/457140"
    },
    {
        title: 'Papers, Please',
        developer: 'Lucas Pope',
        releaseDate: '8 Aug, 2013',
        genre: ['Simulation', 'Point & Click', 'Political'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/239030/header.jpg?t=1678266428',
        description: "Congratulations. The October labor lottery is complete. Your name was pulled. For immediate placement, report to the Ministry of Admission at Grestin Border Checkpoint. An apartment will be provided for you and your family in East Grestin. Expect a Class-8 dwelling.",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/239030"
    },
    {
        title: 'Blasphemous',
        developer: 'The Game Kitchen',
        releaseDate: '10 Sep, 2019',
        genre: ['Metroidvania', 'Dark Fantasy'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/774361/header.jpg?t=1700829487',
        description: "Blasphemous is a brutal action-platformer with skilled hack'n slash combat set in the nightmare world of Cvstodia. Explore, upgrade your abilities, and perform savage executions on the hordes of enemies that stand between you and your quest to break eternal damnation.",
        reviews: "Very Positive",
        link: "https://store.steampowered.com/app/774361"
    },
    {
        title: 'A Short Hike',
        developer: 'adamgryu',
        releaseDate: '30 Jul, 2019',
        genre: ['Exploration', 'Adventure', 'Casual'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1055540/header.jpg?t=1701219411',
        description: "Hike, climb, and soar through the peaceful mountainside landscapes of Hawk Peak Provincial Park as you make your way to the summit.",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/1055540"
    },
    {
        title: 'Death\'s Door',
        developer: 'Acid Nerve',
        releaseDate: '20 Jul, 2021',
        genre: ['Action-Adventure', 'Isometric'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/894020/header.jpg?t=1704910520',
        description: "Reaping souls of the dead and punching a clock might get monotonous but it's honest work for a Crow. The job gets lively when your assigned soul is stolen and you must track down a desperate thief to a realm untouched by death - where creatures grow far past their expiry.",
        reviews: "Very Positive",
        link: "https://store.steampowered.com/app/894020"
    },
    {
        title: 'Death Cells',
        developer: 'Motion Twin',
        releaseDate: '6 Aug, 2018',
        genre: ['Adventure', 'Action Roguelike'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg?t=1678188017',
        description: "Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you’re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat. Regular free content updates!",
        reviews: "Overwhelmingly Positive",
        link: "https://store.steampowered.com/app/588650"
    },
    {
        title: 'Loop Hero',
        developer: 'Four Quarters',
        releaseDate: '4 Mar, 2021',
        genre: ['Deckbuilding', 'Roguelike', 'Tactical'],
        coverImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1282730/header.jpg?t=1686826687',
        description: "The Lich has thrown the world into a timeless loop and plunged its inhabitants into never ending chaos. Wield an expanding deck of mystical cards to place enemies, buildings, and terrain along each unique expedition loop for the brave hero.",
        reviews: "Very Positive",
        link: "https://store.steampowered.com/app/1282730"
    },
]





const main = document.querySelector('main')
const items = 12

for (let i = 0; i < items; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    main.appendChild(card);
}
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    const game = collection[index];
    const coverImage = document.createElement('img');
    coverImage.src = game.coverImage;
    coverImage.classList.add('cover');
    card.appendChild(coverImage);

    const tagContainer = document.createElement('div');
    tagContainer.classList.add('tag-container');
    card.appendChild(tagContainer);

    const tagColors = ['#e56b6f', '#eaac8b', '#b56576'];
    const genreTags = game.genre;
    genreTags.forEach((tag, i) => {
        const h3 = document.createElement('h3');
        h3.classList.add(`n${i}`)
        h3.innerText = tag;
        h3.style.backgroundColor = tagColors[i]
        h3.style.display = 'inline-block';
        tagContainer.appendChild(h3);
    })

    const title = document.createElement('h2');
    title.innerText = game.title;
    card.appendChild(title);

    const developer = document.createElement('h4');
    developer.innerText = game.developer;
    card.appendChild(developer);

    const description = document.createElement('p');
    description.innerText = game.description;
    card.appendChild(description);

    const steamContainer = document.createElement('div');
    steamContainer.classList.add('steam-container');
    card.appendChild(steamContainer);

    const steamLink = document.createElement('a');
    steamLink.href = game.link;
    steamLink.target = '_blank'
    steamContainer.appendChild(steamLink);

    const steam = document.createElement('img');
    steam.src = 'steam_icon.png';
    steam.style.width = '36px'
    steam.style.height = '36px'
    steam.classList.add('steam-logo');
    steamLink.appendChild(steam);

    const reviews = document.createElement('h5');
    reviews.innerText = game.reviews;
    reviews.classList.add('reviews');
    steamLink.appendChild(reviews);
})
console.log(document)

