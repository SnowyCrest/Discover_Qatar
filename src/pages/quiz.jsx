import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../styles/quiz.css';

// Add background images configuration
const backgroundImages = {
  default: 'https://medomed.org/wp-content/uploads/2017/06/al-zubarah-qatar-e1505205651158.jpg',
  history: 'https://newindoha.com/wp-content/uploads/2024/02/20231218_144355-1050x591.jpg',
  landmarks: 'https://medomed.org/wp-content/uploads/2017/06/al-zubarah-qatar-e1505205651158.jpg',
  rulers: 'https://m.media-amazon.com/images/M/MV5BMzNmODdhZWUtZTU1MS00ZDE0LTliMzUtZTY1Mjg0MDM5ZThiXkEyXkFqcGc@._V1_.jpg',
  'time-periods': 'https://www.nedapidentification.com/wp-content/uploads/2023/01/Msheireb-Downtown-Doha-scaled-1.jpg'
};

const qatarQuestions = {
  history: [
    {
      question: "When was Qatar's independence declared?",
      correct: "1971",
      incorrect: ["1965", "1980", "1950"],
      explanation: "Qatar declared its independence on September 3, 1971, after being a British protectorate."
    },
    {
      question: "Which ancient civilization influenced Qatar?",
      correct: "Dilmun",
      incorrect: ["Mesopotamia", "Indus Valley", "Phoenician"],
      explanation: "The Dilmun civilization, centered around Bahrain and Eastern Arabia, influenced Qatar's early history."
    },
    {
      question: "When did Qatar become a British protectorate?",
      correct: "1916",
      incorrect: ["1900", "1920", "1895"],
      explanation: "Qatar became a British protectorate in 1916, securing British protection from external threats."
    },
    {
      question: "What year did Qatar gain full independence from the British?",
      correct: "1971",
      incorrect: ["1965", "1960", "1980"],
      explanation: "Qatar gained full independence from the British on September 3, 1971."
    },
    {
      question: "Which country did Qatar initially have a conflict with over territory in the 19th century?",
      correct: "Bahrain",
      incorrect: ["Saudi Arabia", "UAE", "Oman"],
      explanation: "Qatar and Bahrain had territorial disputes, particularly over the Hawar Islands."
    },
    {
      question: "Who was the first ruler of Qatar?",
      correct: "Sheikh Mohammed bin Thani",
      incorrect: ["Sheikh Jassim bin Mohammed Al Thani", "Sheikh Tamim bin Hamad Al Thani", "Sheikh Khalifa bin Hamad Al Thani"],
      explanation: "Sheikh Mohammed bin Thani was the first ruler of Qatar, ruling from 1850 to 1878."
    },
    {
      question: "Which treaty established Qatar as a British protectorate?",
      correct: "The 1916 Treaty of Protection",
      incorrect: ["Treaty of Jeddah", "Treaty of Doha", "Treaty of Riyadh"],
      explanation: "The 1916 Treaty of Protection established Qatar as a British protectorate, safeguarding it from external threats."
    },
    {
      question: "In which year did Qatar become a member of the United Nations?",
      correct: "1971",
      incorrect: ["1960", "1980", "1990"],
      explanation: "Qatar became a member of the United Nations in 1971, the same year it gained independence."
    },
    {
      question: "Who was Qatar's first prime minister?",
      correct: "Sheikh Abdullah bin Jassim Al Thani",
      incorrect: ["Sheikh Hamad bin Khalifa Al Thani", "Sheikh Khalifa bin Hamad Al Thani", "Sheikh Tamim bin Hamad Al Thani"],
      explanation: "Sheikh Abdullah bin Jassim Al Thani became Qatar's first prime minister in 1970."
    },
    {
      question: "Which was the first oil field discovered in Qatar?",
      correct: "Dukhan Field",
      incorrect: ["Al Shaheen Field", "Ras Laffan Field", "Bahrain Field"],
      explanation: "The Dukhan Field, discovered in 1939, was the first significant oil field in Qatar."
    },
    {
      question: "What was Qatar's main trade before oil was discovered?",
      correct: "Pearling",
      incorrect: ["Fishing", "Agriculture", "Silk Trade"],
      explanation: "Before oil, Qatar's economy was largely based on pearling and trade."
    },
    {
      question: "In which year did Qatar withdraw from the Gulf Cooperation Council (GCC)?",
      correct: "2003",
      incorrect: ["2001", "1999", "2005"],
      explanation: "Qatar withdrew from the GCC in 2003 over differences in foreign policy."
    },
    {
      question: "When did Qatar first host the Gulf Cup of Nations?",
      correct: "1976",
      incorrect: ["1984", "1982", "1980"],
      explanation: "Qatar first hosted the Gulf Cup of Nations in 1976."
    },
    {
      question: "Which country did Qatar have a territorial dispute with in the 1990s?",
      correct: "Bahrain",
      incorrect: ["Saudi Arabia", "UAE", "Oman"],
      explanation: "Qatar and Bahrain had a territorial dispute over the Hawar Islands during the 1990s."
    },
    {
      question: "When did Qatar establish its first oil refinery?",
      correct: "1959",
      incorrect: ["1945", "1965", "1971"],
      explanation: "Qatar's first oil refinery was established in 1959 at the Dukhan oil field."
    },
    {
      question: "Which major event in the early 2000s boosted Qatar's international profile?",
      correct: "2006 Asian Games",
      incorrect: ["2002 World Cup", "1998 FIFA World Cup", "2010 Winter Olympics"],
      explanation: "Qatar's hosting of the 2006 Asian Games boosted its international profile."
    },
    {
      question: "Which famous event was held in Qatar in 2022?",
      correct: "FIFA World Cup",
      incorrect: ["Asian Cup", "Dubai World Expo", "Copa América"],
      explanation: "Qatar hosted the 2022 FIFA World Cup, making history as the first Middle Eastern country to do so."
    },
    {
      question: "When did Qatar sign an agreement with ExxonMobil for gas exploration?",
      correct: "1970",
      incorrect: ["1980", "1995", "2000"],
      explanation: "Qatar signed a landmark agreement with ExxonMobil in 1970 for gas exploration."
    },
    {
      question: "Which country did Qatar dispute maritime boundaries with in the 20th century?",
      correct: "Bahrain",
      incorrect: ["Saudi Arabia", "UAE", "Oman"],
      explanation: "Qatar had several maritime boundary disputes with Bahrain in the 20th century."
    },
    {
      question: "In what year did Qatar join the World Trade Organization?",
      correct: "1996",
      incorrect: ["2001", "1990", "1985"],
      explanation: "Qatar became a member of the World Trade Organization (WTO) in 1996."
    }
  ],
  landmarks: [
    {
      question: "What is the most iconic building in Doha?",
      correct: "Museum of Islamic Art",
      incorrect: ["Katara Cultural Village", "The Pearl", "Doha Tower"],
      explanation: "The Museum of Islamic Art, designed by I.M. Pei, is considered the most iconic building in Doha and houses a significant collection of Islamic art."
    },
    {
      question: "Which fort is famous in Al Zubarah?",
      correct: "Al Zubarah Fort",
      incorrect: ["Doha Fort", "Umm Salal Fort", "Barzan Towers"],
      explanation: "Al Zubarah Fort is a UNESCO World Heritage site and an important archaeological landmark in Qatar."
    },
    {
      question: "Which island is known for its luxury resorts in Qatar?",
      correct: "The Pearl-Qatar",
      incorrect: ["Banana Island", "Palm Jumeirah", "Al Reem Island"],
      explanation: "The Pearl-Qatar is a man-made island known for its luxury residences and resorts."
    },
    {
      question: "What is the name of the traditional market in Doha?",
      correct: "Souq Waqif",
      incorrect: ["Souq Al Qais", "Doha Bazaar", "Al Mubarakiya"],
      explanation: "Souq Waqif is a traditional market in Doha known for its vibrant atmosphere and local goods."
    },
    {
      question: "Which museum in Qatar showcases artifacts from ancient civilizations?",
      correct: "National Museum of Qatar",
      incorrect: ["Museum of Islamic Art", "Qatar Museum of Modern Art", "Doha Art Gallery"],
      explanation: "The National Museum of Qatar showcases artifacts and exhibits related to the history and heritage of Qatar."
    },
    {
      question: "What is the tallest building in Doha?",
      correct: "Aspire Tower",
      incorrect: ["Doha Tower", "The Gate Mall", "Al Bidda Tower"],
      explanation: "Aspire Tower, also known as the Torch, is the tallest building in Doha, standing at 300 meters."
    },
    {
      question: "What is the famous cultural village in Qatar?",
      correct: "Katara Cultural Village",
      incorrect: ["Al Reem Island", "Doha Corniche", "The Pearl-Qatar"],
      explanation: "Katara Cultural Village is a hub for arts and culture in Doha, offering theaters, galleries, and more."
    },
    {
      question: "Which tower is known as the ‘Torch’ in Doha?",
      correct: "Aspire Tower",
      incorrect: ["Doha Tower", "Al Bidda Tower", "West Bay Tower"],
      explanation: "Aspire Tower, also known as the Torch, is a well-known landmark in Doha and was used for the 2006 Asian Games."
    },
    {
      question: "What is the name of the large shopping mall in Doha?",
      correct: "Villaggio Mall",
      incorrect: ["The Mall of Qatar", "Doha Mall", "City Center Mall"],
      explanation: "Villaggio Mall is a popular shopping destination in Doha, featuring Venetian-style canals and a wide variety of stores."
    },
    {
      question: "Which beach resort is located on an artificial island in Doha?",
      correct: "Banana Island Resort",
      incorrect: ["The Pearl-Qatar", "Al Hazm Mall", "Al Maha Island"],
      explanation: "Banana Island Resort is a luxury resort located on an artificial island just off the coast of Doha."
    },
    {
      question: "Which tower in Doha is famous for its unique twisting design?",
      correct: "Doha Tower",
      incorrect: ["Aspire Tower", "West Bay Tower", "Al Reem Tower"],
      explanation: "Doha Tower is known for its unique twisting design and is a prominent feature of the city’s skyline."
    },
    {
      question: "Which traditional Qatari house is open to the public as a museum?",
      correct: "The House of Sheikh Abdullah bin Jassim Al Thani",
      incorrect: ["Al Zubarah Fort", "Qatar National Museum", "Doha Fort"],
      explanation: "The House of Sheikh Abdullah bin Jassim Al Thani is a traditional Qatari house that has been converted into a museum."
    },
    {
      question: "What is the landmark in Doha known for its futuristic architecture?",
      correct: "Qatar National Convention Centre",
      incorrect: ["The Gate Mall", "Doha Tower", "Museum of Islamic Art"],
      explanation: "The Qatar National Convention Centre is known for its striking modern architecture and serves as a venue for international conferences."
    },
    {
      question: "What is the largest park in Doha?",
      correct: "Al Bida Park",
      incorrect: ["Doha Corniche", "Al Wakra Park", "Musherib Park"],
      explanation: "Al Bida Park is the largest park in Doha and a popular spot for leisure and outdoor activities."
    },
    {
      question: "What is the famous mall located in Lusail?",
      correct: "Lusail Marina Mall",
      incorrect: ["Doha Mall", "Villaggio Mall", "The Pearl-Qatar"],
      explanation: "Lusail Marina Mall is a major shopping mall located in the Lusail city development."
    }
  ],

  rulers: [
  {
    question: "Who is the current Emir of Qatar?",
    correct: "Sheikh Tamim bin Hamad Al Thani",
    incorrect: ["Sheikh Hamad bin Khalifa Al Thani", "Sheikh Khalifa bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "Sheikh Tamim bin Hamad Al Thani became the Emir of Qatar on 25 June 2013, after his father Sheikh Hamad bin Khalifa Al Thani abdicated."
  },
  {
    question: "Who founded modern Qatar?",
    correct: "Sheikh Jassim bin Mohammed Al Thani",
    incorrect: ["Sheikh Abdullah bin Jassim Al Thani", "Sheikh Hamad bin Abdullah", "Sheikh Tamim bin Hamad"],
    explanation: "Sheikh Jassim bin Mohammed Al Thani is considered the founder of modern Qatar, having led the country to independence in 1878 and establishing the Al Thani ruling family."
  },
  {
    question: "Who was the first Emir of Qatar after its independence in 1971?",
    correct: "Sheikh Khalifa bin Hamad Al Thani",
    incorrect: ["Sheikh Tamim bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani", "Sheikh Hamad bin Khalifa Al Thani"],
    explanation: "Sheikh Khalifa bin Hamad Al Thani was the first Emir of Qatar after it gained independence from Britain in 1971."
  },
  {
    question: "Which Emir of Qatar was responsible for major modernization during the late 20th century?",
    correct: "Sheikh Hamad bin Khalifa Al Thani",
    incorrect: ["Sheikh Tamim bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani", "Sheikh Khalifa bin Hamad Al Thani"],
    explanation: "Sheikh Hamad bin Khalifa Al Thani was responsible for the modernization of Qatar in the late 20th century, including the development of infrastructure, education, and healthcare."
  },
  {
    question: "Who was the Emir of Qatar during the Gulf War in 1990-1991?",
    correct: "Sheikh Hamad bin Khalifa Al Thani",
    incorrect: ["Sheikh Tamim bin Hamad Al Thani", "Sheikh Khalifa bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "Sheikh Hamad bin Khalifa Al Thani was the Emir of Qatar during the Gulf War. Qatar supported the coalition forces during the conflict."
  },
  {
    question: "Which Emir of Qatar introduced a new constitution in 2005?",
    correct: "Sheikh Hamad bin Khalifa Al Thani",
    incorrect: ["Sheikh Tamim bin Hamad Al Thani", "Sheikh Khalifa bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "In 2005, Sheikh Hamad bin Khalifa Al Thani introduced a new constitution for Qatar, which provided for a new political system, including the establishment of an elected advisory council."
  },
  {
    question: "Which ruling family does the Emir of Qatar belong to?",
    correct: "Al Thani",
    incorrect: ["Al Nuaimi", "Al Khalifa", "Al Saud"],
    explanation: "The Emir of Qatar belongs to the Al Thani family, which has ruled Qatar since the 19th century."
  },
  {
    question: "Who was the Emir of Qatar during the major investments in global sports?",
    correct: "Sheikh Tamim bin Hamad Al Thani",
    incorrect: ["Sheikh Hamad bin Khalifa Al Thani", "Sheikh Khalifa bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "Sheikh Tamim bin Hamad Al Thani oversaw Qatar's major investments in global sports, including hosting the 2022 FIFA World Cup and investing in sports infrastructure and sponsorships."
  },
  {
    question: "Who served as Qatar’s prime minister from 1996 to 2013?",
    correct: "Sheikh Hamad bin Jassim Al Thani",
    incorrect: ["Sheikh Khalifa bin Hamad Al Thani", "Sheikh Tamim bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "Sheikh Hamad bin Jassim Al Thani served as the Prime Minister of Qatar from 1996 to 2013, playing a key role in shaping Qatar's foreign policy and economic development."
  },
  {
    question: "Which Emir introduced Qatar’s National Vision 2030?",
    correct: "Sheikh Tamim bin Hamad Al Thani",
    incorrect: ["Sheikh Khalifa bin Hamad Al Thani", "Sheikh Hamad bin Khalifa Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "Sheikh Tamim bin Hamad Al Thani introduced Qatar’s National Vision 2030, a plan to transform Qatar into an advanced country capable of sustaining its development while ensuring a high standard of living for its people."
  },
  {
    question: "Who succeeded Sheikh Khalifa bin Hamad Al Thani as Emir of Qatar?",
    correct: "Sheikh Hamad bin Khalifa Al Thani",
    incorrect: ["Sheikh Tamim bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani", "Sheikh Abdullah bin Jassim Al Thani"],
    explanation: "Sheikh Hamad bin Khalifa Al Thani succeeded his father, Sheikh Khalifa bin Hamad Al Thani, as Emir of Qatar in 1995, following a coup."
  },
  {
    question: "Who was the Emir of Qatar in 1995 when he staged a coup?",
    correct: "Sheikh Hamad bin Khalifa Al Thani",
    incorrect: ["Sheikh Tamim bin Hamad Al Thani", "Sheikh Khalifa bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "Sheikh Hamad bin Khalifa Al Thani staged a coup in 1995 to take power from his father, Sheikh Khalifa bin Hamad Al Thani, and became the Emir."
  },
  {
    question: "Who led Qatar’s diplomatic efforts during the blockade in 2017?",
    correct: "Sheikh Tamim bin Hamad Al Thani",
    incorrect: ["Sheikh Hamad bin Khalifa Al Thani", "Sheikh Khalifa bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani"],
    explanation: "During the 2017 blockade, Sheikh Tamim bin Hamad Al Thani led Qatar’s diplomatic efforts, which included establishing new trade routes and seeking support from international allies."
  },
  {
    question: "Who is the longest-reigning Emir of Qatar?",
    correct: "Sheikh Hamad bin Khalifa Al Thani",
    incorrect: ["Sheikh Khalifa bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani", "Sheikh Tamim bin Hamad Al Thani"],
    explanation: "Sheikh Hamad bin Khalifa Al Thani is the longest-reigning Emir of Qatar, having ruled from 1995 to 2013."
  },
  {
    question: "Which Emir was responsible for Qatar’s first media network, Al Jazeera?",
    correct: "Sheikh Hamad bin Khalifa Al Thani",
    incorrect: ["Sheikh Tamim bin Hamad Al Thani", "Sheikh Jassim bin Mohammed Al Thani", "Sheikh Khalifa bin Hamad Al Thani"],
    explanation: "Sheikh Hamad bin Khalifa Al Thani was responsible for the establishment of Al Jazeera, Qatar’s first media network, which launched in 1996."
  }
],
  "time-periods": [
  {
    question: "When was oil discovered in Qatar?",
    correct: "1939",
    incorrect: ["1945", "1925", "1950"],
    explanation: "Oil was discovered in Qatar in 1939, which marked the beginning of its transformation into a major oil-producing nation."
  },
  {
    question: "What was the main trade in Qatar before oil?",
    correct: "Pearling",
    incorrect: ["Fishing", "Agriculture", "Silk Trade"],
    explanation: "Before the discovery of oil, Qatar's economy was primarily based on pearling, with the country known for its high-quality pearls."
  },
  {
    question: "When did Qatar join the United Nations?",
    correct: "1971",
    incorrect: ["1960", "1980", "1990"],
    explanation: "Qatar became a member of the United Nations in 1971, shortly after gaining independence from Britain."
  },
  {
    question: "In what year did Qatar become a member of the Gulf Cooperation Council (GCC)?",
    correct: "1981",
    incorrect: ["1971", "1990", "1985"],
    explanation: "Qatar became a member of the Gulf Cooperation Council (GCC) in 1981, a political and economic alliance with its neighbors."
  },
  {
    question: "When did Qatar establish its first oil refinery?",
    correct: "1959",
    incorrect: ["1945", "1965", "1971"],
    explanation: "Qatar established its first oil refinery in 1959, marking a significant step in its development as an oil-exporting nation."
  },
  {
    question: "In what year did Qatar gain independence from Britain?",
    correct: "1971",
    incorrect: ["1965", "1980", "1950"],
    explanation: "Qatar gained independence from Britain in 1971, officially ending British protection and becoming a sovereign state."
  },
  {
    question: "When did Qatar start its natural gas production?",
    correct: "1991",
    incorrect: ["1985", "1995", "2000"],
    explanation: "Qatar began its large-scale natural gas production in 1991, establishing itself as one of the world's largest exporters of liquefied natural gas (LNG)."
  },
  {
    question: "When did Qatar host the Asian Games?",
    correct: "2006",
    incorrect: ["2002", "1998", "2010"],
    explanation: "Qatar hosted the 15th Asian Games in 2006, a major event that helped boost its sports infrastructure."
  },
  {
    question: "When did Qatar start its first school?",
    correct: "1952",
    incorrect: ["1960", "1945", "1958"],
    explanation: "Qatar's first school was established in 1952, marking the beginning of modern education in the country."
  },
  {
    question: "When was Qatar's National Museum established?",
    correct: "1975",
    incorrect: ["1980", "1990", "1965"],
    explanation: "Qatar's National Museum was established in 1975 to preserve and showcase the nation's history, culture, and heritage."
  },
  {
    question: "When did Qatar establish its airline, Qatar Airways?",
    correct: "1993",
    incorrect: ["1990", "2000", "1985"],
    explanation: "Qatar Airways was established in 1993 and has since become one of the world's leading airlines."
  },
  {
    question: "In which year did Qatar hold the World Cup?",
    correct: "2022",
    incorrect: ["2020", "2021", "2024"],
    explanation: "Qatar hosted the 2022 FIFA World Cup, making history as the first Middle Eastern country to host the tournament."
  },
  {
    question: "When did Qatar open its first commercial airport?",
    correct: "1997",
    incorrect: ["1990", "2000", "1985"],
    explanation: "Qatar opened its first commercial airport, Doha International Airport, in 1997, laying the foundation for the country's global connectivity."
  },
  {
    question: "When did Qatar nationalize its oil industry?",
    correct: "1977",
    incorrect: ["1965", "1985", "1990"],
    explanation: "In 1977, Qatar nationalized its oil industry, taking control of its oil reserves from foreign companies."
  },
  {
    question: "In what year did Qatar start its media network, Al Jazeera?",
    correct: "1996",
    incorrect: ["2000", "1990", "1985"],
    explanation: "Al Jazeera, Qatar's first media network, was launched in 1996 and has since become one of the most influential news channels globally."
  }
]
};

const Quiz = ({ onBackClick }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [timer, setTimer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('history');
  const [timePerQuestion, setTimePerQuestion] = useState(10);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages.default);

  useEffect(() => {
    const selectedQuestions = qatarQuestions[selectedCategory];
    setQuestions(selectedQuestions);
  }, [selectedCategory]);

  useEffect(() => {
    const shuffleAnswers = () => {
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion) {
        const allAnswers = [...currentQuestion.incorrect, currentQuestion.correct];
        const shuffled = allAnswers.sort(() => Math.random() - 0.5);
        setShuffledAnswers(shuffled);
      }
    };

    if (questions.length > 0) {
      shuffleAnswers();
    }
  }, [currentQuestionIndex, questions]);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setTimeLeft(timePerQuestion);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizEnded(false);
  };

 

  useEffect(() => {
    if (isQuizStarted && timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      setTimer(timerInterval);
      return () => clearInterval(timerInterval);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
    return () => clearInterval(timer);
  }, [isQuizStarted, timeLeft]);

  const handleTimeUp = () => {
    setShowCorrectAnswer(true);
    setCurrentExplanation(questions[currentQuestionIndex].explanation);
    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const submitAnswer = () => {
    clearInterval(timer);
    setShowCorrectAnswer(true);
    const correctAnswer = questions[currentQuestionIndex].correct;
    const explanation = questions[currentQuestionIndex].explanation;
    if (selectedAnswer === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    setCurrentExplanation(explanation);
    setTimeout(() => {
      moveToNextQuestion();
    }, 4000);
  };

  const moveToNextQuestion = () => {
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
    setCurrentExplanation('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimeLeft(timePerQuestion);
    } else {
      setIsQuizEnded(true);
    }
  };

  const endQuiz = () => {
    clearInterval(timer);
    setIsQuizEnded(true);
  };

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizEnded(false);
    setSelectedCategory('history');
    setTimePerQuestion(10);
    setShuffledAnswers([]);
  };

  const handleBack = (e) => {
    e.preventDefault();
    onBackClick();
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Add effect for background image changes
  useEffect(() => {
    setBackgroundImage(backgroundImages[selectedCategory] || backgroundImages.default);
  }, [selectedCategory]);

  return (
    <div className="quiz-container" style={{
      backgroundImage: `url(${backgroundImage})`
      ,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
      alignItems: 'center' // Center content horizontally
    }}>
        <nav className="map-nav">
          <a href="#" onClick={handleBack} className="back-button">← Back to Home</a>
        </nav>
      <div className="content-wrapper fade-in">
      
        {!isQuizStarted && !isQuizEnded ? (
          <div className="start-screen fade-in">
            <h1 className="heading">Test your knowledge of Qatar</h1>
            <div className="dropdown-container">
              <div className="form-group">
                <label htmlFor="category">Select Category</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="history">Qatar History</option>
                  <option value="landmarks">Famous Landmarks</option>
                  <option value="rulers">Rulers of Qatar</option>
                  <option value="time-periods">Different Time Periods</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="time">Select Time per Question</label>
                <select
                  id="time"
                  value={timePerQuestion}
                  onChange={(e) => setTimePerQuestion(Number(e.target.value))}
                >
                  <option value="10">10 seconds</option>
                  <option value="15">15 seconds</option>
                  <option value="20">20 seconds</option>
                </select>
              </div>
            </div>
            <div className="img-background-horizontal"></div>
            <div className="img-background-horizontal"></div>
            <button className="btn start" onClick={startQuiz}>Start Quiz</button>
          </div>
        ) : isQuizEnded ? (
          <div className="end-screen fade-in">
            <h1 className="heading">Test your knowledge of Qatar</h1>
            <div className="score">
              <span className="score-text">Your Score:</span>
              <div>
                <span className="final-score">{score}</span> / {questions.length}
              </div>
              <button className="btn restart" onClick={restartQuiz}>Restart Quiz</button>
            </div>
          </div>
        ) : (
          <div className="quiz fade-in">
            <div className="timer">
              <div className="progress">
                <div className="progress-bar" style={{ width: `${(timeLeft / timePerQuestion) * 100}%` }}></div>
                <span className="progress-text">{timeLeft}s</span>
              </div>
            </div>
            <div className="question-wrapper fade-in">
              <div className="number">
                Question <span className="current">{currentQuestionIndex + 1}</span> / {questions.length}
              </div>
              <div className="question">{currentQuestion.question}</div>
            </div>
            <div className="answer-wrapper fade-in">
              {shuffledAnswers.map((answer, idx) => (
                <div
                  key={idx}
                  className={`answer ${selectedAnswer === answer ? 'selected' : ''} 
                              ${showCorrectAnswer && answer === currentQuestion.correct ? 'correct' : ''}
                              ${showCorrectAnswer && selectedAnswer === answer && answer !== currentQuestion.correct ? 'incorrect' : ''}`}
                  onClick={() => !showCorrectAnswer && handleAnswerSelection(answer)}
                >
                  <span className="text">{answer}</span>
                </div>
              ))}
            </div>
            {showCorrectAnswer && (
              <div className="explanation-fade-in">
                <p>{currentExplanation}</p>
              </div>
            )}
            <div className="button-container fade-in">
              <button className="btn submit" onClick={submitAnswer} disabled={!selectedAnswer || showCorrectAnswer}>
                Submit
              </button>
              <button className="btn end" onClick={endQuiz}>End Quiz</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
Quiz.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

export default Quiz;
