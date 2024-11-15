//creating an array ad passing the number, questions, options and answers
const questions = [

    {
        num: 1,
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
        options: [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn"
        ]
    },
    {
        num: 2,
        question: "Who is the playwright that authored the tragedy 'Romeo and Juliet,' which explores the theme of forbidden love?",
        answer: "William Shakespeare",
        options: [
            "Charles Dickens",
            "William Shakespeare",
            "Mark Twain",
            "Jane Austen"
        ]
    },
    {
        num: 3,
        question: "What is the smallest country in the world?",
        answer: "Vatican City",
        options: [
            "Monaco",
            "Nauru",
            "Vatican City",
            "San Marino"
        ]
    },
    {
        num: 4,
        question: "Which gas do plants absorb from the atmosphere?",
        answer: "Carbon Dioxide",
        options: [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ]
    },
    {
        num: 5,
        question: "Which French fashion icon famously said, 'Fashion fades, only style remains the same'?",
        answer: "Coco Chanel",
        options: [
            "Jean-Paul Gaultier",
            "Christian Dior",
            "Coco Chanel",
            "Yves Saint Laurent"
        ]
    },
    {
        num: 6,
        question: "What ancient civilization is renowned for its elaborate and colorful mosaics, often depicting mythological scenes and gods in their public spaces?",
        answer: "Roman",
        options: [
            "Mayan",
            "Roman",
            "Persian",
            "Egyptian"
        ]
    },
    {
        num: 7,
        question: "Which ancient structure in Athens, Greece, is celebrated for its Doric columns and serves as a symbol of ancient Greek democracy?",
        answer: "The Parthenon",
        options: [
            "The Parthenon",
            "The Colosseum",
            "The Acropolis",
            "The Pantheon"
        ]
    },
    {
        num: 8,
        question: "Which Japanese city is globally recognized for its annual Cherry Blossom festivals, attracting thousands of visitors each spring?",
        answer: "Tokyo",
        options: [
            "Kyoto",
            "Osaka",
            "Tokyo",
            "Sapporo"
        ]
    },
    {
        num: 9,
        question: "In classical mythology, which figure was punished by the gods for stealing fire from Olympus and giving it to humanity, symbolizing defiance against divine authority?",
        answer: "Prometheus",
        options: [
            "Icarus",
            "Sisyphus",
            "Prometheus",
            "Hades"
        ]
    },
    {
        num: 10,
        question: "What rare natural phenomenon, caused by the interaction of light and ice crystals, creates a rainbow-like halo around the moon?",
        answer: "Lunar Halo",
        options: [
            "Aurora Borealis",
            "Sundog",
            "Lunar Halo",
            "Solar Flare"
        ]
    },
    {
        num: 11,
        question: "What gas is released during photosynthesis?",
        answer: "Oxygen",
        options: [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Methane"
        ]
    },
    {
        num: 12,
        question: "Which group of organisms, known for their ability to adapt to changing environments, includes species that exhibit fluid gender identities and behaviors?",
        answer: "Amphibians",
        options: [
            "Fungi",
            "Amphibians",
            "Reptiles",
            "Birds"
        ]
    },
    {
        num: 13,
        question: "Which microscopic animal, often referred to as 'water bears,' is renowned for its resilience and ability to survive extreme conditions such as radiation and desiccation?",
        answer: "Tardigrade",
        options: [
            "Octopus",
            "Tardigrade",
            "Gecko",
            "Honeybee"
        ]
    },
    {
        num: 14,
        question: "Which amphibian is known for its remarkable ability to regenerate lost limbs, including parts of its heart, spinal cord, and brain?",
        answer: "Axolotl",
        options: [
            "Frog",
            "Axolotl",
            "Salamander",
            "Gecko"
        ]
    },
    {
        num: 15,
        question: "Which small, highly organized sea creature, known for its intricate reef-building, is actually a colonial organism made up of many polyps?",
        answer: "Coral",
        options: [
            "Sea anemone",
            "Jellyfish",
            "Starfish",
            "Coral"
        ]
    },
    {
        num: 16,
        question: "Which marine mammal, known for its social structures and complex vocalizations, has a matriarchal system where older females lead the group?",
        answer: "Orcas (Killer whales)",
        options: [
            "Seals",
            "Orcas (Killer whales)",
            "Dolphins",
            "Walruses"
        ]
    },
    {
        num: 17,
        question: "Which phenomenon, essential for the reproduction of many flowering plants, often involves queer partnerships in nature, such as with specific bee species?",
        answer: "Pollination",
        options: [
            "Photosynthesis",
            "Pollination",
            "Germination",
            "Fertilization"
        ]
    },
    {
        num: 18,
        question: "Which scientific hypothesis posits that all living organisms are interconnected with their environment, often illustrating a holistic perspective on nature and community diversity?",
        answer: "Gaia Theory",
        options: [
            "Gaia Theory",
            "Theory of Evolution",
            "Big Bang Theory",
            "Plate Tectonics"
        ]
    },
    {
        num: 19,
        question: "Which hormone, commonly associated with bonding and affection, has been studied in relation to same-sex relationships in various species?",
        answer: "Oxytocin",
        options: [
            "Cortisol",
            "Oxytocin",
            "Estrogen",
            "Testosterone"
        ]
    },
    {
        num: 20,
        question: "Which class of animals is known for their diverse mating systems, including monogamy, polygamy, and same-sex pair bonding?",
        answer: "Birds",
        options: [
            "Reptiles",
            "Birds",
            "Fish",
            "Mammals"
        ]
    },
    {
        num: 21,
        question: "Which Roman Emperor is often cited as one of the first figures in history to have been romantically involved with a male partner, highlighting the fluidity of relationships in ancient Rome?",
        answer: "Hadrian",
        options: [
            "Augustus",
            "Hadrian",
            "Nero",
            "Tiberius"
        ]
    },
    {
        num: 22,
        question: "Which influential figure in the French Revolution, known for advocating for the rights of women and the LGBTQ+ community, was also a close associate of Marie Antoinette?",
        answer: "Olympe de Gouges",
        options: [
            "Maximilien Robespierre",
            "Georges Danton",
            "Olympe de Gouges",
            "Louis XVI"
        ]
    },
    {
        num: 23,
        question: "Which avant-garde artistic movement, emerging in the early 20th century, celebrated individual expression and often embraced queer identities through its imaginative works?",
        answer: "Surrealism",
        options: [
            "Impressionism",
            "Surrealism",
            "Cubism",
            "Futurism"
        ]
    },
    {
        num: 24,
        question: "Which 19th-century English poet and playwright, associated with the aesthetic movement, was known for his relationships with men and famously proclaimed 'art for art's sake'?",
        answer: "Oscar Wilde",
        options: [
            "Lord Byron",
            "John Keats",
            "Oscar Wilde",
            "Alfred Lord Tennyson"
        ]
    },
    {
        num: 25,
        question: "Which iconic Spanish painter, recognized for his surrealist masterpieces, frequently explored themes of sexuality and identity in his artwork, reflecting queer experiences?",
        answer: "Salvador Dalí",
        options: [
            "Diego Velázquez",
            "Salvador Dalí",
            "Pablo Picasso",
            "Francisco Goya"
        ]
    },
    {
        num: 26,
        question: "Which ancient Mesopotamian civilization is notable for its mythology that includes gender-fluid deities and a societal acceptance of various sexual identities?",
        answer: "Sumerian",
        options: [
            "Assyrian",
            "Sumerian",
            "Babylonian",
            "Hittite"
        ]
    },
    {
        num: 27,
        question: "Which influential French queen, known for her political power during the Renaissance, is often associated with romantic relationships with women and political alliances?",
        answer: "Catherine de' Medici",
        options: [
            "Marie Antoinette",
            "Catherine de' Medici",
            "Anne Boleyn",
            "Catherine of Aragon"
        ]
    },
    {
        num: 28,
        question: "Which master sculptor and painter of the Renaissance is celebrated for his representation of male forms and beauty, often challenging traditional views of masculinity?",
        answer: "Michelangelo",
        options: [
            "Leonardo da Vinci",
            "Raphael",
            "Michelangelo",
            "Donatello"
        ]
    },
    {
        num: 29,
        question: "Which ancient Greek poet is revered for her lyric poetry that celebrates female love and desire, making her a foundational figure in queer literature?",
        answer: "Sappho",
        options: [
            "Hesiod",
            "Homer",
            "Sappho",
            "Pindar"
        ]
    },
    {
        num: 30,
        question: "During which period in Japanese history did samurai culture develop unique expressions of same-sex relationships, alongside a flourishing of art and literature?",
        answer: "Edo Period",
        options: [
            "Meiji Period",
            "Edo Period",
            "Heian Period",
            "Nara Period"
        ]
    },
    {
        num: 31,
        question: "Which country is recognized for having legal protections for LGBTQ+ individuals and is known for its inclusive culture, such as during its annual pride festivities?",
        answer: "Portugal",
        options: [
            "Russia",
            "Portugal",
            "Finland",
            "Egypt"
        ]
    },
    {
        num: 32,
        question: "Which historical site in Greece is associated with the worship of gods who embodied fluidity and love, often celebrated by queer individuals today?",
        answer: "Delphi",
        options: [
            "Acropolis",
            "Delphi",
            "Olympia",
            "Knossos"
        ]
    },
    {
        num: 33,
        question: "Which city, known as the capital of Germany, hosts the annual Christopher Street Day parade, celebrating LGBTQ+ pride and diversity?",
        answer: "Berlin",
        options: [
            "Munich",
            "Berlin",
            "Hamburg",
            "Cologne"
        ]
    },    
    {
        num: 34,
        question: "Which sacred mountain in Tibet is considered a pilgrimage site for various spiritual traditions and has been a gathering place for LGBTQ+ individuals seeking spiritual connection?",
        answer: "Mount Kailash",
        options: [
            "Mount Fuji",
            "Mount Kailash",
            "Mount Everest",
            "Mount Kilimanjaro"
        ]
    },
    {
        num: 35,
        question: "Which Asian city is often referred to as a hub for LGBTQ+ culture and activism, known for its diverse neighborhoods and nightlife?",
        answer: "Bangkok",
        options: [
            "Bangkok",
            "Seoul",
            "Tokyo",
            "Shanghai"
        ]
    },
    {
        num: 36,
        question: "Which major mountain range, acting as a natural divider between Europe and Asia, has historically been home to diverse cultures and expressions of identity?",
        answer: "The Ural Mountains",
        options: [
            "The Carpathians",
            "The Alps",
            "The Ural Mountains",
            "The Pyrenees"
        ]
    },
    {
        num: 37,
        question: "Which island in the Mediterranean is known for its rich history and has been a sanctuary for diverse communities throughout time?",
        answer: "Malta",
        options: [
            "Cyprus",
            "Malta",
            "Crete",
            "Sardinia"
        ]
    },
    {
        num: 38,
        question: "Which monumental structures in Egypt, constructed as tombs for pharaohs, have been historically associated with various narratives concerning gender and sexuality?",
        answer: "Pyramids of Giza",
        options: [
            "The Sphinx",
            "Pyramids of Giza",
            "Temples of Karnak",
            "The Valley of the Kings"
        ]
    },
    {
        num: 39,
        question: "Which natural feature is known for its unique geology and has been a source of inspiration for many queer artists and writers?",
        answer: "Grand Canyon",
        options: [
            "Niagara Falls",
            "Grand Canyon",
            "Yosemite Valley",
            "Victoria Falls"
        ]
    },
    {
        num: 40,
        question: "Which modernist author, renowned for their innovative narrative styles, frequently addressed themes of identity and desire in their works, resonating with LGBTQ+ experiences?",
        answer: "Virginia Woolf",
        options: [
            "James Joyce",
            "Virginia Woolf",
            "F. Scott Fitzgerald",
            "Ernest Hemingway"
        ]
    },
    {
        num: 41,
        question: "Which influential Russian novelist is recognized for their exploration of complex existential themes and characters with varied sexual identities, especially in 'The Brothers Karamazov'?",
        answer: "Fyodor Dostoevsky",
        options: [
            "Leo Tolstoy",
            "Fyodor Dostoevsky",
            "Anton Chekhov",
            "Ivan Turgenev"
        ]
    },
    {
        num: 42,
        question: "Which celebrated American poet, known for their intimate explorations of gender and sexuality, is famous for the poem 'The Fish,' reflecting their unique perspective on identity?",
        answer: "Elizabeth Bishop",
        options: [
            "Sylvia Plath",
            "Elizabeth Bishop",
            "Emily Dickinson",
            "Walt Whitman"
        ]
    },
    {
        num: 43,
        question: "Which 19th-century author, often associated with the early vampire genre, wrote 'Carmilla,' a significant work featuring lesbian themes and relationships?",
        answer: "Sheridan Le Fanu",
        options: [
            "Bram Stoker",
            "Sheridan Le Fanu",
            "Mary Shelley",
            "Oscar Wilde"
        ]
    },
    {
        num: 44,
        question: "Which English novelist, noted for their posthumously published work 'Maurice,' focused on the struggles and joys of same-sex love in early 20th-century Britain?",
        answer: "E.M. Forster",
        options: [
            "E.M. Forster",
            "Virginia Woolf",
            "George Orwell",
            "Aldous Huxley"
        ]
    },
    {
        num: 45,
        question: "Which contemporary poet, known for their bold explorations of love and desire among women, often resonates with themes found in queer literature?",
        answer: "Eileen Myles",
        options: [
            "Louise Glück",
            "Eileen Myles",
            "Margaret Atwood",
            "Natasha Trethewey"
        ]
    },
    {
        num: 46,
        question: "Which coming-of-age novel features a queer protagonist navigating the challenges of adolescence, identity, and belonging in a contemporary context?",
        answer: "The Perks of Being a Wallflower",
        options: [
            "To Kill a Mockingbird",
            "The Catcher in the Rye",
            "The Perks of Being a Wallflower",
            "Looking for Alaska"
        ]
    },
    {
        num: 47,
        question: "Which poet's collection titled 'The Black Unicorn' addresses themes of female empowerment and queer love, significantly contributing to feminist and queer literature?",
        answer: "Audre Lorde",
        options: [
            "Sylvia Plath",
            "Audre Lorde",
            "Nikki Giovanni",
            "Gloria Anzaldúa"
        ]
    },
    {
        num: 48,
        question: "Which groundbreaking novel, 'The Well of Loneliness,' is considered one of the first English-language works to explicitly portray a lesbian relationship?",
        answer: "Radclyffe Hall",
        options: [
            "E.M. Forster",
            "Radclyffe Hall",
            "Virginia Woolf",
            "James Baldwin"
        ]
    },
    {
        num: 49,
        question: "Which semi-autobiographical novel by Jeanette Winterson explores themes of sexuality and identity through the experiences of a young girl growing up?",
        answer: "Oranges Are Not the Only Fruit",
        options: [
            "Oranges Are Not the Only Fruit",
            "The Color Purple",
            "The Hours",
            "The Bell Jar"
        ]
    },
    {
        num: 50,
        question: "Which influential art movement of the 20th century, characterized by vibrant colors and bold designs, was heavily influenced by LGBTQ+ artists such as Andy Warhol and Keith Haring?",
        answer: "Pop Art",
        options: [
            "Surrealism",
            "Expressionism",
            "Dadaism",
            "Pop Art"
        ]
    },
    {
        num: 51,
        question: "Which influential artist and activist created the iconic AIDS awareness poster 'Silence = Death'?",
        answer: "David Wojnarowicz",
        options: [
            "Keith Haring",
            "Robert Mapplethorpe",
            "David Wojnarowicz",
            "Felix Gonzalez-Torres"
        ]
    },
    {
        num: 52,
        question: "Which British artist and musician, known for their eclectic style and flamboyant persona, was a significant figure in the glam rock movement?",
        answer: "David Bowie",
        options: [
            "Elton John",
            "David Bowie",
            "Freddie Mercury",
            "Boy George"
        ]
    },
    {
        num: 53,
        question: "Which artistic movement emerged in the late 19th century and often included themes of homoeroticism in its works?",
        answer: "Symbolism",
        options: [
            "Surrealism",
            "Dadaism",
            "Symbolism",
            "Impressionism"
        ]
    },
    {
        num: 54,
        question: "Which artist, known for their work in performance art, uses their body to challenge societal norms related to gender and sexuality?",
        answer: "Ron Athey",
        options: [
            "Marina Abramović",
            "Ron Athey",
            "Yoko Ono",
            "Tracey Emin"
        ]
    },
    {
        num: 55,
        question: "Which queer musician, known for their soulful voice, has been a prominent figure in the neo-soul genre?",
        answer: "Frank Ocean",
        options: [
            "Jill Scott",
            "Frank Ocean",
            "Solange",
            "Erykah Badu"
        ]
    },
    {
        num: 56,
        question: "Which genre of music, known for its experimental nature and often associated with LGBTQ+ artists, emerged from the underground scene in the 1970s?",
        answer: "New Wave",
        options: [
            "Punk",
            "Rock",
            "New Wave",
            "Folk"
        ]
    },
    {
        num: 57,
        question: "Which famous musician, known for their unique style and contributions to pop music, came out as gender fluid in 2018?",
        answer: "Janelle Monáe",
        options: [
            "Janelle Monáe",
            "Frank Ocean",
            "Lil Nas X",
            "Sam Smith"
        ]
    },
    {
        num: 58,
        question: "Which Mexican artist is known for their iconic self-portraits that often explore themes of identity, gender, and sexuality?",
        answer: "Frida Kahlo",
        options: [
            "Frida Kahlo",
            "Diego Rivera",
            "Rufino Tamayo",
            "José Clemente Orozco"
        ]
    },
    {
        num: 59,
        question: "Which artist is known for their provocative photographs that often challenge societal norms surrounding gender and sexuality, especially in the work The Hottentot Venus?",
        answer: "Sara Ramo",
        options: [
            "Cindy Sherman",
            "Nan Goldin",
            "Sara Ramo",
            "Robert Mapplethorpe"
        ]
    },
    {
        num: 60,
        question: "Which programming language, created by Yukihiro Matsumoto, emphasizes simplicity and productivity?",
        answer: "Ruby",
        options: [
            "Java",
            "Ruby",
            "Python",
            "C++"
        ]
    },
    {
        num: 61,
        question: "Which computer scientist is known for developing the World Wide Web and its foundational protocols?",
        answer: "Tim Berners-Lee",
        options: [
            "Tim Berners-Lee",
            "Alan Turing",
            "Vinton Cerf",
            "Ada Lovelace"
        ]
    },
    {
        num: 62,
        question: "Which open-source operating system has gained popularity for its flexibility and community-driven development?",
        answer: "Linux",
        options: [
            "Windows",
            "Linux",
            "macOS",
            "Unix"
        ]
    },
    {
        num: 63,
        question: "Which popular social media platform was originally designed for connecting people through shared interests?",
        answer: "Reddit",
        options: [
            "Tumblr",
            "Pinterest",
            "Reddit",
            "Quora"
        ]
    },    
    {
        num: 64,
        question: "Which programming paradigm focuses on the concept of 'objects' that can contain data and code?",
        answer: "Object-Oriented Programming",
        options: [
            "Procedural Programming",
            "Object-Oriented Programming",
            "Functional Programming",
            "Declarative Programming"
        ]
    },
    {
        num: 65,
        question: "Which software version control system allows multiple developers to work on a project simultaneously?",
        answer: "Git",
        options: [
            "Subversion",
            "Git",
            "Mercurial",
            "Perforce"
        ]
    },
    {
        num: 66,
        question: "Which company is known for its innovation in artificial intelligence and has developed several popular AI tools?",
        answer: "Google",
        options: [
            "Microsoft",
            "Google",
            "IBM",
            "Oracle"
        ]
    },
    {
        num: 67,
        question: "Which programming language is known for its readability and is often recommended for beginners?",
        answer: "Python",
        options: [
            "C++",
            "Python",
            "Java",
            "Ruby"
        ]
    },
    {
        num: 68,
        question: "Which widely-used database management system is known for its reliability and performance?",
        answer: "MySQL",
        options: [
            "MongoDB",
            "MySQL",
            "Oracle",
            "PostgreSQL"
        ]
    },
    {
        num: 69,
        question: "Which programming language is known for its application in web development and is often used alongside HTML and CSS?",
        answer: "JavaScript",
        options: [
            "C#",
            "JavaScript",
            "Go",
            "Swift"
        ]
    },
    {
        num: 70,
        question: "In the Mario franchise, which character is known for their unique ability to control time and space through the use of magical powers?",
        answer: "Kamek",
        options: [
            "Kamek",
            "Toadsworth",
            "Birdo",
            "Fawful"
        ]
    },    
    {
        num: 71,
        question: "In 'The Legend of Zelda' series, which princess possesses the Triforce of Wisdom and often aids Link in his quest?",
        answer: "Princess Zelda",
        options: [
            "Princess Zelda",
            "Princess Hilda",
            "Nabooru",
            "Impa"
        ]
    },    
    {
        num: 72,
        question: "Which game features a female protagonist navigating a post-apocalyptic world filled with infected creatures?",
        answer: "The Last of Us Part II",
        options: [
            "BioShock",
            "The Last of Us Part II",
            "Resident Evil",
            "Half-Life"
        ]
    },
    {
        num: 73,
        question: "In which RPG do players take on the role of a trainer, collecting creatures and battling them in an expansive world?",
        answer: "Pokémon",
        options: [
            "Digimon",
            "Monster Hunter",
            "Pokémon",
            "Final Fantasy"
        ]
    },
    {
        num: 74,
        question: "Which game features a character named Geralt of Rivia, who navigates complex relationships and moral dilemmas?",
        answer: "The Witcher",
        options: [
            "Skyrim",
            "Dark Souls",
            "The Witcher",
            "Bloodborne"
        ]
    },
    {
        num: 75,
        question: "What game is set in a vibrant, open-world environment where players can engage in a variety of activities, including fishing and farming?",
        answer: "Stardew Valley",
        options: [
            "Stardew Valley",
            "Animal Crossing",
            "Harvest Moon",
            "Rune Factory"
        ]
    },
    {
        num: 76,
        question: "Which game follows a band of heroes fighting against an evil sorceress and exploring themes of friendship and sacrifice?",
        answer: "Final Fantasy",
        options: [
            "Chrono Trigger",
            "Final Fantasy",
            "Xenogears",
            "Fire Emblem"
        ]
    },
    {
        num: 77,
        question: "Which game features a rich narrative where players can make choices that affect the outcome and relationships with other characters?",
        answer: "Life is Strange",
        options: [
            "Life is Strange",
            "The Walking Dead",
            "Mass Effect",
            "Until Dawn"
        ]
    },
    {
        num: 78,
        question: "Which iconic game features a character named Samus Aran, who battles space pirates and alien creatures?",
        answer: "Metroid",
        options: [
            "Metroid",
            "Contra",
            "Castlevania",
            "Mega Man"
        ]
    },
    {
        num: 79,
        question: "Which game series is known for its blend of action and role-playing elements, featuring dragons and ancient lore?",
        answer: "Elder Scrolls",
        options: [
            "Witcher",
            "Elder Scrolls",
            "Dragon Age",
            "Final Fantasy"
        ]
    },
    {
        num: 80,
        question: "Which director is known for blending fantasy and reality in films like 'Pan's Labyrinth' and 'The Shape of Water'?",
        answer: "Guillermo del Toro",
        options: [
            "Tim Burton",
            "Guillermo del Toro",
            "Hayao Miyazaki",
            "Baz Luhrmann"
        ]
    },
    {
        num: 81,
        question: "Which actress won an Oscar for her role in 'La La Land', a film exploring the challenges of pursuing dreams in the music industry?",
        answer: "Emma Stone",
        options: [
            "Anne Hathaway",
            "Cate Blanchett",
            "Emma Stone",
            "Natalie Portman"
        ]
    },
    {
        num: 82,
        question: "Which 2019 horror film takes place during a festival in Sweden, exploring themes of grief and community?",
        answer: "Midsommar",
        options: [
            "The Lighthouse",
            "Hereditary",
            "Poltergeist",
            "Midsommar"
        ]
    },
    {
        num: 83,
        question: "What is the title of the Studio Ghibli film where a girl enters a mystical realm to save her parents?",
        answer: "Spirited Away",
        options: [
            "My Neighbor Totoro",
            "Howl's Moving Castle",
            "Spirited Away",
            "Kiki's Delivery Service"
        ]
    },
    {
        num: 84,
        question: "Which science fiction film features the famous phrase, 'In space, no one can hear you scream'?",
        answer: "Alien",
        options: [
            "Alien",
            "Blade Runner",
            "The Matrix",
            "Interstellar"
        ]
    },
    {
        num: 85,
        question: "Which animated series features a group of crystal gems defending Earth from various threats?",
        answer: "Steven Universe",
        options: [
            "The Amazing World of Gumball",
            "Gravity Falls",
            "Steven Universe",
            "Avatar: The Last Airbender"
        ]
    },
    {
        num: 86,
        question: "In 'The Witcher' series, who is Geralt of Rivia's love interest?",
        answer: "Yennefer of Vengerberg",
        options: [
            "Ciri",
            "Triss Merigold",
            "Yennefer of Vengerberg",
            "Galadriel"
        ]
    },
    {
        num: 87,
        question: "What is the primary rulebook for Dungeons & Dragons 5th Edition?",
        answer: "Player’s Handbook",
        options: [
            "Dungeon Master’s Guide",
            "Player’s Handbook",
            "Monster Manual",
            "Xanathar’s Guide to Everything"
        ]
    },
    {
        num: 88,
        question: "Which film features a character named Elio who experiences a profound summer romance in Italy?",
        answer: "Call Me by Your Name",
        options: [
            "Moonlight",
            "The Half of It",
            "Call Me by Your Name",
            "Love, Simon"
        ]
    },
    {
        num: 89,
        question: "What animated series follows the adventures of a group of misfit teenagers in a world where magic is real?",
        answer: "She-Ra and the Princesses of Power",
        options: [
            "Steven Universe",
            "Gravity Falls",
            "Kipo and the Age of Wonderbeasts",
            "She-Ra and the Princesses of Power"
        ]
    },
    {
        num: 90,
        question: "Which mountain range, often associated with adventure and exploration, has diverse ecosystems supporting unique wildlife that challenges traditional binaries?",
        answer: "The Andes",
        options: [
            "The Rockies",
            "The Himalayas",
            "The Andes",
            "The Alps"
        ]
    },
    {
        "num": 91,
        "question": "Which queer icon is known for their famous song 'I'm Coming Out,' which became an anthem for LGBTQ+ rights?",
        "answer": "Diana Ross",
        "options": [
            "Diana Ross",
            "Madonna",
            "Cher",
            "Cyndi Lauper"
        ]
    },
    {
        "num": 92,
        "question": "Which Greek god, often associated with male beauty and desire, had many myths involving same-sex love, including his relationship with Hyacinth?",
        "answer": "Apollo",
        "options": [
            "Zeus",
            "Apollo",
            "Hermes",
            "Dionysus"
        ]
    },
    {
        "num": 93,
        "question": "Which modernist novel, known for its stream-of-consciousness style, explores themes of gender fluidity and has been interpreted as a queer work?",
        "answer": "Orlando",
        "options": [
            "To the Lighthouse",
            "Orlando",
            "The Waves",
            "Ulysses"
        ]
    },
    {
        "num": 94,
        "question": "Which famous comedian and television host came out on her sitcom in the 1990s, making her one of the first openly gay leading characters on TV?",
        "answer": "Ellen DeGeneres",
        "options": [
            "Rosie O'Donnell",
            "Ellen DeGeneres",
            "Jane Lynch",
            "Margaret Cho"
        ]
    },
    {
        "num": 95,
        "question": "Which film from 2017 tells the story of a young Black man's journey of self-discovery and struggles with his sexuality?",
        "answer": "Moonlight",
        "options": [
            "Call Me by Your Name",
            "Moonlight",
            "The Danish Girl",
            "Carol"
        ]
    },
    {
        "num": 96,
        "question": "Which historic LGBTQ+ rights event, often seen as a turning point for the gay liberation movement, took place in 1969?",
        "answer": "Stonewall Riots",
        "options": [
            "Stonewall Riots",
            "Harvey Milk March",
            "ACT UP Protest",
            "Christopher Street Liberation"
        ]
    },
    {
        "num": 97,
        "question": "Which queer theory concept, coined by Judith Butler, suggests that gender is a performance and not an innate quality?",
        "answer": "Gender Performativity",
        "options": [
            "Gender Fluidity",
            "Gender Performativity",
            "Gender Binary",
            "Queer Essentialism"
        ]
    },
    {
        "num": 98,
        "question": "Which famous musical features a genderqueer lead character from East Berlin and explores themes of love, identity, and self-expression?",
        "answer": "Hedwig and the Angry Inch",
        "options": [
            "Hedwig and the Angry Inch",
            "Rent",
            "Kinky Boots",
            "The Rocky Horror Picture Show"
        ]
    },
    {
        "num": 99,
        "question": "Which 19th-century poet, often cited as one of America's greatest, is known for his works exploring male companionship and homoerotic themes?",
        "answer": "Walt Whitman",
        "options": [
            "Walt Whitman",
            "Emily Dickinson",
            "Ralph Waldo Emerson",
            "Henry David Thoreau"
        ]
    },
    {
        "num": 100,
        "question": "Which television series, created by Ryan Murphy, was groundbreaking for featuring a predominantly trans cast and highlighted the underground ball culture of the 1980s?",
        "answer": "Pose",
        "options": [
            "Glee",
            "Pose",
            "RuPaul’s Drag Race",
            "The L Word"
        ]
    },
    {
        "num": 101,
        "question": "Which historical figure, a Roman emperor, openly had relationships with men and is remembered for his romantic partnership with Antinous?",
        "answer": "Hadrian",
        "options": [
            "Hadrian",
            "Nero",
            "Augustus",
            "Tiberius"
        ]
    },
    {
        "num": 102,
        "question": "Which 1998 film, based on a true story, explores the life and tragic murder of Matthew Shepard, a young gay man in Wyoming?",
        "answer": "The Laramie Project",
        "options": [
            "The Laramie Project",
            "Brokeback Mountain",
            "Milk",
            "Angels in America"
        ]
    },
    {
        "num": 103,
        "question": "Which Renaissance artist, known for works like 'David' and the Sistine Chapel, had a complicated relationship with his own sexuality?",
        "answer": "Michelangelo",
        "options": [
            "Michelangelo",
            "Leonardo da Vinci",
            "Raphael",
            "Donatello"
        ]
    },
    {
        "num": 104,
        "question": "Which singer's hit single 'Born This Way' became an LGBTQ+ anthem for self-acceptance and pride?",
        "answer": "Lady Gaga",
        "options": [
            "Lady Gaga",
            "Beyoncé",
            "Katy Perry",
            "Taylor Swift"
        ]
    },
    {
        "num": 105,
        "question": "Which French philosopher is known for his work on the history of sexuality, challenging conventional views of power, identity, and sexual norms?",
        "answer": "Michel Foucault",
        "options": [
            "Michel Foucault",
            "Jean-Paul Sartre",
            "Simone de Beauvoir",
            "Jacques Derrida"
        ]
    },
    {
        "num": 106,
        "question": "Which American novelist and social critic wrote 'Giovanni's Room,' a landmark novel about homosexuality in the 1950s?",
        "answer": "James Baldwin",
        "options": [
            "James Baldwin",
            "Toni Morrison",
            "William Faulkner",
            "Richard Wright"
        ]
    },
    {
        "num": 107,
        "question": "Which international event, first held in New York City, celebrates LGBTQ+ culture and has grown into a global celebration of diversity and pride?",
        "answer": "Pride Parade",
        "options": [
            "Pride Parade",
            "Gay Games",
            "Harvey Milk Day",
            "Stonewall March"
        ]
    },
    {
        "num": 108,
        "question": "Which iconic movie star of the 1950s is often remembered as a queer figure due to speculation about his relationships with men?",
        "answer": "James Dean",
        "options": [
            "James Dean",
            "Rock Hudson",
            "Marlon Brando",
            "Montgomery Clift"
        ]
    },
    {
        "num": 109,
        "question": "Which American drag queen became a cultural icon, hosting a hit television show and launching a global phenomenon?",
        "answer": "RuPaul",
        "options": [
            "RuPaul",
            "Divine",
            "Lady Bunny",
            "Jinkx Monsoon"
        ]
    },
    {
        "num": 110,
        "question": "Which 1990 documentary film chronicles the lives of Black and Latinx LGBTQ+ individuals in New York's ballroom scene?",
        "answer": "Paris Is Burning",
        "options": [
            "Paris Is Burning",
            "The Death and Life of Marsha P. Johnson",
            "The Celluloid Closet",
            "Tongues Untied"
        ]
    },
    {
        "num": 111,
        "question": "Which bisexual poet and novelist was one of the leading figures of the Harlem Renaissance?",
        "answer": "Langston Hughes",
        "options": [
            "Langston Hughes",
            "Zora Neale Hurston",
            "Claude McKay",
            "Countee Cullen"
        ]
    },
    {
        "num": 112,
        "question": "Which popular Netflix series tells the story of a group of LGBTQ+ inmates in a women's prison?",
        "answer": "Orange Is the New Black",
        "options": [
            "Orange Is the New Black",
            "The L Word",
            "Queer as Folk",
            "Sense8"
        ]
    },
    {
        "num": 113,
        "question": "Which ancient civilization is known for having a social structure that accepted same-sex relationships, especially in the context of mentorship and warfare?",
        "answer": "Ancient Greece",
        "options": [
            "Ancient Greece",
            "Ancient Egypt",
            "Ancient Rome",
            "Mesopotamia"
        ]
    },
    {
        "num": 114,
        "question": "Which LGBTQ+ activist and drag performer threw the first brick during the Stonewall Riots, according to popular accounts?",
        "answer": "Marsha P. Johnson",
        "options": [
            "Marsha P. Johnson",
            "Sylvia Rivera",
            "Stormé DeLarverie",
            "Harvey Milk"
        ]
    },
    {
        "num": 115,
        "question": "Which LGBTQ+ event is commemorated every year on October 11 to celebrate coming out and living openly?",
        "answer": "National Coming Out Day",
        "options": [
            "National Coming Out Day",
            "Transgender Day of Visibility",
            "Pride Day",
            "Harvey Milk Day"
        ]
    },
    {
        "num": 116,
        "question": "Which award-winning 2018 film features a love story between two young men in Italy, set during the summer of 1983?",
        "answer": "Call Me by Your Name",
        "options": [
            "Call Me by Your Name",
            "Love, Simon",
            "Moonlight",
            "God's Own Country"
        ]
    },
    {
        "num": 117,
        "question": "Which Latin American country was the first to legalize same-sex marriage in 2010?",
        "answer": "Argentina",
        "options": [
            "Argentina",
            "Mexico",
            "Brazil",
            "Colombia"
        ]
    },
    {
        "num": 118,
        "question": "Which lesbian singer-songwriter is known for her hit album 'Jagged Little Pill' and for speaking openly about her sexuality?",
        "answer": "Melissa Etheridge",
        "options": [
            "Melissa Etheridge",
            "Alanis Morissette",
            "Tracy Chapman",
            "Tegan Quin"
        ]
    },
    {
        "num": 119,
        "question": "Which 1987 film directed by Pedro Almodóvar is considered a queer classic for its portrayal of unconventional relationships?",
        "answer": "Law of Desire",
        "options": [
            "Law of Desire",
            "All About My Mother",
            "Bad Education",
            "Women on the Verge of a Nervous Breakdown"
        ]
    },
    {
        "num": 120,
        "question": "Which early LGBTQ+ rights organization was founded in 1950 by Harry Hay in Los Angeles, advocating for the rights of gay men?",
        "answer": "The Mattachine Society",
        "options": [
            "The Mattachine Society",
            "The Daughters of Bilitis",
            "Lambda Legal",
            "Gay Liberation Front"
        ]
    },
    {
        "num": 121,
        "question": "Which annual global observance on November 20 honors the memory of transgender people whose lives were lost in acts of anti-trans violence?",
        "answer": "Transgender Day of Remembrance",
        "options": [
            "Transgender Day of Remembrance",
            "Trans Pride Day",
            "Non-Binary Visibility Day",
            "Genderqueer Awareness Day"
        ]
    },
    {
        "num": 122,
        "question": "Which play by Tennessee Williams is often regarded as a queer work for its depiction of repressed sexuality and desire?",
        "answer": "Cat on a Hot Tin Roof",
        "options": [
            "Cat on a Hot Tin Roof",
            "A Streetcar Named Desire",
            "The Glass Menagerie",
            "Sweet Bird of Youth"
        ]
    },
    {
        "num": 123,
        "question": "Which Brazilian drag queen, known for their music and activism, has become a global pop sensation in recent years?",
        "answer": "Pabllo Vittar",
        "options": [
            "Pabllo Vittar",
            "Gloria Groove",
            "Anitta",
            "Liniker"
        ]
    },
    {
        "num": 124,
        "question": "Which groundbreaking Broadway musical from 2015 tells the story of a young woman discovering her sexuality while growing up with a closeted gay father?",
        "answer": "Fun Home",
        "options": [
            "Fun Home",
            "The Color Purple",
            "Hedwig and the Angry Inch",
            "Kinky Boots"
        ]
    },
    {
        "num": 125,
        "question": "Which trans actress became the first openly transgender person nominated for an acting Emmy Award for her role in 'Orange Is the New Black'?",
        "answer": "Laverne Cox",
        "options": [
            "Laverne Cox",
            "Mj Rodriguez",
            "Angelica Ross",
            "Candis Cayne"
        ]
    },
    {
        "num": 126,
        "question": "Which famous Indian LGBTQ+ rights activist successfully fought to decriminalize same-sex relationships in India in 2018?",
        "answer": "Navtej Singh Johar",
        "options": [
            "Navtej Singh Johar",
            "Keshav Suri",
            "Anjali Gopalan",
            "Gopi Shankar Madurai"
        ]
    },
    {
        "num": 127,
        "question": "Which famous Irish poet and playwright was imprisoned for 'gross indecency' due to his homosexual relationships in the 19th century?",
        "answer": "Oscar Wilde",
        "options": [
            "Oscar Wilde",
            "George Bernard Shaw",
            "W.B. Yeats",
            "James Joyce"
        ]
    },
    {
        "num": 128,
        "question": "Which LGBTQ+ streaming platform, founded in 2015, offers a wide selection of queer movies and shows?",
        "answer": "Revry",
        "options": [
            "Revry",
            "OUTtv",
            "Here TV",
            "Netflix LGBTQ+"
        ]
    },
    {
        "num": 129,
        "question": "Which artist, often regarded as one of the greatest photographers of the 20th century, explored themes of gender, identity, and the human body?",
        "answer": "Robert Mapplethorpe",
        "options": [
            "Robert Mapplethorpe",
            "Annie Leibovitz",
            "Cindy Sherman",
            "Nan Goldin"
        ]
    },
    {
        "num": 130,
        "question": "Which punk rock icon, who identifies as gender-fluid, is known for their work as the lead singer of the band Against Me!?",
        "answer": "Laura Jane Grace",
        "options": [
            "Laura Jane Grace",
            "Beth Ditto",
            "Lynn Breedlove",
            "Joan Jett"
        ]
    },
    {
        "num": 131,
        "question": "Which transgender American actress starred in the groundbreaking 1977 film 'Outrageous!' which depicted drag performance and queer life?",
        "answer": "Craig Russell",
        "options": [
            "Craig Russell",
            "Sylvia Rivera",
            "Candy Darling",
            "Divine"
        ]
    },
    {
        "num": 132,
        "question": "Which British activist founded Stonewall UK in 1989 to fight for LGBTQ+ rights, particularly focusing on the repeal of Section 28?",
        "answer": "Sir Ian McKellen",
        "options": [
            "Sir Ian McKellen",
            "Peter Tatchell",
            "Elton John",
            "Olly Alexander"
        ]
    },
    {
        "num": 133,
        "question": "Which author wrote the critically acclaimed novel 'The Song of Achilles,' which retells the love story of Achilles and Patroclus from Greek mythology?",
        "answer": "Madeline Miller",
        "options": [
            "Madeline Miller",
            "Margaret Atwood",
            "Chimamanda Ngozi Adichie",
            "E.M. Forster"
        ]
    },
    {
        "num": 134,
        "question": "Which television series, set in San Francisco, follows a group of LGBTQ+ friends navigating life and love in the city?",
        "answer": "Looking",
        "options": [
            "Looking",
            "Tales of the City",
            "The L Word",
            "Queer as Folk"
        ]
    },
    {
        "num": 135,
        "question": "Which international drag competition show has grown into a global phenomenon, with various international versions and spin-offs?",
        "answer": "RuPaul's Drag Race",
        "options": [
            "RuPaul's Drag Race",
            "Dragula",
            "The Boulet Brothers",
            "La Más Draga",
        ]
    },
    {
        "num": 136,
        "question": "Which openly gay mathematician helped break the Nazi Enigma code during World War II, significantly advancing computer science?",
        "answer": "Alan Turing",
        "options": [
            "Alan Turing",
            "John von Neumann",
            "Charles Babbage",
            "Claude Shannon"
        ]
    },
    {
        "num": 137,
        "question": "Which trans astrophysicist is known for their work in galactic dynamics and was awarded the AAS Lancelot Berkeley Prize in 2021?",
        "answer": "Dr. Chanda Prescod-Weinstein",
        "options": [
            "Dr. Chanda Prescod-Weinstein",
            "Dr. Sara Seager",
            "Dr. Katie Bouman",
            "Dr. Jane Rigby"
        ]
    },
    {
        "num": 138,
        "question": "Which trans geneticist became a prominent advocate for LGBTQ+ diversity in STEM, particularly through their work on transgender health and genetics?",
        "answer": "Dr. Ben Barres",
        "options": [
            "Dr. Ben Barres",
            "Dr. Lynn Conway",
            "Dr. Jennifer Finney Boylan",
            "Dr. Anne Fausto-Sterling"
        ]
    },
    {
        "num": 139,
        "question": "Which biologist and activist is known for their groundbreaking work on sexual behavior in animals, documenting same-sex behavior across species?",
        "answer": "Dr. Joan Roughgarden",
        "options": [
            "Dr. Joan Roughgarden",
            "Dr. Alfred Kinsey",
            "Dr. Sarah Blaffer Hrdy",
            "Dr. Kinji Imanishi"
        ]
    },
    {
        "num": 140,
        "question": "Which lesbian NASA astronaut became the first American woman to go to space in 1983?",
        "answer": "Sally Ride",
        "options": [
            "Sally Ride",
            "Mae Jemison",
            "Peggy Whitson",
            "Eileen Collins"
        ]
    },
    {
        "num": 141,
        "question": "Which sci-fi show on Netflix, created by the Wachowskis, features an ensemble of LGBTQ+ characters from around the world who are psychically connected?",
        "answer": "Sense8",
        "options": [
            "Sense8",
            "The Expanse",
            "Black Mirror",
            "Stranger Things"
        ]
    },
    {
        "num": 142,
        "question": "Which LGBTQ+ teen drama series on Netflix, based on a webcomic, follows two boys navigating school life and their romantic relationship?",
        "answer": "Heartstopper",
        "options": [
            "Heartstopper",
            "Love, Victor",
            "Young Royals",
            "Euphoria"
        ]
    },
    {
        "num": 143,
        "question": "Which animated series on Cartoon Network is celebrated for its LGBTQ+ representation, particularly the romance between Ruby and Sapphire?",
        "answer": "Steven Universe",
        "options": [
            "Steven Universe",
            "Adventure Time",
            "She-Ra and the Princesses of Power",
            "The Owl House"
        ]
    },
    {
        "num": 144,
        "question": "Which 2020 TV show, set in Victorian England, centers around a lesbian landowner and is based on the real-life diaries of Anne Lister?",
        "answer": "Gentleman Jack",
        "options": [
            "Gentleman Jack",
            "Dickinson",
            "Killing Eve",
            "The Handmaid’s Tale"
        ]
    },
    {
        "num": 145,
        "question": "Which animated fantasy show on Netflix, known for its diverse LGBTQ+ representation, features a relationship between the characters Adora and Catra?",
        "answer": "She-Ra and the Princesses of Power",
        "options": [
            "She-Ra and the Princesses of Power",
            "Kipo and the Age of Wonderbeasts",
            "The Dragon Prince",
            "Arcane"
        ]
    },
    {
        "num": 146,
        "question": "Which critically acclaimed video game features a queer relationship between Ellie and Dina as central to its plot?",
        "answer": "The Last of Us Part II",
        "options": [
            "The Last of Us Part II",
            "Life is Strange",
            "Horizon Zero Dawn",
            "Mass Effect"
        ]
    },
    {
        "num": 147,
        "question": "Which episodic game series by Dontnod Entertainment follows a time-traveling teenage girl and has been praised for its LGBTQ+ representation?",
        "answer": "Life is Strange",
        "options": [
            "Life is Strange",
            "Tell Me Why",
            "Gone Home",
            "Dreamfall Chapters"
        ]
    },
    {
        "num": 148,
        "question": "Which popular space exploration game made headlines for including non-binary and transgender character options in its 2020 update?",
        "answer": "No Man's Sky",
        "options": [
            "No Man's Sky",
            "The Outer Worlds",
            "Star Citizen",
            "Elite Dangerous"
        ]
    },
    {
        "num": 149,
        "question": "Which interactive novel game, created by the studio Fulbright, tells a compelling story of a young woman discovering her sister’s lesbian relationship?",
        "answer": "Gone Home",
        "options": [
            "Gone Home",
            "Oxenfree",
            "What Remains of Edith Finch",
            "Kentucky Route Zero"
        ]
    },
    {
        "num": 150,
        "question": "Which game features a love triangle involving two women and has been considered one of the most iconic examples of sapphic romance in gaming?",
        "answer": "The Legend of Korra (PlatinumGames)",
        "options": [
            "The Legend of Korra (PlatinumGames)",
            "Dragon Age: Inquisition",
            "Fire Emblem: Three Houses",
            "The Sims"
        ]
    },
    {
        "num": 151,
        "question": "Which CEO of Apple came out as gay in 2014, becoming one of the most prominent LGBTQ+ leaders in the tech industry?",
        "answer": "Tim Cook",
        "options": [
            "Tim Cook",
            "Sundar Pichai",
            "Sheryl Sandberg",
            "Satya Nadella"
        ]
    },
    {
        "num": 152,
        "question": "Which trans woman and computer scientist played a key role in the development of the first VLSI chips, revolutionizing the semiconductor industry?",
        "answer": "Dr. Lynn Conway",
        "options": [
            "Dr. Lynn Conway",
            "Sophie Wilson",
            "Margaret Hamilton",
            "Barbara Liskov"
        ]
    },
    {
        "num": 153,
        "question": "Which LGBTQ+ advocate and YouTube creator is also a leading figure in the digital marketing space and co-founded the ‘Buffer’ social media tool?",
        "answer": "Joel Gascoigne",
        "options": [
            "Joel Gascoigne",
            "Jonah Peretti",
            "Leah Culver",
            "Sara Mauskopf"
        ]
    },
    {
        "num": 154,
        "question": "Which gaming industry veteran and trans woman founded the indie game studio Giant Spacekat, known for championing diversity in the gaming world?",
        "answer": "Brianna Wu",
        "options": [
            "Brianna Wu",
            "Kim Swift",
            "Robin Hunicke",
            "Kara Ellison"
        ]
    },
    {
        "num": 155,
        "question": "Which tech company was one of the first major corporations to offer health benefits to same-sex partners of employees in the 1990s?",
        "answer": "Microsoft",
        "options": [
            "Microsoft",
            "Apple",
            "IBM",
            "Google"
        ]
    },
    {
        "num": 156,
        "question": "Which American poet and essayist, who wrote 'The Dream of a Common Language,' was a key figure in lesbian feminist poetry?",
        "answer": "Adrienne Rich",
        "options": [
            "Adrienne Rich",
            "Audre Lorde",
            "Mary Oliver",
            "Pat Parker"
        ]
    },
    {
        "num": 157,
        "question": "Which novelist wrote the critically acclaimed book 'Fingersmith,' featuring a complex lesbian romance in Victorian England?",
        "answer": "Sarah Waters",
        "options": [
            "Sarah Waters",
            "Jeanette Winterson",
            "Patricia Highsmith",
            "Alice Walker"
        ]
    },
    {
        "num": 158,
        "question": "Which American author is known for writing the sapphic novel 'The Price of Salt,' which was later adapted into the film 'Carol'?",
        "answer": "Patricia Highsmith",
        "options": [
            "Patricia Highsmith",
            "Dorothy Allison",
            "Radclyffe Hall",
            "Rita Mae Brown"
        ]
    },
    {
        "num": 159,
        "question": "Which Scottish author wrote the semi-autobiographical novel 'Oranges Are Not the Only Fruit,' about a young girl coming to terms with her sexuality?",
        "answer": "Jeanette Winterson",
        "options": [
            "Jeanette Winterson",
            "Sarah Waters",
            "Ali Smith",
            "Dorothy Allison"
        ]
    },
    {
        "num": 160,
        "question": "Which 1928 novel, considered a groundbreaking work in lesbian literature, was written by British author Radclyffe Hall?",
        "answer": "The Well of Loneliness",
        "options": [
            "The Well of Loneliness",
            "Nightwood",
            "Desert of the Heart",
            "The Color Purple"
        ]
    },
    {
        "num": 161,
        "question": "In 'The Owl House', who is Luz Noceda's love interest, marking Disney's first significant portrayal of a same-sex relationship?",
        "answer": "Amity Blight",
        "options": [
            "Willow Park",
            "Amity Blight",
            "Eda Clawthorne",
            "Lilith Clawthorne"
        ]
    },
    {
        "num": 162,
        "question": "Which animated series follows a magical boy named Wirt and his brother Greg as they journey through a mysterious forest called 'The Unknown'?",
        "answer": "Over the Garden Wall",
        "options": [
            "Gravity Falls",
            "Adventure Time",
            "Over the Garden Wall",
            "Star vs. the Forces of Evil"
        ]
    },
    {
        "num": 163,
        "question": "In 'Steven Universe', which character represents a fusion between Ruby and Sapphire, forming a loving same-sex relationship?",
        "answer": "Garnet",
        "options": [
            "Pearl",
            "Garnet",
            "Lapis Lazuli",
            "Amethyst"
        ]
    },
    {
        "num": 164,
        "question": "Which 'Adventure Time' spinoff series follows Fionna and Cake, two characters from an alternate gender-swapped universe?",
        "answer": "Adventure Time: Fionna and Cake",
        "options": [
            "Distant Lands",
            "Adventure Time: Fionna and Cake",
            "Adventure Time: Islands",
            "Adventure Time: Stakes"
        ]
    },
    {
        "num": 165,
        "question": "In 'She-Ra and the Princesses of Power', who becomes Adora's love interest, marking one of the most celebrated sapphic relationships in modern animation?",
        "answer": "Catra",
        "options": [
            "Bow",
            "Glimmer",
            "Catra",
            "Scorpia"
        ]
    },
    {
        "num": 166,
        "question": "Which animated Netflix series follows a group of friends who discover they're witches and includes LGBTQ+ representation through multiple characters?",
        "answer": "The Hollow",
        "options": [
            "Hilda",
            "The Dragon Prince",
            "The Hollow",
            "Wizards: Tales of Arcadia"
        ]
    },
    {
        "num": 167,
        "question": "In 'Star vs. the Forces of Evil', which character breaks stereotypes and has a notable same-sex kiss during the series?",
        "answer": "Jackie Lynn Thomas",
        "options": [
            "Star Butterfly",
            "Jackie Lynn Thomas",
            "Eclipsa",
            "Janna Ordonia"
        ]
    },
    {
        "num": 168,
        "question": "Which Netflix series is a coming-of-age animated comedy featuring the friendship and adventures of two best friends, one of whom is non-binary?",
        "answer": "Big Mouth",
        "options": [
            "Big Mouth",
            "The Dragon Prince",
            "Hilda",
            "The Loud House"
        ]
    },
    {
        "num": 169,
        "question": "What animated series features a teenage girl who is a superheroine and also addresses issues related to identity and diversity?",
        "answer": "Miraculous: Tales of Ladybug & Cat Noir",
        "options": [
            "The Loud House",
            "Miraculous: Tales of Ladybug & Cat Noir",
            "Amphibia",
            "DuckTales"
        ]
    },
    {
        "num": 170,
        "question": "In 'Kipo and the Age of the Wonderbeasts', which character is known for their leadership qualities and is part of a community of mutant animals?",
        "answer": "Kipo",
        "options": [
            "Kipo",
            "Benson",
            "Mandu",
            "Wolf"
        ]
    },
    {
        "num": 171,
        "question": "Which series features an anthropomorphic raccoon and a tree who are members of the Guardians of the Galaxy?",
        "answer": "Guardians of the Galaxy",
        "options": [
            "Guardians of the Galaxy",
            "Teen Titans Go!",
            "Big Hero 6: The Series",
            "Transformers: Cyberverse"
        ]
    },
    {
        "num": 172,
        "question": "In 'Amphibia', what is the name of the main character who is transported to a world of anthropomorphic frogs?",
        "answer": "Anne Boonchuy",
        "options": [
            "Anne Boonchuy",
            "Sprig Plantar",
            "Hop Pop Plantar",
            "Yoda"
        ]
    },
    {
        "num": 173,
        "question": "What animated show features a character named Daria Morgendorffer, known for her sarcastic wit and critical perspective on high school life?",
        "answer": "Daria",
        "options": [
            "Daria",
            "Beavis and Butt-Head",
            "The Simpsons",
            "South Park"
        ]
    },
    {
        "num": 174,
        "question": "In 'The Dragon Prince', which character is a powerful mage and has a complex relationship with one of the main characters?",
        "answer": "Ezran",
        "options": [
            "Rayla",
            "Ezran",
            "Callum",
            "Amaya"
        ]
    },
    {
        "num": 175,
        "question": "Which show features a group of teenagers who transform into magical warriors to save the world, and includes themes of friendship and bravery?",
        "answer": "W.I.T.C.H.",
        "options": [
            "W.I.T.C.H.",
            "Totally Spies!",
            "Powerpuff Girls Z",
            "Sailor Moon"
        ]
    },
    {
        "num": 176,
        "question": "Which animated series follows a group of kids who become superheroes and form a team called the 'Teen Titans'?",
        "answer": "Teen Titans Go!",
        "options": [
            "Teen Titans Go!",
            "Young Justice",
            "Avengers: Assemble",
            "The Flash"
        ]
    },
    {
        "num": 177,
        "question": "In 'Craig of the Creek', what is the name of Craig's best friends who join him on various adventures in the creek?",
        "answer": "Kelsey and JP",
        "options": [
            "Kelsey and JP",
            "Ben and Jerry",
            "Max and Ruby",
            "Finn and Jake"
        ]
    },
    {
        "num": 178,
        "question": "What is the name of the main character in 'Carmen Sandiego', who is a master thief with a heart of gold?",
        "answer": "Carmen Sandiego",
        "options": [
            "Carmen Sandiego",
            "V.I.L.E.",
            "Graham",
            "Rita"
        ]
    },
    {
        "num": 179,
        "question": "In 'The Loud House', what is the name of Lincoln Loud's best friend who often helps him with his adventures?",
        "answer": "Clyde McBride",
        "options": [
            "Clyde McBride",
            "Luna Loud",
            "Lisa Loud",
            "Lori Loud"
        ]
    },
    {
        "num": 180,
        "question": "Which animated series features a group of siblings with a variety of personalities, tackling daily life challenges?",
        "answer": "The Loud House",
        "options": [
            "The Loud House",
            "DuckTales",
            "Phineas and Ferb",
            "Bob's Burgers"
        ]
    },
    {
        "num": 181,
        "question": "In 'Hilda', what creature is Hilda's best friend, who is often seen helping her on her adventures?",
        "answer": "Woodman",
        "options": [
            "Woodman",
            "Twig",
            "Alfur",
            "Frida"
        ]
    },
    {
        "num": 182,
        "question": "What animated series features a character named Shira, a lioness who fights against evil forces to protect her home?",
        "answer": "Spirit Riding Free",
        "options": [
            "Spirit Riding Free",
            "The Lion Guard",
            "Tales of Arcadia",
            "Kung Fu Panda: The Paws of Destiny"
        ]
    },
    {
        "num": 183,
        "question": "Which cartoon features characters who are based on real historical figures and events in a comedic format?",
        "answer": "Animaniacs",
        "options": [
            "Animaniacs",
            "Futurama",
            "The Simpsons",
            "Family Guy"
        ]
    },
    {
        "num": 184,
        "question": "In 'My Little Pony: Friendship Is Magic', what is the name of the unicorn who is the Princess of Friendship?",
        "answer": "Twilight Sparkle",
        "options": [
            "Twilight Sparkle",
            "Rainbow Dash",
            "Pinkie Pie",
            "Rarity"
        ]
    },
    {
        "num": 185,
        "question": "What series follows the misadventures of an animated family and includes a variety of social and political commentary?",
        "answer": "The Simpsons",
        "options": [
            "The Simpsons",
            "Family Guy",
            "Bob's Burgers",
            "Futurama"
        ]
    },
    {
        num: 186,
        question: "What is the main benefit of using version control systems like Git in software development?",
        answer: "Facilitates collaboration & tracks changes in code",
        options: [
            "Improves application speed",
            "Facilitates collaboration & tracks changes in code",
            "Reduces code errors",
            "Simplifies debugging"
        ]
    },
    {
        num: 187,
        question: "What is the primary function of an operating system?",
        answer: "Manage computer hardware and software resources",
        options: [
            "Run applications",
            "Manage computer hardware and software resources",
            "Store data",
            "Provide internet connectivity"
        ]
    },
    {
        num: 188,
        question: "What is the term for a type of attack where an attacker intercepts communication between two parties to steal information, often exploiting unsecured networks?",
        answer: "Man-in-the-Middle Attack",
        options: [
            "Denial-of-Service Attack",
            "Phishing Attack",
            "Man-in-the-Middle Attack",
            "SQL Injection"
        ]
    },
    {
        num: 189,
        question: "What is the purpose of a version control system like Git?",
        answer: "Track changes in source code over time",
        options: [
            "Compile code",
            "Track changes in source code over time",
            "Run tests",
            "Deploy applications"
        ]
    },
    {
        num: 190,
        question: "Which algorithmic concept involves breaking a problem into smaller subproblems and solving each subproblem only once?",
        answer: "Dynamic Programming",
        options: [
            "Greedy Algorithm",
            "Recursion",
            "Dynamic Programming",
            "Backtracking"
        ]
    },
    {
        num: 191,
        question: "Which data structure uses a last in, first out (LIFO) method of data retrieval?",
        answer: "Stack",
        options: [
            "Queue",
            "Array",
            "Stack",
            "Linked List"
        ]
    },
    {
        num: 192,
        question: "What is the term for a bug that only appears under specific conditions and is hard to reproduce?",
        answer: "Heisenbug",
        options: [
            "Heisenbug",
            "Flaky Bug",
            "Fuzzer",
            "Syntax Error"
        ]
    },
    {
        num: 193,
        question: "Which database model uses tables to represent data and relationships among them?",
        answer: "Relational Database",
        options: [
            "NoSQL Database",
            "Graph Database",
            "Relational Database",
            "Object-Oriented Database"
        ]
    },
    {
        num: 194,
        question: "Which term describes the practice of writing code that is easy to read and maintain?",
        answer: "Clean Code",
        options: [
            "Refactored Code",
            "Clean Code",
            "Optimized Code",
            "Legacy Code"
        ]
    },
    {
        num: 195,
        question: "Which framework is commonly used for building mobile applications using JavaScript?",
        answer: "React Native",
        options: [
            "Angular",
            "Django",
            "React Native",
            "Flask"
        ]
    },
    {
        num: 196,
        question: "What is the name of the scientific principle that states that energy cannot be created or destroyed, only transformed from one form to another?",
        answer: "Law of Conservation of Energy",
        options: [
            "Newton's First Law",
            "Law of Conservation of Mass",
            "Law of Conservation of Energy",
            "Thermodynamics"
        ]
    },
    {
        num: 197,
        question: "Which particle is considered the fundamental building block of matter and is a major component of atoms?",
        answer: "Quark",
        options: [
            "Electron",
            "Quark",
            "Neutron",
            "Photon"
        ]
    },
    {
        num: 198,
        question: "What term is used to describe the technique of painting on wet plaster, which was used extensively in Renaissance frescoes?",
        answer: "Fresco",
        options: [
            "Sfumato",
            "Chiaroscuro",
            "Fresco",
            "Impasto"
        ]
    },
    {
        num: 199,
        question: "Which movement, originating in the early 20th century, sought to break away from traditional representation in art and emphasized abstraction?",
        answer: "Modernism",
        options: [
            "Renaissance",
            "Baroque",
            "Modernism",
            "Romanticism"
        ]
    },
    {
        num: 200,
        question: "What is the name of the bending art that combines different elemental styles and is prominently featured in 'The Legend of Korra'?",
        answer: "Energybending",
        options: [
            "Energybending",
            "Bloodbending",
            "Lavabending",
            "Spiritbending"
        ]
    },
];

























































