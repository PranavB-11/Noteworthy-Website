import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

function App() {
  const videoIds = ['bW5czKqT05A', 'kW57PpibCMA', '-Bz_9PSpkUc', '7RPiGAzk4wA'];

  return (
    <div className="container">
      <div className="main-block">
        <div className="text-block">
          <h1 className="noteworthy">Noteworthy</h1>
          <p className="subtext">In-vest-ed in A Capella</p>
        </div>
        <div className="button-group">
          <a href="#" className="button">About Us</a>
          <a href="#" className="button">People of Note</a>
          <a href="#" className="button">Hire Us</a>
          <a href="#" className="button">Auditions</a>
        </div>
      </div>
      <div className="about-us-block">
        <span class="highlight-container-about"><h2 className="about-us-heading">About Us</h2></span>
        <p className="about-us-text">
          We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests! Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
        </p>
      </div>
      <div className="favorites-block">
        <span class="highlight-container-fav"><h2 className="favorites-heading">A Few of Our Favorites</h2></span>
        <Carousel videos={videoIds} />
      </div>
      <Members />
    </div>
  );
}

function Carousel({ videos }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          variableWidth: false,
        },
      },
    ],
  };
  
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {videos.map((videoId, index) => (
          <div key={index} className="video-slide" style={{ width: 300 }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
}
function Members() {
  // Dummy data for member information
  const members = [
    { name: 'Maya Rotenberg',  
        pronouns: 'Pronouns: she/her',
        voicePart: 'Voice Part: Tenor 1',
        majorMinor: 'Major/Minor: Data Science',
        semesterInBerkeley: 'SemesterInBerkeley: 6th',
        semesterInNoteworthy: 'SemesterInNoteworthy: 2nd',
        interests: 'Interests: t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA',
        bio: 'Bio: So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal).'
  },
  {
    name: 'Amanda Sakimura',
    pronouns: 'Pronouns: She/Her',
    voicePart: 'Voice Part: Tenor 1',
    majorMinor: 'Major/Minor: English/Art History, Creative Writing Minor',
    semesterInBerkeley: 'SemesterInBerkeley: 2nd',
    semesterInNoteworthy: 'SemesterInNoteworthy: 2nd',
    interests: 'Interests: Bees, movies, b-movies, making media comm regret not putting a word limit for bio',
    bio: `Bio: According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little.`
  },
  {
    name: 'Alex Pease',
    pronouns: 'Pronouns: Please do not thanks',
    voicePart: 'Voice Part: Bass',
    majorMinor: 'Major/Minor: Chemistry Major, Data Science + Music minors',
    semesterInBerkeley: 'SemesterInBerkeley: 4th',
    semesterInNoteworthy: 'SemesterInNoteworthy: 3rd',
    interests: 'Interests: Singing, gaming, complaining, no longer cyberbullying the managers on discord since they started posting in announcements!',
    bio: `Bio: I’ve been drafting my bio with some other people and ran out of ideas, but I got some pretty funny feedback in the process...`
  },
  {
    name: 'Bhaskar Roberts',
    pronouns: 'Pronouns: He/Him',
    voicePart: 'Voice Part: Tenor 2',
    majorMinor: 'Major/Minor: Computer Science',
    semesterInBerkeley: 'SemesterInBerkeley: No one knows',
    semesterInNoteworthy: 'SemesterInNoteworthy: 3rd',
    interests: 'Interests: Dropping out of school to try and make it on Broadway',
    bio: `Bio: A few years ago, I was driving alone on the highway at cruising speed...`
  },
  {
    name: 'Ellington Chen',
    pronouns: 'Pronouns: He/Him',
    voicePart: 'Voice Part: Baritone',
    majorMinor: 'Major/Minor: In order from favorite to least favorite I\'d probably go C,G,E♭, B, F#, D♭, A♭,A,A#...',
    semesterInBerkeley: 'SemesterInBerkeley: 4th',
    semesterInNoteworthy: 'SemesterInNoteworthy: 4th',
    interests: 'Interests: In order from most to least favourite I\'d have to go tech, pharmaceuticals, consumer staples, materials, real estate, government bonds, APY, debt, and crypto. Wait no, switch debt and crypto. Yeah, yeah, that looks better. Hey what ever happened to NFTs?',
    bio: `Bio: In order from least favorite bits to most favorite bits:...`
  },
  {
    name: 'Justin Wong',
    pronouns: 'Pronouns: He/Him',
    voicePart: 'Voice Part: Baritone',
    majorMinor: 'Major/Minor: Computer sceince',
    semesterInBerkeley: 'SemesterInBerkeley: 8th',
    semesterInNoteworthy: 'SemesterInNoteworthy: 2nd',
    interests: 'Interests: Skiing, Climbing, Youtube Shorts, Karaoke, Basketball',
    bio: `Bio: Justin Wong is a baller. He shoots cause he's a shooter; sings because he's a singer; eats cause he's an eater. He once told me, "wow, that's cool" and was right. Legend has it that he's a real main character, or at the very least definitely a character. It was once said, "Before they met Justin Wong, the Black Eyed Peas were simply known as 'The Peas.'"`
  },
  {
    name: 'Jerry',
    pronouns: 'Pronouns: He/Him',
    voicePart: 'Voice Part: Baritone',
    majorMinor: 'Major/Minor: Chemical Engineering / Theater',
    semesterInBerkeley: 'SemesterInBerkeley: 8th',
    semesterInNoteworthy: 'SemesterInNoteworthy: 3rd',
    interests: 'Interests: Video Games, uhhhhhhh, Acapella, uhhhhhhhhh, Working Out, uhh oh and Acting',
    bio: 'Bio: The same one from before is good thankssssssssssssssssssssss'}, 
    {
      name: 'Athena Liu',
      pronouns: 'Pronouns: They/He',
      voicePart: 'Voice Part: Tenor 1',
      majorMinor: 'Major/Minor: Chemistry',
      semesterInBerkeley: 'SemesterInBerkeley: 2nd',
      semesterInNoteworthy: 'SemesterInNoteworthy: 2nd',
      interests: 'Interests: Crochet, machine girl, laoganma, kim kitsuragi, chemistry, daniel radcliffe\'s left ear, crustacean, steamed hams',
      bio: 'Bio: THE PESTO.....!!!!!!!!!!! YAY THE PESTO!!!!!!!!!!!!!! WHEEEEEEEEEEEEEE!!!!!! :3333333 xoxo UwU !!!LOBOTOMIZER BEAM GO!!! ..... .... [reboot] ... [3] ... [2] ... [1] ... [liftoff] ... ... ... how do you feel? ........ x xxrs xxxxxssxxxxxxxgggggrrrrfffffhhhh hhh h a a ab abc i am yes no up down tom bottom strange charm i. i. ... i....... i kick miette\'s body like a football there are cathedrals everywhere for those with eyes to see mlp infection au neil banging out the tunes eggs bacon grits sausage nyc diner serves coca-cola the old fashioned way meth lab oompa loompa reddit\'s worst volume control ui mogging mewing road work ahead i sure hope it does ebony darkness dementia raven way dogecoin neuralink coquette spiders georg mom sold me to one direction and ............ [signal lost]'
    },
    {
      name: 'Stephanus Yang',
      pronouns: 'Pronouns: He/Him',
      voicePart: 'Voice Part: Tenor 2',
      majorMinor: 'Major/Minor: Chemistry',
      semesterInBerkeley: 'SemesterInBerkeley: 4th',
      semesterInNoteworthy: 'SemesterInNoteworthy: 4th',
      interests: 'Interests: Ellington Chen',
      bio: 'Bio: Have you ever asked AI to generate an image of a really really good-looking teenage Taiwanese male UC Berkeley student who is also in acappella? Well if you have, then you don\'t need to read the rest of my bio, because the image you saw was indeed an image of me. Now some of you might argue that there are actually no good-looking individuals on the campus of this school, and every student just has so-called ""Berkeley Goggles"". I would agree with you... if I didn\'t look in the mirror every morning. And hey, since you already bothered to come all the way to this website, scroll down to find the most fit-looking young man on this page, and begin reading this bio, I thought I would share a special treat with you. I have decided to finally publish my highly curated highly personalized day-to-day routines to live by in order to look almost as good as me. 1. Be Taiwanese. I recommend looking into RCTA if necessary. 2. Dye your hair. It doesn\'t have to be the ones on your head. 3. Spend at least 4 hours a day with Ellington. Doing what? That I won\'t share.'
    },
    {
      name: 'Eddie Cekici',
      pronouns: 'Pronouns: He/Him',
      voicePart: 'Voice Part: Bass and Vocal Percussion',
      majorMinor: 'Major/Minor: Chem Bio and Stats Double Major',
      semesterInBerkeley: 'SemesterInBerkeley: 8th',
      semesterInNoteworthy: 'SemesterInNoteworthy: 6th',
      interests: 'Interests: Being Albanian, Olive Oil, Gipsy Kings, Outer Wilds, Jon Bois, Two Words',
      bio: 'Bio: It is 5:15 AM as I write this and I genuinely believe my soul has the mandate of heaven. I\'m like if the Jimmy Timmy Power Hour was a person. I\'m like if you averaged every white guy in your local mall between the ages of 16 and 24. I\'m like Warren Buffet with Benjamin Button disease. I\'m like if the infinite monkeys were trying to write High School Musical 2 instead. I\'m Carlton Banks minus the money, plus a gambling addiction. Ok time for a real bio. Hi, my name is Eddie!!! You can tell it\'s me because of the way I am. In lieu of actual facts about me, here are some banger tweets I\'ve made over the years: ...'
    },
    {
      name: 'Andrew Tran',
      pronouns: 'Pronouns: He/Him',
      voicePart: 'Voice Part: Tenor 2',
      majorMinor: 'Major/Minor: Chemical Engineering',
      semesterInBerkeley: 'SemesterInBerkeley: 6th',
      semesterInNoteworthy: '4th',
      interests: 'Interests: SemesterInNoteworthy: Stephanus Yang, Evan Yang, Evanus Yang, Stephie, Steph Anus, Steph, Mr. President, My President 👨‍❤️‍💋‍👨, Steph Curry',
      bio: 'Bio: Here are some random book quotes that go hard:... '
    },
    {
      name: 'Ethan Jang',
      pronouns: 'Pronouns: He/Him/His',
      voicePart: 'Voice Part: Bass',
      majorMinor: 'Major/Minor: Undeclared (Intended Applied Math)',
      semesterInBerkeley: 'SemesterInBerkeley: 2nd',
      semesterInNoteworthy: 'SemesterInNoteworthy: 1st',
      interests: 'Interests: Lore dumps in presentation format, listening to the same song for an entire day, telling myself I will start that new show today, being Korean, laughing to hide the fact that I didn’t hear you, pooja what is this behavior, stan loona for clearer skin',
      bio: `"Bio: Oh my god vogue you caught me at a great time! I was just skinning a guinea pig I found in my piano! No time to waste (literally I have an hour to write this bio), let’s get started:\n\nWhat is your favorite childhood memory?\nWatching the Ghost Stories dub at 3am on a school night\n\nWhat’s your go-to comfort food?\nCaviar\n\nHow much alcohol would it take for you to sleep with the pope?\nSecret ;)\n\nDo you prefer coffee or tea?\nTea? As in…bubble….teabobabobabobabobaobaobaobaobaobaobaob\n\nWhat’s your favorite hobby?\nServing camp realness while under mental duress\n\nWhat’s the most adventurous thing you’ve done?\nBeing gay\n\nWhat’s your dream job?\nMarrying rich\n\nWhat’s your favorite thing about yourself?\nMy humongous, throbbing, pulsating heart <3\n\nDo you have any hidden talents?\nYes, in fact I still yet have to find them, can you help me on my search? *You feel an outside force pushing your head up and down in a nodding motion*\n\nHow many countries have you taken a shit in?\n3, 4 if you include the moon\n\nWhat’s your favorite way to relax after a long day?\nBed\n\nWhat’s something you’ve always wanted to try but haven’t yet?\nTom Welling\n\nWhat’s your favorite type of weather?\nAcid Rain\n\nWhat’s the scariest movie you’ve ever seen?\nHar har harhar har har harhar harhar har har harhar har har harhar\n\nWhat’s your favorite thing to do in the rain?\nEat the rain\n\nIf you could witness any historical event, what would it be?\nThe space race in the perspective of a flat earther\n\nY/N (amazed): Lastly, where are you REALLY from?\n…I didn’t want to have to be the one to tell you but…I’m your step bro, Y/N…Your parents- I mean… OUR parents they… they wanted to hide the affair between our dad and jungkook to secure your place as the newest CEO of Noteworthy Evil Inc. but I just can’t stay on this toxic gossip train any longer. I need to break my silence and reveal to the world the true me! \n*I jump Mario style and slowly start phasing out of existence, leaving you alone with my partly skinned hamster*"`
    },
    {
      name: 'Tom Guan',
      pronouns: 'Pronouns: he/him',
      voicePart: 'Voice Part: Baritone',
      majorMinor: 'Major/Minor: Psychology',
      semesterInBerkeley: 'SemesterInBerkeley: 8th',
      semesterInNoteworthy: 'SemesterInNoteworthy: 4th',
      interests: 'Interests: Sports, working out, going flat, fixed interest, compound interest, playing video games, being sober at parties, kian chou, ellington chen, eddie cekici, bari sectionals, WEEEEEEEEEEEEEHHHHH',
      bio: `"Bio: So people (rightfully) say that I talk about myself too much, so I'll talk about every other person in this lovely group! i dont really know their names very well though, so i'll give describing features about their personality and whatnot.\n\n1. listens to me yap endlessly, most boomer boomer, t1s say they're ugly, one of the biggest scandals in american history\n2. absent parent that we all love, the mouse to my cat, eternally sick and busy, lives on a pretty street\n3. teddy bear, strong desire for ""you"", did someone say nice?, day 1 chiller, day 100 lover uwu\n4. ""where'd [name] go?"", direct and blunt, noteworthy’s trailblazer\n5. Goat ragecager, most severe case of fomo in nw, quick-witted, “you picked THAT in customs???”\n6. blue paper, true day 1, brother that i wish i had, lover that i have, 600 point gap is crazy, sweetheart but rarely shows it\n7. loves preaching, man (not a muppet), giver of great hugs, *joins nw* “wait, they actually joined??” \n8. most hater and supporter, limps, always there (minus midterm season), best banter, a king, \n9.  7 years ago, old parent gang, social liaison between old and new, leaving/left to get 牛乳, loves the color mint\n10. nw on the side, darkest hair in nw, most chaotic evil, always brings positive vibes, trying to steal my man :(\n11. chomp, intellectual crackhead, pop culture encyclopedia with some pages missing, computer \n12. ADHD (awesome dad, high dAmount of Talking), did it, smoochies, old but not, nw's rock <3\n13. literally uc berkeley, iconic smile, super kind but with a mean twang, aspiring alcoholic, undying hatred towards the vests  \n14. meanest nice person in nw, gee enabler, always witnesses me doing stupid stuff and silently judges me\n15. least overconfident ragecager, prolly has no panties anymore, photographer goat, has a sick bike \n16. Goat ragecager (drinks all the cups), sweet and spicy (super kind, but sassy), chorale to nw pipeline goes strong \n17. most zoomer boomer, also the absent parent that we all love, most bro-y in nw, fire on the aux  \n18. barely, *throws it back while crying*, most boomer zoomer, super caring, makes me wish i had a younger sibling \n\nIf you made it this far... of course I actually know all of these people by name! here's the answer key if you're interested! (https://docs.google.com/spreadsheets/d/1-z0StcsrOEBwbYJ1b6dYT0SiaZGe32NioXSbjEd8no0/edit?usp=sharing) \n\nTo the first person to correctly guess all 18 people, I'll buy you boba :)"`
    }, 
    {
      name: 'Madlen Jalalyan',
      pronouns: 'Pronouns: she/her',
      voicePart: 'Voice Part: Tenor 1',
      majorMinor: 'Major/Minor: English, Slavic Languages and Literatures (major)',
      semesterInBerkeley: 'SemesterInBerkeley: 6th',
      semesterInNoteworthy: 'SemesterInNoteworthy: 1st',
      interests: 'Interests: Singing, cooking, reading, writing, being Armenian, plotting the demise of my enemies, ending things on a cliffhanger, Sherlock Holmes, solving escape room puzzles',
      bio: `"Bio: When people find out I’m an English major, they immediately assume I’m an amazing story teller. But I’m so much more than that! An absolute menace during rage cage, a cinnamon roll that would actually kill you, a chronic overthinker/daydreamer, a holy mother, your personal close-reading machine that will illuminate things you didn’t know about yourself (and look pretty doing it).\n\nBut now. Let me tell you a little story about myself. I’m Madlen, (not Madeleine, or Madelyn, and definitely not Madlyn). Bet you haven’t seen that spelling before... Why is my name spelled like that, you may wonder? Well, it all started when my mom met my dad, and they fell in love and they had me. It was at this time… after casting a single gaze upon me that they knew…\n…\n…\nCliffhanger! Tune in next week for the update.\n…\n…\nWait, what do you mean there won’t be an update? NOOOOOOOOO…"`
    },
    {
      name: 'Christopher Yuan',
      pronouns: 'Pronouns: He/him',
      voicePart: 'Voice Part: Tenor 2',
      majorMinor: 'Major/Minor: Microbial Biology',
      semesterInBerkeley: 'SemesterInBerkeley: 8th',
      semesterInNoteworthy: 'SemesterInNoteworthy: 1st',
      interests: 'Interests: (3+15)/2=9',
      bio: `"Bio: You know the hard part about writing this bio is making it sound interesting and funny like everyone else's and pretending like I'm not the token basic bitch here, so here, have some of my historical quotes of all time:\n\nAccording to all known laws of physics, bees shouldn't be able to fly and you shouldn't be that ugly. But here I am eating Honey Nut Cheerios.\n--Richard Nixon\n\nDo you think god stays in heaven because they, too, live in fear of what they have created? Haha nukes go brrrrr.\n--Conversation between Oppenheimer and his sleep paralysis demon\n\nThe only way to heal pop music is to have Olivia and Sabrina get married on my private jet with Joshua as the minister so I can get a tax writeoff as a religious institution.\n--Taylor Swift"`
    }
  ];
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(null);

  const showNextMember = () => {
    setSelectedMemberIndex((currentIndex) =>
      (currentIndex + 1) % members.length
    );
  };

  const showPreviousMember = () => {
    setSelectedMemberIndex((currentIndex) =>
      (currentIndex - 1 + members.length) % members.length
    );
  };

  return (
    <div className="members-contact-container">
      {/* Members Section */}
      <div className="members-contact-container">
      <div className="members-section">
        <h1>Members</h1>
        <div className="members-grid">
          {members.map((member, index) => (
          <div key={index} className="member-card" onClick={() => setSelectedMemberIndex(index)}>
            {/* Name images based on what's below (e.g. image1, image2, etc.) */}
            <img src={`template${index + 1}.jpg`} alt={member.name} className="member-image"/>
            <h2>{member.name}</h2>
            <p>{member.pronouns}</p>
            <p>{member.voicePart}</p>
          </div>
          ))}
        </div>
        {selectedMemberIndex !== null && (
        <MemberModal
          member={members[selectedMemberIndex]}
          imageIndex={selectedMemberIndex + 1} // Assuming your images start from template1.jpg
          onClose={() => setSelectedMemberIndex(null)}
          onNext={showNextMember}
          onPrevious={showPreviousMember}
        />
        )}
      </div>

    </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-card">
          <div className="social-media-placeholder">
            Insta
            {/* Insert Instagram or other social media icons as needed */}
          </div>
        </div>
      </div>
    </div>
  );}

  function MemberModal({ member, imageIndex, onClose, onPrevious, onNext }) {
    if (!member) return null;
  
    // Constructing the image URL based on the passed index. Adjust the path as necessary.
    // This assumes that your images are stored in the public folder and are named sequentially (e.g., template1.jpg, template2.jpg, etc.).
    const imageUrl = `template${imageIndex}.jpg`;

  
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-button" onClick={onClose}>X</button>
          <div className="modal-nav-left" onClick={(e) => { e.stopPropagation(); onPrevious(); }}>&lt;</div>
          <div className="modal-nav-right" onClick={(e) => { e.stopPropagation(); onNext(); }}>&gt;</div>
          
          <div className="modal-body">
            <img src={imageUrl} alt={`Member ${imageIndex}`} className="modal-member-image"/>
            <div className="modal-text-content">
              <h2>{member.name}</h2>
            <p>{member.pronouns}</p>
            <p>{member.majorMinor}</p>
            <p>{member.semesterInBerkeley}</p>
            <p>{member.semesterInNoteworthy}</p>
            <p>{member.bio}</p>

              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  

export default App;
