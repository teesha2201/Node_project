import React, {useState,createContext,useEffect} from "react"


export const Store =  createContext();

const StoreContextApi=(props)=>
{
    // const [apidata,setApidata] = useState([

    //     {
    //         id:"0",
    //         Movie:"Raksha Bandhan Movies related to Raksha Bandhan often depict the emotional and heartfelt moments between siblings",
    //         poster:"https://www.filmibeat.com/ph-big/2022/06/raksha-bandhan_165580980900.jpg", 
    //         Category:"Bollywood" , 
    //         Heading:"Movies related to Raksha Bandhan often depict the emotional and heartfelt moments between siblings. These films may explore themes of family, love, and the special bond between brothers and sisters."
    //     }
    //     ,
    //     {
    //     id:"1",
    //     Movie:"SanamRe 'Sanam Re' is known for its soulful songs and picturesque locations. Throughout the film, there are emotional and heartwarming moments as well as some beautiful music.",
    //     poster:"https://pbs.twimg.com/media/CifCoiUXAAAS8Al.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"Throughout the film, there are emotional and heartwarming moments as well as some beautiful music that adds to the romantic atmosphere. 'Sanam Re' is known for its soulful songs and picturesque locations."
    //     }
    //     ,
    //     {id:"2",
    //     Movie:"Sanam Teri Kasam :Best Ever Love Story of Saru and Inder's relationship",
    //     poster:"https://m.media-amazon.com/images/M/MV5BNGY1NWMxYzctMjQ5Ni00NjJiLTgyN2YtOTZlZWQ3OTcxZWFhXkEyXkFqcGdeQXVyNTIwODMzNjc@._V1_.jpg",
    //     Category:"Bollywood" , 
    //     Heading:"Saru and Inder's relationship deepens, and they fall in love with each other. However, their love faces numerous challenges, including family opposition and societal expectations. The film explores their struggles and sacrifices as they navigate their love story."
    //     }
    //     ,
    //     {id:"3",
    //     Movie:"Tamasha , Tamasha Isn't What Deepika's Film Was Originally Titled.",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9mFI4euqxz57TI5tHi88klJ1L9UvSWvK83hqjkO8AUHY1hQT1c6av1l7BQXVn0keywA&usqp=CAU",
    //     Category:"Bollywood" ,
    //     Heading:" Tamasha Isn't What Deepika's Film Was Originally Titled. Window Seat was the working title for Tamasha. For Jab We Met, the working title was Train and for Love Aaj Kal, it was Elastic, the 44-year-old director told reporters at the trailer launch of Tamasha.The film features Ranbir Kapoor as Ved and Deepika Padukone as Tara in the lead roles. 'Tamasha' is a unique and thought-provoking film that explores themes of self-discovery, conformity, and the power of storytelling."
    //     }
    //     ,
    //     {id:"4",
    //     Movie:"Jab We Met:the charming chemistry between Shahid Kapoor and Kareena Kapoor Khan",
    //     poster:"https://wallpapercave.com/wp/wp6239075.jpg", 
    //     Category:"Bollywood" ,
    //     Heading:"'Jab We Met' is known for its witty dialogues, memorable songs, and the charming chemistry between Shahid Kapoor and Kareena Kapoor Khan. It's a heartwarming tale of how love and companionship can heal even the most broken spirits and how life can take unexpected turns that lead to happiness and self-discovery. "}
    //     ,
    //     {id:"5",
    //     Movie:"Raksha Bandhan RakshaBandhan review: Akshay Kumar film moves you to tears with strong message on dowry, entertains with clean humour",
    //     poster:"https://www.filmibeat.com/ph-big/2022/06/raksha-bandhan_165580980900.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"Movies related to Raksha Bandhan often depict the emotional and heartfelt moments between siblings. These films may explore themes of family, love, and the special bond between brothers and sisters."
    //     }
    //     ,
    //     {id:"6",
    //     Movie:"Dream_Girl-2  movie review: Ayushmann Khurrana is the best thing in this messy, massy comedy of errors",
    //     poster:"https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Dream_Girl_2_film_poster.jpg/220px-Dream_Girl_2_film_poster.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"As of my last knowledge update in September 2021, there was no official announcement or release of a movie titled 'Dream Girl 2'. 'Dream Girl' is a Bollywood comedy film released in 2019, starring Ayushmann Khurrana as the lead character who pretends to be a female call center employee"
    //     }
    //     ,
    //     {id:"7",
    //     Movie:"Padmaavati: Exaltation of Rajputs, glorification of jauhar, demonisation of Khilji aside, 'Padmaavat' can’t rise above being an overlong snoozefest",
    //     poster:"https://www.tallengestore.com/cdn/shop/products/Padmaavat-DeepikaPadukone-BollywoodHindiMoviePosters_75046377-ac14-46a1-9790-33f53723e3f6.jpg?v=1625220954", 
    //     Category:"Bollywood" , 
    //     Heading:"Amidst the conflict, Padmavati makes a courageous decision to defend her honor and the honor of all women in her kingdom. The climax of the film involves a dramatic and emotionally charged sequence known as 'Jauhar', in which the women of the kingdom commit mass self-immolation to avoid falling into the hands of the invading army."
    //     }
    //     ,
    //     {id:"8",
    //     Movie:"RRR:The film also features a strong supporting cast, including Bollywood actors Alia Bhatt and Ajay Devgn",
    //     poster:"https://e1.pxfuel.com/desktop-wallpaper/934/976/desktop-wallpaper-rrr-bollywood-2022-movie-poster-thumbnail.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"'RRR' is known for its high-octane action sequences, stunning visual effects, and epic storytelling. The film also features a strong supporting cast, including Bollywood actors Alia Bhatt and Ajay Devgn."
    //     }
    //     ,
    //     {id:"9",
    //     Movie:"'Raazi' is set against the backdrop of the 1971 India-Pakistan war.,Stretching Guide: Types, Benefits, Stretches for Beginners, and More",
    //     poster:"https://cutewallpaper.org/22/bollywood-movie-poster-wallpapers/2807314786.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"'Raazi' is set against the backdrop of the 1971 India-Pakistan war. It tells the story of Sehmat Khan, a young Indian woman who is recruited by the Research and Analysis Wing (RAW), India's intelligence agency, to become an undercover spy."
    //     }
    //     ,
    //     {id:"10",
    //     Movie:"The Surgical Strike :The film is based on the real-life of Indian Arym",
    //     poster:"data:image/jpeg;base64,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",
    //     Category:"Bollywood" , 
    //     Heading:"'Uri: The Surgical Strike' is a Bollywood military action film released in 2019, directed by Aditya Dhar. The film is based on the real-life surgical strikes carried out by the Indian Army in September 2016 in response to a terrorist attack on an Indian military base in Uri, Jammu and Kashmir."
    //     }
    //     ,
    //     {id:"11",
    //     Movie:"Shiddat :The Best Romantic  Movies with  best Songs Released soon",
    //     poster:"https://stat4.bollywoodhungama.in/wp-content/uploads/2021/09/Shiddat-5-322x402.jpeg", 
    //     Category:"Bollywood" , 
    //     Heading:"'Shiddat' is a love story that explores the themes of love, destiny, and the enduring power of relationships. The film follows the lives of two couples, Kartika (played by Radhika Madan) and Jaggi (played by Sunny Kaushal), and Rohit (played by Mohit Raina) and Radhika (played by Diana Penty)."
    //     }
    //     ,
    //     {id:"12",
    //     Movie:"kabhi-khushi-kabhi-gham :The old is Gold ,You can Watch this Movie with Your Family",
    //     poster:"https://e0.pxfuel.com/wallpapers/313/540/desktop-wallpaper-kabhie-khushi-kabhie-gham-blockbuster-film-bollywood-songs-bollywood-movies.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"The film's title,'Kabhi Khushi Kabhie Gham', can be translated to 'Sometimes Happiness, Sometimes Sorrow,' reflecting the emotional rollercoaster experienced by the characters throughout the narrative. It remains a beloved and iconic Bollywood film known for its grandeur, melodrama, and stellar performances by the cast."
    //     }
    //     ,
    //     {id:"13",
    //     Movie:"Hum Saath Saath Hai is known for its portrayal of traditional Indian family values, customs, and rituals.",
    //     poster:"https://m.media-amazon.com/images/M/MV5BNDdkZTI3OTItM2JlZi00YzRmLTliMTctYTVjZDE3MjNlZTJkXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"'Hum Saath-Saath Hain' is known for its portrayal of traditional Indian family values, customs, and rituals. It celebrates the importance of family unity and highlights the bonds shared among family members. The film features several melodious songs that have become popular over the years."
    //     }
    //     ,
    //     {id:"14",
    //     Movie:"Jersey :Shahid Kapoor opens up about Jersey's box office failure, says 'it broke my heart'",
    //     poster:"https://upload.wikimedia.org/wikipedia/en/2/2a/Jersey_2022_poster.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"'Jersey' is not just a sports drama but also a heartwarming family story that explores themes of determination, sacrifice, and the pursuit of dreams. It showcases the emotional and personal sacrifices made by individuals who choose to chase their passions, even if it means making a comeback later in life."
    //     }
    //     ,
    //     {id:"15",
    //     Movie:"M.S.Dhoni-The Untold Story  This Movie is Based on the Cricketer Mahendra Singh Dhoni's BioGraphy ",
    //     poster:"https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"'M.S. Dhoni: The Untold Story' is a tribute to the legendary cricketer and celebrates his incredible journey from a small-town boy to a cricketing icon. The film's title, 'The Untold Story,' signifies the exploration of the lesser-known aspects of Dhoni's life and career." 
    //     }
    //     ,
    //     {id:"16",
    //     Movie:"Vivah :It highlights the importance of inner beauty,Most Popular Movie of Shahid Kapoor And Amrita Singh  ", 
    //     poster:"data:image/jpeg;base64,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", 
    //     Category:"Bollywood" , 
    //     Heading:"It highlights the importance of inner beauty, character, and understanding in a marriage. The film is known for its emotional depth, strong performances by Shahid Kapoor and Amrita Rao, and its portrayal of traditional Indian customs and values."
    //     }
    //     ,
    //     {id:"17",
    //     Movie:"UnderWorld Evolution ,What The Cast Of Underworld: Evolution Is Doing Today.",
    //     poster:"https://c4.wallpaperflare.com/wallpaper/175/372/878/movies-hollywood-movies-wallpaper-preview.jpg", 
    //     Category:"Hollywood" , 
    //     Heading:"'Underworld: Evolution'is a 2006 action-horror film and the second installment in the 'Underworld' film series.Before the release of the first 'Underworld' movie in 2003, Scott Speedman was best known for his role in the cult TV series Felicity,an early hit for producers J.J. Abrams and Matt Reeves. Although he would appear in movies like 'Duets' and 'Dark Blue', a gritty crime thriller starring Kurt Russell. "
    //     }
    //     ,
    //     {id:"18",
    //     Movie:"Morbius 'Morbius' is a superhero film set in the Marvel Universe",
    //     poster:"https://e1.pxfuel.com/desktop-wallpaper/868/40/desktop-wallpaper-morbius-hollywood-2022-movies-poster-thumbnail.jpg", 
    //     Category:"Hollywood" , 
    //     Heading:"'Morbius' is a superhero film set in the Marvel Universe, featuring the character Dr. Michael Morbius, who is also known as Morbius the Living Vampire. The film is based on the Marvel Comics character of the same name and is part of Sony Pictures' Spider-Man Universe. "
    //     }
    //     ,
    //     {id:"19",
    //     Movie:"Avatar ,New Avatar: Frontiers of Pandora trailer reveals details about the hero’s journey",
    //     poster:"https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg", 
    //     Category:"Hollywood" , 
    //     Heading:'"Avatar" is a science fiction film directed and produced by James Cameron. It was released in 2009 and became a significant milestone in cinematic history for its groundbreaking use of 3D technology and visual effects'
    //     }
    //     ,
    //     {id:"20",
    //     Movie:"Captain America: He became a symbol of hope and patriotism during World War II",
    //     poster:"https://w0.peakpx.com/wallpaper/944/614/HD-wallpaper-captain-america-civil-war-official-poster.jpg", 
    //     Category:"Hollywood" , 
    //     Heading:"'Captain America's origin story involves his transformation into a super-soldier by a serum known as the 'Super-Soldier Serum.' He became a symbol of hope and patriotism during World War II and fought against the Axis powers, especially the Red Skull, who served as one of his primary adversaries."
    //     }
    //     ,
    //     {id:"21",
    //     Movie:"Captain Marvel :Captain Marvel has a complex history and has been involved in various storylines",
    //     poster:"https://e1.pxfuel.com/desktop-wallpaper/782/415/desktop-wallpaper-captain-marvel-android-posters-movies-2021-thumbnail.jpg", 
    //     Category:"Hollywood" , 
    //     Heading:"Captain Marvel has a complex history and has been involved in various storylines and events within the Marvel Universe. She has been a member of superhero teams such as the Avengers and the X-Men and has played significant roles in various crossover events."
    //     }
    //     ,
    //     {id:"22",
    //     Movie:"Avengers Infinity War Marvels Avengers' received mixed reviews upon its release, with praise for its storytelling, character design.",
    //     poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0%2C0%2C540%2C810", 
    //     Category:"Hollywood" , 
    //     Heading:"'Marvels Avengers' received mixed reviews upon its release, with praise for its storytelling, character design, and representation of the Avengers. However, some players and critics had concerns about repetitive gameplay and technical issues."
    //     }
    //     ,
    //     {id:"23",
    //     Movie:"Resident Evil :The Final Chapter  aims to wrap up the overarching story of Alice's struggle against the Umbrella Corporation and the zombie apocalypse. It combines elements of action and horror, which have been signature traits of the 'Resident Evil' film franchise",
    //     poster:"https://e1.pxfuel.com/desktop-wallpaper/859/358/desktop-wallpaper-resident-evil-the-final-chapter-poster-hollywood-movie-wide-hollywood-movie-poster-thumbnail.jpg", 
    //     Category:"Hollywood" , 
    //     Heading:"'Resident Evil: The Final Chapter' aims to wrap up the overarching story of Alice's struggle against the Umbrella Corporation and the zombie apocalypse. It combines elements of action and horror, which have been signature traits of the 'Resident Evil' film franchise. "
    //     }
    //     ,
    //     {id:"24",
    //     Movie:"Gravity: The film is known for its groundbreaking visual effects and its intense portrayal of space survival",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zxSFE0BWutajnmEoA9Nht0fUwPnW7KV2ig&usqp=CAU", 
    //     Category:"Hollywood" , 
    //     Heading:"'Gravity' is a 2013 science fiction thriller film directed by Alfonso Cuarón and starring Sandra Bullock and George Clooney. The film is known for its groundbreaking visual effects and its intense portrayal of space survival."
    //     }
    //     ,
    //     {id:"25",
    //     Movie:"The Tommorow War:The film is directed by Chris McKay, Tomorrow War' is a science fiction action film released in 2021. ",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ489ohVpgq7X-QxOiP-EOtwMNnJ18onuZslg&usqp=CAU", 
    //     Category:"Hollywood" , 
    //     Heading:"'The Tomorrow War' is a science fiction action film released in 2021. The film is directed by Chris McKay and stars Chris Pratt in the lead role"
    //     }
    //     ,
    //     {id:"26",
    //     Movie:"Insidious: It's known for its supernatural and paranormal .The 'Insidious' film series is a popular horror franchise that began in 2010.",
    //     poster:"data:image/jpeg;base64,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", 
    //     Category:"Hollywood" , 
    //     Heading:"The 'Insidious' film series is a popular horror franchise that began in 2010. It's known for its supernatural and paranormal themes, directed by James Wan and written by Leigh Whannell."
    //     }
    //     ,
    //     {id:"27",
    //     Movie:"The Conjuring film series is known for its supernatural scares",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBODcsCfkkF-1vLQGjXiPqaTRvtQqANv7B-cnF8oubtaFee_mg0e6y_jAzEc6Y7zY-4Sw&usqp=CAU", 
    //     Category:"Hollywood" , 
    //     Heading:"The 'Conjuring' film series is known for its supernatural scares, atmospheric horror, and the portrayal of the real-life paranormal investigations of the Warrens. It has been a successful and enduring franchise in the horror genre."
    //     }
    //     ,
    //     {id:"28",
    //     Movie:"Exists: makes a lackluster return to found-footage horror with the Bigfoot thriller “Exists.”",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclJrNY5oDepTgdRY3_zIZkyo146QaEBqj_qqANU7oqyflCoH6ShBt-wKuUBCSKxtGGTo&usqp=CAU", 
    //     Category:"Hollywood" , 
    //     Heading:"Directed by Eduardo Sánchez, who is known for his work on 'The Blair Witch Project,' the film follows a group of friends who embark on a camping trip in the woods and encounter a terrifying creature. "
    //     }
    //     ,
    //     {id:"29",
    //     Movie:"Lake Fear 3:'Lake Fear 3' is a low-budget horror film ",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uKNAECeO7RVc_xenZ8e2ib2p6UJ5zhDGyC8DCtH0xiMQs7YotMM51tN85g06UD12yDA&usqp=CAU", 
    //     Category:"Hollywood" , 
    //     Heading:"As of my last knowledge update in September 2021, 'Lake Fear 3' is a low-budget horror film that is part of the 'Lake Fear' film series. The movie is also known as 'Lake Fear 3: Origin of Evil.' "
    //     }
    //     ,
    //     {id:"30",
    //     Movie:"The Offering",
    //     poster:"https://www.horror.land/wp-content/uploads/2016/12/The_Offering_Poster.jpg", 
    //     Category:"Hollywood" , 
    //     Heading:'"The Offering" is a supernatural horror film released in 2016, also known as "The Faith of Anna Waters" in some regions. The film is directed by Kelvin Tong and stars Elizabeth Rice, Matthew Settle, and Adina Herz. It combines elements of supernatural horror and mystery. '
    //     }
    //     ,
    //     {id:"31",
    //     Movie:"Looper: 'The Faith of Anna Waters'",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnRZoSd16_6rUMhy-IxQfCCPfWEIXWhgZ5gnUzXc1G0TdRneHaM_kgLLw6ysvbSuDC3o&usqp=CAU", 
    //     Category:"Hollywood" , 
    //     Heading:'"Looper" is a science fiction action-thriller film directed by Rian Johnson and released in 2012. The film is known for its unique take on time travel and its exploration of the consequences of altering the past. '
    //     }
    //     ,
    //     {id:"32",
    //     Movie:"Inception:film written and directed by Christopher Nolan",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlSqm7tn0yIm9kEUhgpg_arjpNHDJ0GmBA8R7aXg6wsGTh8hA3c7JPz-t9-PXVmAArOU&usqp=CAU", 
    //     Category:"Hollywood" , 
    //     Heading:"Inception is a 2010 science fiction heist thriller film written and directed by Christopher Nolan. The film is known for its complex narrative, mind-bending concepts, and stunning visual effects. "
    //     }
    //     ,
    //     {
    //     id:"33",
    //     Movie:"Technologiacl Gadgets:The Best New Tech Gear of September 2023 ,Technological gadgets refer to electronic devices or tools that serve specific purposes to make our lives more convenient, efficient, ",
    //     poster:"https://7esl.com/wp-content/uploads/2018/02/Technological-gadgets-vocabulary-in-English-1.jpg", 
    //     Category:"Technology" , 
    //     Heading:"Technological gadgets refer to electronic devices or tools that serve specific purposes and are designed to make our lives more convenient, efficient, and enjoyable. These gadgets often incorporate advanced technology and may include hardware, software, and user interfaces. As Shown in image"
    //     }
    //     ,
    //     {
    //     id:"34",
    //     Movie:"Alexa ,Amazon Alexa is an interactive voice assistant that can check the weather, launch your favorite playlist, and everything .",
    //     poster:"https://d2xamzlzrdbdbn.cloudfront.net/freebie/New%20Project%20-%202022-08-05T125726.321.jpg", 
    //     Category:"Technology" , 
    //     Heading:"mazon Alexa is an interactive voice assistant that can check the weather, launch your favorite playlist, and everything in between. Alexa can be found on most Amazon products, including the new Echo Pop, the iconic Echo Dot, and even a variety of smart thermostats, soundbars, lamps, and more .Alexa is Amazon's cloud-based voice service available on more than 100 million devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day."}
    //     ,
    //     {
    //     id:"35",
    //     Movie:"Animation:most animated movies are made with computer-generated imagery",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEjcNCqdpdYOVs9k4X4mXS1E6DoqCDf7H4aA&usqp=CAU", 
    //     Category:"Technology" , 
    //     Heading:"Early cartoons are examples of this, but today, most animated movies are made with computer-generated imagery or CGI. To create the appearance of smooth motion from these drawn, painted, or computer-generated images, frame rate, or the number of consecutive images that are displayed each second, is considered."
    //     }
    //     ,
    //     {id:"36",
    //     Movie:"The Cahndrayan3 is proposed by Isro",
    //     poster:"https://img.etimg.com/thumb/width-640,height-480,imgsize-925346,resizemode-75,msid-103252107/tech/technology/chandrayaan-3-rovers-payload-discovers-minor-elements-measures-lunar-plasma-environment/chandrayaan-3-rovers-second-payload-also-confirms-sulphur.jpg", 
    //     Category:"Technology" , 
    //     Heading:"The Cahndrayan3 is proposed by Isro(Indian Space Research Organization ) .This third mission would land in the same area as the second one. Chandrayaan-3 was launched on 14 July 2023 at 9:05:17 UTC."}
    //     ,
    //     {
    //     id:"37",
    //     Movie:"Robotics:Robots can perceive, identify and navigate,Study uncovers technology that enables integration of sensing, control in soft robotics ",
    //     poster:"https://m.economictimes.com/thumb/msid-64059040,width-1200,height-900,resizemode-4,imgsize-166452/talking-to-counsellors-to-take-a-tech-turn-social-robots-could-replace-humans.jpg", 
    //     Category:"Technology" , 
    //     Heading:"Robots can perceive, identify and navigate their environments with the help of machine vision, which uses ML algorithms and sensors. Computer vision is used in a wide range of settings, including manufacturing procedures, such as material inspection and pattern and signature recognition."
    //     }
    //     ,
    //     {
    //     id:"38",
    //     Movie:"Cyber Security:refers to the practice of protecting computer systems, networks, software",
    //     poster:"https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    //     Category:"Technology" , 
    //     Heading:"Cybersecurity refers to the practice of protecting computer systems, networks, software, and data from digital attacks, unauthorized access, damage, theft, or any other form of malicious intent. It encompasses a wide range of technologies, processes, practices, and measures that aim to ensure the confidentiality, integrity, and availability of digital assets. Cybersecurity is essential in today's interconnected world, where technology plays a critical role in various aspects of our lives, including business, communication, and personal activities."
    //     }
    //     ,
    //     {
    //     id:"39",
    //     Movie:"Artificial Intelligence Ethics refers to the simulation of human intelligence in machines",
    //     poster:"https://media.istockphoto.com/id/143922813/photo/artifical-intelligence.webp?s=2048x2048&w=is&k=20&c=GqS5BWAmiIxs-jSgK1R8zE31hwvAQpdOlQJDXYd_d0Y=", 
    //     Category:"Technology" , 
    //     Heading:"Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, allowing them to perform tasks that typically require human intelligence, such as understanding natural language, recognizing patterns, learning from experience, and making decisions.Machine Learning ,Deep Learning,Natural Language Processing,Robotics and many more are exapmle of AI."
    //     }
    //     ,
    //     {
    //     id:"40",
    //     Movie:"Biotechnology Advancements in biotechnology such as MRI and CT scans now allow doctors to view a 3D image inside a patient's body.",
    //     poster:"data:image/jpeg;base64,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", 
    //     Category:"Technology" , 
    //     Heading:"Biotechnology is a rapidly evolving field that has witnessed numerous advancements and breakthroughs across various sectors, including healthcare, agriculture, environmental conservation, and more. These advancements have the potential to address critical global challenges and improve the quality of life. Here are some notable biotechnology advancements Genome Sequencing,RNA Interference (RNA) etc."
    //     }
    //     ,
    //     {
    //     id:"41",
    //     Movie:"Data Science Trends :Data Science Platform Market  By Application: Marketing & Sales, Logistics, Finance and Accounting, Customer Support, Others",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiz9ZPUvtobUFY6IC9-fp2AkxIwmfs7t3IA&usqp=CAU", 
    //     Category:"Technology" , 
    //     Heading:"Data Science is an interdisciplinary field that uses scientific methods, algorithms, processes, and systems to extract knowledge and insights from structured and unstructured data. It combines techniques from statistics, computer science, machine learning, domain knowledge, and data engineering to analyze and interpret complex data and make informed decisions.Data science has applications in various industries, including healthcare, finance, marketing, e-commerce, and more. It plays a crucial role in leveraging data to make data-driven decisions, solve complex problems, and drive innovation."
    //     }
    //     ,
    //     {
    //     id:"42",
    //     Movie:"Quantum Computing:The Race Toward Quantum Advantage.Quantum computing has yet to show an advantage over conventional computing, .",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gHiJb0x9H7R386zBjrXa5ncFcBCMFtr4aA&usqp=CAU", 
    //     Category:"Technology" , 
    //     Heading:"Quantum Computing is a revolutionary field of computing that leverages the principles of quantum mechanics to perform certain types of computations far more efficiently than classical computers. Unlike classical computers, which use bits (0s and 1s) as the fundamental unit of information, quantum computers use quantum bits or qubits. Quantum computing has the potential to revolutionize various industries by solving complex problems that are currently intractable for classical computers. "
    //     }
    //     ,
    //     {
    //     id:"43",
    //     Movie:"Internet of Things (IoT),IoT in agriculture helps connect farms for better quality yields",
    //     poster:"https://datatrained.com/post/wp-content/uploads/2022/11/Featured-Image-IoT.png", 
    //     Category:"Technology" ,
    //     Heading:"The Internet of Things (IoT) refers to the network of interconnected devices and objects that can communicate and exchange data. It has applications in smart homes, industries, and more."}
    //     ,
    //     {
    //     id:"44",
    //     Movie:"Virtual Reality (VR) Military Applications of Virtual Reality and Beyond",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgA6Jy4D0ojDRpobdMmK44RZ-C2cUXZxQoQ&usqp=CAU", 
    //     Category:"Technology" , 
    //     Heading:"Virtual Reality (VR) technology creates immersive simulated environments that users can interact with. It is used in gaming, training, and simulations."
    //     }
    //     ,
    //     {id:"45",
    //     Movie:"Edge Computing:Why edge computing should be centric to cloud strategy",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-aGTx2eEwOirtZKmYcpY-fdK9R63jXZyYSg8Qp6HfCGyxBqr-O1_BWFqRDpysH8FRg8I&usqp=CAU", 
    //     Category:"Technology" , 
    //     Heading:"Edge computing is a distributed computing paradigm that brings processing closer to data sources and devices. It reduces latency and enhances real-time data processing."
    //     }
    //     ,
    //     {id:"46",
    //     Movie:"Renewable Energy is energy derived from natural sources",
    //     poster:"https://thumbs.dreamstime.com/b/renewable-energy-sources-digital-illustration-32992072.jpg", 
    //     Category:"Technology" , 
    //     Heading:"Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished. Renewable energy sources are plentiful and all around us.Solar energy.Wind energy,Hydro energy,Tidal energy,Geothermal energy ,Biomass energy"
    //     }
    //     ,
    //     {
    //     id:"47",
    //     Movie:"Hrdro Power Plant: hydropower plants water flows through a pipe",
    //     poster:"https://www.energy.gov/sites/default/files/styles/full_article_width/public/2021-08/Impoundment-hydrodam_5.21.21.png?itok=aCycsmVo", 
    //     Category:"Technology" , 
    //     Heading:"At hydropower plants water flows through a pipe, or penstock, then pushes against and turns blades in a turbine that spin to power a generator to produce electricity. Conventional hydroelectric facilities include: Run-of-the-river systems, where the force of the river's current applies pressure on a turbine."
    //     }
    //     ,
    //     {
    //     id:"48",
    //     Movie:"Augmented Reality (AR) used in Eduaction",
    //     poster:"https://slideplayer.com/19/5799504/big_thumb.jpg", 
    //     Category:"Technology" , 
    //     Heading:"Augmented Reality (AR) overlays digital information onto the real world. It is used in mobile apps, gaming, and industrial applications."
    //     }
    //     ,
    //     {id:"49",
    //     Movie:"Gym:short for gymnasium (pl: gymnasiums or gymnasia).The word is derived from the ancient Greek term 'gymnasion'.",
    //     poster:"https://media.istockphoto.com/id/598675380/photo/three-pretty-girls-workout-in-the-gym.jpg?s=1024x1024&w=is&k=20&c=ooJjjOjUpiXtJStiO3VYMWxgphYFEFibV0vGMySXiqQ=",
    //     Category:"Fitness" , 
    //     Heading:"A gym, word is derived from the ancient Greek term 'gymnasion'.They are commonly found in athletic and fitness centers, and as activity and learning spaces in educational institutions. 'Gym' is also slang for 'fitness centre', which is often an area for indoor recreation."
    //     }
    //     ,
    //     {id:"50",
    //     Movie:"Yoga:Yoga combines physical postures, breathing exercises, and meditation to enhance flexibility and reduce stress.",
    //     poster:"https://media.istockphoto.com/id/1287500667/photo/two-women-doing-warming-up-exercises-in-gym.jpg?s=2048x2048&w=is&k=20&c=MvLEJq724z4klvJo7NkascI_v3YzQK2Lb5AFtcRfr0U=", 
    //     Category:"Fitness" ,
    //     Heading:"Yoga combines physical postures, breathing exercises, and meditation to enhance flexibility and reduce stress."
    //     }
    //     ,
    //     {id:"51",
    //     Movie:"Streching , Stretching: 35 exercises to improve flexibility and reduce pain ,Stretching Guide: Types, Benefits, Stretches for Beginners, and More .",
    //     poster:"https://media.istockphoto.com/id/1364381385/photo/the-coach-makes-sure-that-the-girl-does-the-right-stretch-for-the-back-on-the-mat-in-the-gym.jpg?s=2048x2048&w=is&k=20&c=KwF3BDSDKsPJK1KIKCS4sd5HGYOWT2vNYaeUNqQm9Fc=", 
    //     Category:"Fitness", 
    //     Heading:",Stretching Guide: Types, Benefits, Stretches for Beginners, and More .Stretching is an excellent thing you can do for your health. These simple, yet effective moves can help you limber up for sports, improve your balance and prevent falls, increase your flexibility, and even help relieve arthritis, back, and knee pain.The coach makes sure that the girl does the right stretch for the back on the mat in the gym  Stretching keeps the muscles flexible, strong, and healthy, and we need that flexibility to maintain a range of motion in the joints. Without it, the muscles shorten and become tight. Then, when you call on the muscles for activity, they are weak and unable to extend all the way."
    //     }
    //     ,
    //     {id:"52",
    //     Movie:"Dumbbells:Dumbbell exercises can create both inter- and intramuscular coordination",
    //     poster:"https://img.mensxp.com/media/content/2022/Nov/Kohlis-Weight-Consistency-In-Last-8-Yrs-Is-Unreal1200_6368d51fa3b50.jpeg", 
    //     Category:"Fitness" , 
    //     Heading:"Dumbbells can provide the two types of overload that lead to muscle growth: mechanic and metabolic.Dumbbell exercises can create both inter- and intramuscular coordination, leading to greater levels of muscle activation."
    //     }
    //     ,
    //     {id:"53",
    //     Movie:"Add Meditation as part of Our daily life ,'Meditation, which is the practice of focused concentration, bringing yourself back to the moment over and over again",
    //     poster:"https://c4.wallpaperflare.com/wallpaper/197/491/622/women-meditation-brunette-hairbun-wallpaper-preview.jpg", 
    //     Category:"Fitness" , 
    //     Heading:"'Meditation, which is the practice of focused concentration, bringing yourself back to the moment over and over again, actually addresses stress, whether positive or negative.'Meditation can also reduce the areas of anxiety, chronic pain, depression, heart disease and high blood pressure.'"
    //     }
    //     ,
    //     {id:"54",
    //     Movie:"Push-up Push Workout:Repeat the odd/even routine for 10 days",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uVIiQlNjdo6u5yV1Hw7SBJ4SiX5pp0oc2A&usqp=CAU", 
    //     Category:"Fitness" , 
    //     Heading:"If your maximum is under 50 push-ups, do 200 a day. If your maximum is above 75, do 300 a day. Repeat the odd/even routine for 10 days "
    //     }
    //     ,
    //     {
    //     id:"55",
    //     Movie:"Water: uncontaminated water should be your number one priority",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sLmR6fHB9saJ1DV1N8B6XOm-45tGcAyoaQ&usqp=CAU", 
    //     Category:"Fitness" , 
    //     Heading:"Mineral water and alkaline water may be some of the healthiest types of water because they provide your body with essential nutrients,but simply drinking safe, uncontaminated water should be your number one priority."
    //     }
    //     ,
    //     {
    //     id:"56",
    //     Movie:"Healthy Diet:Eating at least 400 g, or five portions, of fruit and vegetables per day reduces the risk of NCDs ",
    //     poster:"https://www.healthysystem.in/wp-content/uploads/2018/01/Food-Pyramid-Veg-India.jpg", 
    //     Category:"Fitness" , 
    //     Heading:"Eating at least 400 g, or five portions, of fruit and vegetables per day reduces the risk of NCDs (2) and helps to ensure an adequate daily intake of dietary fibre.always including vegetables in meals,eating fresh fruit and raw vegetables as snacks,eating fresh fruit and vegetables that are in season and eating a variety of fruit and vegetables."
    //     }
    //     ,
    //     {
    //     id:"57",
    //     Movie:"Exercise :Some of Regular Exercise to maintain our body fit like Plank ,Flutter kick,Russian twist etc",
    //     poster:"https://i.pinimg.com/1200x/ab/4b/ed/ab4bed052a27277752be64cb21633eb5.jpg", 
    //     Category:"Fitness" , 
    //     Heading:"Some of Regular Exercise to maintain our body fit like Plank ,Flutter kick,Russian twist etc as shown in the image to reduce bally fat,"}
    //     ,
    //     {
    //     id:"58",
    //     Movie:"Running:strengthens the lower body,Running is a cardiovascular exercise that improves endurance, burns calories",
    //     poster:"https://c.ndtvimg.com/2018-11/0kfilqjg_running-_625x300_29_November_18.jpg", 
    //     Category:"Fitness" , 
    //     Heading:"Running is a cardiovascular exercise that improves endurance, burns calories, and strengthens the lower body."
    //     }
    //     ,
    //     {
    //     id:"59",
    //     Movie:"Cycling is an excellent low-impact exercise that builds leg strength and promotes cardiovascular health.",
    //     poster:"https://assets.isu.pub/document-structure/230504144105-1415f94a0235285fe4d54dd9e953e5ea/v1/1d54115b2e0141d495642f236aeece3c.jpeg", 
    //     Category:"Fitness" , 
    //     Heading:"Cycling is an excellent low-impact exercise that builds leg strength and promotes cardiovascular health."
    //     }
    //     ,
    //     {id:"60",
    //     Movie:"Weightlifting increase strength, and improve overall fitness",
    //     poster:"https://static.toiimg.com/photo/89281495.cms",
    //     Category:"Fitness" , 
    //     Heading:"Weightlifting involves lifting weights to build muscle, increase strength, and improve overall fitness."
    // }
    //     ,
    //     {
    //     id:"61",
    //     Movie:"swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body",
    //     poster:"https://www.shape.com/thmb/Jg_VX_6NAhL76PCow1Szwj1Zhso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swim-workouts-every-level-2bc897b86adf4bcda8de8eb11fafcf84.jpg", 
    //     Category:"Fitness" , 
    //     Heading:"Swimming is a full-body workout that improves cardiovascular fitness and builds muscle strength."
    //     }
    //     ,
    //     {
    //     id:"62",
    //     Movie:"HIIT:The Do-It-Anywhere HIIT Workout You Need to Try",
    //     poster:"https://dailyburn.com/life/wp-content/uploads/2017/08/HIIT-workout.jpg", 
    //     Category:"Fitness" , 
    //     Heading:"HIIT involves short bursts of intense exercise followed by brief periods of rest. It boosts metabolism and burns fat"
    //     }
    //     ,
    //     {
    //     id:"63",
    //     Movie:"Zumba is international music with fun dance moves,Zumba is a fitness program that involves cardio",
    //     poster:"https://cdn.cdnparenting.com/articles/2019/01/17120925/597228785-H-1024x700.webp", 
    //     Category:"Fitness" , 
    //     Heading:"Zumba is a dance fitness program that combines Latin and international music with fun dance moves.Zumba is a fitness program that involves cardio and Latin-inspired dance. It was founded by Colombian dancer and choreographer Beto Pérez in 2001, It currently has 200,000 locations, with 15 million people taking classes weekly, and is located in 180 countries. Zumba is a trademark owned by Zumba Fitness, LLC Zumba is one of the most fun and versatile fitness crazes to come along in a long time. Classes can be geared for just about any fitness level. Though most Zumba involves high-impact moves like bouncing and jumping, it can be modified to meet your needs."
    //     }
    //     ,
    //     {
    //     id:"64",
    //     Movie:"Hiking  making it a great fitness activity",
    //     poster:"https://www.gore-tex.com/sites/default/files/blog_images/step-ups-hiking-exercise-690x398.jpg", 
    //     Category:"Fitness" , 
    //     Heading:"Hiking in nature provides both physical exercise and mental relaxation, making it a great fitness activity."
    // }
    //     ,
    //     {
    //     id:"65",
    //     Movie:"Indori Poha Indori Poha (Poha of Indore) is a type of flattened (beaten) rice that is likely to have originated in indian Metropolis of Indore.",
    //     poster:"https://www.secondrecipe.com/wp-content/uploads/2021/12/indori-poha-2.jpg", 
    //     Category:"Food" , 
    //     Heading:"Indori Poha (Poha of Indore) is a type of flattened (beaten) rice that is likely to have originated in Indian metropolis of Indore. It contains steamed Poha (flattened rice) and is usually served with a unique combination of Jalebi (called Poha-Jalebi combined), Sev, Usal, sliced onions and fennel seeds."
    //     }
    //     ,
    //     {
    //     id:"66",
    //     Movie:"Indori Poha jalebi Indori Poha is mainly sold by vendors all around the city during morning time",
    //     poster:"https://thumbs.dreamstime.com/z/indian-glutenfree-breakfast-poha-jalebi-snack-sweet-eaten-parts-madhya-pradesh-especially-indore-bhopal-137568659.jpg", 
    //     Category:"Food" , 
    //     Heading:"Indori Poha is mainly sold by vendors all around the city during morning time, often alongside the city's other popular snacks 'Kachori-Samosas'. It is also available in nearby cities Ujjain, Dewas, Sagar, Dhar, Ratlam and Bhopal and is becoming a very popular cuisine in Maharashtra, Gujarat, Uttar Pradesh and Bihar."}
    //     ,
    //     {
    //     id:"67",
    //     Movie:"Indori Sabudana Khichd:Commonly called tapioca pearls in Englishi",
    //     poster:"https://www.cityshor.com/uploads/article/06_2016/1467006361_web_2_.jpg", 
    //     Category:"Food" , 
    //     Heading:"Commonly called tapioca pearls in English, as they are the small, desiccated, translucent white balls of tapioca, extracted from the roots of the cassava plant, sabudana or Indian sago is packed with calories and carbohydrates simple sugars and starch."
    //     }
    //     ,
    //     {
    //     id:"68",
    //     Movie:"Indori Kachori ,which Make with Moong Dal Stuffing consisting of a flour-based shell with different fillings.Kachori is a spicy Indian snack shaped ",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrqlGsNJnS240yIdC7Z5OOJGjbpkzuy6YhMIxGVj0q-X3vr4SHT1b80M24LTsy8ihQ8Q&usqp=CAU", 
    //     Category:"Food" , 
    //     Heading:"Kachori is a spicy Indian snack shaped like a round flattened ball, consisting of a flour-based shell with different fillings. The most popular filling consists of yellow moong dal, besan flour, pepper, chili powder, cumin seeds, and other spices"
    //     }
    //     ,
    //     {
    //     id:"69",
    //     Movie:"Chinese Veg Momos",
    //     poster:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/ritu-arora020180111172007064.jpeg", 
    //     Category:"Food" , 
    //     Heading:"Veg momos recipe, a popular street food, is a steamed dumpling with a delicious vegetable filling served with a spicy red chutney or sauce and it is  Veg momos are a tantalizing, traditional food of Tibet and Nepal."
    //     }
    //     ,
    //     {
    //     id:"70",
    //     Movie:"Sushi Japanese dish ,Sushi is widely available in many countries throughout the globe, and is commonly associated with Japan. ",
    //     poster:"https://www.shutterstock.com/shutterstock/photos/2287908707/display_1500/stock-photo-sushi-photos-food-photography-asian-kitchen-restaurant-food-menu-photos-sushi-roll-pictures-2287908707.jpg", 
    //     Category:"Food" , 
    //     Heading:"All sushi has a base of specially prepared rice, complemented with other ingredients. Traditional Japanese sushi consists of rice flavored with vinegar sauce and various raw or cooked ingredients.For those unfamilar, sushi refers to the rice that is paired with raw seafood.Sushi is widely available in many countries throughout the globe, and is commonly associated with Japan. Japan is surrounded by ocean and has so many amazing places to get fresh,"
    //     }
    //     ,
    //     {
    //     id:"71",
    //     Movie:"South Indian Idli Dosa sambhar",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UPawKEY_auDIVLBqXcMGPidNuuwXi5tioQ&usqp=CAU", 
    //     Category:"Food" ,
    //     Heading:"Idlis are perhaps one of the world's healthiest breakfast—they are fermented, steamed, and extremely gentle on the stomach. Idlis are so healthy that, in South India, that they are one the first solid foods introduced to infants. Sambar is rich in protein and contains antioxidants from tamarind."}
    //     ,
    //     {
    //     id:"72",
    //     Movie:"Rajasthani Meal Dal-Bati",
    //     poster:"https://www.secondrecipe.com/wp-content/uploads/2020/11/dal-bati-churma-720x620.jpg", 
    //     Category:"Food" , 
    //     Heading:"Dal Bati churma, mirchi bada, pyaz ki kachori, gatte ki kadhi, ghevar, ker sangri, lal maas, safed maas, bajre ka khichda. The list is endless and yum. In the olden days, vegetables, water and fruits were scarce. Rajasthan is primarily Thar desert and has less vegetation. Thus, recipes involves using less veggies and water. Use of local grains and spices adds to the charm of the desert. "
    //     }
    //     ,
    //     {
    //     id:"73",
    //     Movie:"Donuts Dessert",
    //     poster:"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", 
    //     Category:"Food" , 
    //     Heading:"Donuts are small, fried, sweetened dough cakes that are traditionally shaped into balls or rings. This dessert has been taken and adapted differently depending on the culture and region they are made."
    //     }
    //     ,
    //     {
    //     id:"74",
    //     Movie:"Veg-Pizza",
    //     poster:"https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg", Category:"Food" , Heading:"If we are talking about the places in the world to have the best Pizza, then the best way to begin is with the land of Pizza. Naples, a city in southern Italy, is famous all around the globe for its pizzas, pizzas, and some more pizzas"
    //     }
    //     ,
    //     {
    //     id:"75",
    //     Movie:"Triple-layer-Chocolate Cake ",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWZSP-ChAB4-wdelEQHEYhMi1OQa8wqNqNw&usqp=CAU", Category:"Food" , 
    //     Heading:"The 'Sachertorte' is a famous Viennese cake and probably the most famous chocolate cake in the world since 1832. The delicious treat consists of 3 layers of chocolate sponge cake with thickly spread apricot jam in between and on the top"
    //     }
    //     ,
    //     {
    //     id:"76",
    //     Movie:"Edible creal Bowl ice-cream",
    //     poster:"https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg", 
    //     Category:"Food" , 
    //     Heading:"Cereals to try for toppings: Cocoa Krispies, Rice Krispies Treats Cereal, Cinnamon Toast Crunch, Cocoa Puffs, Reese's Puffs, Cookie Crisp, Apple Jacks, Captain Crunch – Berries & PB, Frosted Flakes, Grape Nuts, Fruit Loops, Trix and so on… Thanks so much for stopping by!"
    //     }
    //     ,
    //     {
    //     id:"77",
    //     Movie:"Fruits Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. ",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5Bn_-g1qVwKf4sbdU5N9Yx-Q3uVOVlSgYg&usqp=CAU", Category:"Food" , 
    //     Heading:"Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually eaten raw, although some varieties can be cooked. They come in a wide variety of colours, shapes and flavours."
    //     }
    //     ,
    //     {
    //     id:"78",
    //     Movie:"Indian Regular Food",
    //     poster:"https://static.toiimg.com/photo/90154368.cms", 
    //     Category:"Food" , 
    //     Heading:"According to Indian food customs, a meal should balance all six flavors. Thali dishes vary across regions and are usually served in small bowls on a tray or banana leaf. Typical dishes might include rice, dal, vegetables, roti, yogurt, chutney or pickles, and something sweet."
    //     }
    //     ,
    //     {
    //     id:"79",
    //     Movie:"Burger and French fries",
    //     poster:"https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/5bbd187101145529745a9895.webp", Category:"Food" , 
    //     Heading:"Loaded Cheeseburger Fries - Pumpkin 'N SpiceLoaded Cheeseburger Fries taste just like your favorite burger, but in appetizer form. These fries are topped with the classic ingredients of a cheeseburger and are baked to perfection. Easy to make and even better to eat, you'll love the crispy, crunchy, cheesy taste of this fun snack!"
    //     }
    //     ,
    //     {id:"80",
    //     Movie:"Veg Cutlets",
    //     poster:"https://cdn.cdnparenting.com/articles/2020/03/07132833/328074536.webp", 
    //     Category:"Food" , 
    //     Heading:"Health benefits of Veg Cutlet: Veg Cutlets, unlike potato tikkis, are a powerhouse of vitamins, minerals and nutrition. The soya granules are high on protein content, good source of omega-3 fatty acids. Soya granules help to increase bone density and aid digestion"
    //     }
    //     ,
    //     {
    //     id:"81",
    //     Movie:"Burger and French fries",
    //     poster:"https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202206/5bbd187101145529745a9895.webp",
    //     Category:"Home" , 
    //     Heading:"Loaded Cheeseburger Fries - Pumpkin 'N SpiceLoaded Cheeseburger Fries taste just like your favorite burger, but in appetizer form. These fries are topped with the classic ingredients of a cheeseburger and are baked to perfection. Easy to make and even better to eat, you'll love the crispy, crunchy, cheesy taste of this fun snack!"
    //     }
    //     ,
    //     {
    //     id:"82",
    //     Movie:" Morning  Breakfast Indori Poha jalebi in Indore",
    //     poster:"https://thumbs.dreamstime.com/z/indian-glutenfree-breakfast-poha-jalebi-snack-sweet-eaten-parts-madhya-pradesh-especially-indore-bhopal-137568659.jpg", 
    //     Category:"Home" , 
    //     Heading:"Indori Poha is mainly sold by vendors all around the city during morning time, often alongside the city's other popular snacks 'Kachori-Samosas'. It is also available in nearby cities Ujjain, Dewas, Sagar, Dhar, Ratlam and Bhopal and is becoming a very popular cuisine in Maharashtra, Gujarat, Uttar Pradesh and Bihar."
    //     }
    //     ,
    //     {id:"83",
    //     Movie:"Add Meditation as part of Our daily life",
    //     poster:"https://c4.wallpaperflare.com/wallpaper/197/491/622/women-meditation-brunette-hairbun-wallpaper-preview.jpg", 
    //     Category:"Home" , 
    //     Heading:"'Meditation, which is the practice of focused concentration, bringing yourself back to the moment over and over again, actually addresses stress, whether positive or negative.'Meditation can also reduce the areas of anxiety, chronic pain, depression, heart disease and high blood pressure.'"
    //     }
    //     ,
    //     {id:"84",
    //     Movie:"The Conjuring",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBODcsCfkkF-1vLQGjXiPqaTRvtQqANv7B-cnF8oubtaFee_mg0e6y_jAzEc6Y7zY-4Sw&usqp=CAU", 
    //     Category:"Home" , 
    //     Heading:"The 'Conjuring' film series is known for its supernatural scares, atmospheric horror, and the portrayal of the real-life paranormal investigations of the Warrens. It has been a successful and enduring franchise in the horror genre."
    //     }
    //     ,
    //     {id:"85",
    //     Movie:"Why getting the iPhone 15 over Pro models makes more sense for Indian users , But with these improvements also arrived a price bump ",
    //     poster:"https://images.indianexpress.com/2023/09/iphone-15-similar-looking.jpg", 
    //     Category:"Technology" , 
    //     Heading:"Just like Apple did with the iPhone 13 Pro lineup, the company once again declared the iPhone 15 Pros as “the most Pro models ever.” A number of iterative improvements aside, their lighter builds thanks to the use of titanium was perhaps the biggest limelight hogger. But with these improvements also arrived a price bump – the iPhone 15 Pro starts Rs 5K higher than the previous generation, while the iPhone 15 Pro Max is a whopping Rs 20K dearer. They may be the “most Pro” iPhones but they’re also the “most pricey” iPhones at the same time"
    //     }
    //     ,
    //     {
    //     id:"86",
    //     Movie:"Data Science Trends",
    //     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLhs1QzAXCu_6BrzA9lqCHa8yPfazLwHigg&usqp=CAU", 
    //     Category:"Home" , 
    //     Heading:"Data Science is an interdisciplinary field that uses scientific methods, algorithms, processes, and systems to extract knowledge and insights from structured and unstructured data. It combines techniques from statistics, computer science, machine learning, domain knowledge, and data engineering to analyze and interpret complex data and make informed decisions.Data science has applications in various industries, including healthcare, finance, marketing, e-commerce, and more. It plays a crucial role in leveraging data to make data-driven decisions, solve complex problems, and drive innovation."
    //     }
    //     ,

    //     {
    //     id:"87",
    //     Movie:"Raksha Bandhan Movies related to Raksha Bandhan often depict the emotional and heartfelt moments between siblings",
    //     poster:"https://www.filmibeat.com/ph-big/2022/06/raksha-bandhan_165580980900.jpg", 
    //     Category:"Bollywood" , 
    //     Heading:"Movies related to Raksha Bandhan often depict the emotional and heartfelt moments between siblings. These films may explore themes of family, love, and the special bond between brothers and sisters."
    //     }
    //     ,
    //     {   id:"89", 
    //         logogirl:"data:image/png;base64,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"
    //         ,
    //         logo:"https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=29d2c332-d12d-44e7-8f76-09de45b77c89&api_key=CometServer1&access_token=1695150445_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_d65f75fd0983d579a59b3456e413fd5cf44dca90"
    //         ,
    //         facebook:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU"
    //         ,
    //         twitter:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6lMHdoGBTbg5rYGlo_5_fSyqEJpuFnIvoMR0eqy-mwxfErJUHdj_dPVs03x3U2r--w0&usqp=CAU"
    //         ,
    //         instagram:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU"
    //         ,
    //         linkdln:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zTyVz8gyeFBXNFNC_TJ2mdKZXMUiY6LoFg&usqp=CAU"
    //         ,
    //         teeshalinkdln:"https://www.linkedin.com/in/teesha-gupta-9092b921b/"
    //     }
    // ]

    
    //     )
        const [data,setData] =useState([])

        useEffect(()=>{
            async function fetchData(){
                const fetchData = await fetch("https://node-routing-blog.onrender.com/api/main/blog");
                const res = await fetchData.json();
                console.log(res);
                setData(res);
            }fetchData();
        },[])    

    return(
        <>
            <Store.Provider value={[data,setData]}>
                {props.children}
            </Store.Provider>
        </>
    )
}
export default StoreContextApi