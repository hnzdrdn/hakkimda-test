const SUPABASE_URL = "https://sqxvhtlkgnlnqsuojalm.supabase.co";
const SUPABASE_KEY = "sb_publishable_yGI-vH9Ocr2Kfga-GR_Shw_fONA434L";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// =====================================================
// SORULAR
// =====================================================

const questions = [

    {
        question: "En sevdiğim renk hangisidir?",
        answers: [
            "Siyah",
            "Beyaz",
            "Pembe",
            "Mor"
        ],
        correct: 1
    },

    {
        question: "En sevdiğim yemek hangisidir?",
        answers: [
            "Pizza",
            "Hamburger",
            "Makarna",
            "Belli değil"
        ],
        correct: 3
    },

    {
        question: "Boş zamanlarımda en çok ne yapmayı severim?",
        answers: [
            "Film/dizi izlemek",
            "Kitap okumak",
            "Reels Kaydırmak",
            "Uyumak"
        ],
        correct: 0
    },

    {
        question: "En sevdiğim mevsim hangisidir?",
        answers: [
            "İlkbahar",
            "Yaz",
            "Sonbahar",
            "Kış"
        ],
        correct: 0
    },

    {
        question: "Hangisini tercih ederim?",
        answers: [
            "Kahve",
            "Çay",
            "Gazlı içecek",
            "Ayran"
        ],
        correct: 3
    },

    {
        question: "En sevdiğim tatlı hangisidir?",
        answers: [
            "Soğuk Baklava",
            "Cheesecake",
            "Sütlaç",
            "Çikolatalı pasta"
        ],
        correct: 0
    },

    {
        question: "Bir günlüğüne hangisine gitmek isterdim?",
        answers: [
            "Paris",
            "New York",
            "Dubai",
            "Londra"
        ],
        correct: 2
    },

    {
        question: "Telefonumda en çok hangi uygulamayı kullanırım?",
        answers: [
            "Instagram",
            "TikTok",
            "YouTube",
            "WhatsApp"
        ],
        correct: 1
    },

    {
        question: "Hayalimdeki tatil hangisidir?",
        answers: [
            "Deniz ve plaj",
            "Dağ evi",
            "Büyük bir şehir gezisi",
            "Kamp"
        ],
        correct: 1
    },

    {
        question: "Hangisini izlemeyi daha çok severim?",
        answers: [
            "Komedi",
            "Korku",
            "Romantik",
            "Aksiyon"
        ],
        correct: 0
    },

    {
        question: "Sabah uyandığımda ilk yaptığım şey hangisidir?",
        answers: [
            "Telefonuma bakmak",
            "Kahvaltı yapmak",
            "Tekrar uyumak",
            "Müzik açmak"
        ],
        correct: 2
    },

    {
        question: "Hangisi beni daha çok sinirlendirir?",
        answers: [
            "Geç kalınması",
            "Gürültü",
            "Mesajlara geç cevap verilmesi",
            "Plansızlık"
        ],
        correct: 0
    },

    {
        question: "Bir süper gücüm olsaydı hangisini seçerdim?",
        answers: [
            "Uçmak",
            "Görünmez olmak",
            "Zihin okumak",
            "Zamanda yolculuk"
        ],
        correct: 3
    },

    {
        question: "Hangisini daha çok severim?",
        answers: [
            "Kediler",
            "Köpekler",
            "Kuşlar",
            "Hepsini"
        ],
        correct: 1
    },

    {
        question: "En sevdiğim müzik türü hangisidir?",
        answers: [
            "Pop",
            "Rap",
            "Rock",
            "Arabesk"
        ],
        correct: 0
    },

    {
        question: "Bir hafta boyunca hangisinden vazgeçebilirim?",
        answers: [
            "Telefon",
            "İnternet",
            "Uyku",
            "Müzik"
        ],
        correct: 0
    },

    {
        question: "Hangisini yapmayı daha çok isterim?",
        answers: [
            "Yeni bir dil öğrenmek",
            "Yeni bir ülke gezmek",
            "Yeni bir hobi edinmek",
            "Yeni bir yemek öğrenmek"
        ],
        correct: 1
    },

    {
        question: "Arkadaşlarım beni en çok hangi özelliğimle tanımlar?",
        answers: [
            "Komik",
            "Sakin",
            "Üşengeç",
            "Enerjik"
        ],
        correct: 2
    },

    {
        question: "Pazar günümü hangisini yaparak geçirmek isterim?",
        answers: [
            "Evde dinlenerek",
            "Arkadaşlarımla dışarı çıkarak",
            "Film/dizi izleyerek",
            "Gezmeye giderek"
        ],
        correct: 0
    },

    {
        question: "Beni gerçekten tanıyorsan aşağıdakilerden hangisini seçersin?",
        answers: [
            "Her şeyi planlarım",
            "Anlık yaşamayı severim",
            "İkisini de yaparım",
            "Tamamen ruh halime bağlıdır"
        ],
        correct: 3
    }

];


// =====================================================
// DEĞİŞKENLER
// =====================================================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

let friendName = "";

let activeTestId = null;

let createQuestionIndex = 0;
let creatorAnswers = [];
let creatorName = "";
let creatorSelectedAnswer = null;


// =====================================================
// HTML ELEMENTLERİ
// =====================================================

const startButton = document.getElementById("start-btn");

const quiz = document.getElementById("quiz");

const createTestButton =
    document.getElementById("create-test-btn");

const createTest =
    document.getElementById("create-test");

const createQuestionNumber =
    document.getElementById("create-question-number");

const createQuestion =
    document.getElementById("create-question");

const createAnswerButtons =
    document.getElementById("create-answer-buttons");

const createNextButton =
    document.getElementById("create-next-btn");

const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answer-buttons");

const nextButton =
    document.getElementById("next-btn");

const result =
    document.getElementById("result");

const questionNumber =
    document.getElementById("question-number");

const progressBar =
    document.getElementById("progress-bar");

const correctAnswers =
    document.getElementById("correct-answers");


// =====================================================
// BUTONLAR
// =====================================================

if (startButton) {
    startButton.addEventListener("click", startQuiz);
}


// KENDİ TESTİNİ OLUŞTUR BUTONU

function startCreatingTest() {

    creatorName = prompt("Adın nedir?");

    if (!creatorName || creatorName.trim() === "") {
        alert("Lütfen adını gir.");
        return;
    }

    startButton.style.display = "none";

    createTestButton.style.display = "none";

    quiz.style.display = "none";

    result.style.display = "none";

    correctAnswers.style.display = "none";

    createTest.style.display = "block";

    createQuestionIndex = 0;

    creatorAnswers = [];

    creatorSelectedAnswer = null;

    showCreateQuestion();
}


if (createTestButton) {
    createTestButton.addEventListener(
        "click",
        startCreatingTest
    );
}


// =====================================================
// NORMAL TESTİ BAŞLAT
// =====================================================

function startQuiz() {

    friendName = prompt("Adın nedir?");

    if (!friendName || friendName.trim() === "") {

        alert("Lütfen adını gir.");

        return;
    }

    startButton.style.display = "none";

    createTestButton.style.display = "none";

    quiz.style.display = "block";

    createTest.style.display = "none";

    result.style.display = "none";

    correctAnswers.style.display = "none";

    currentQuestion = 0;

    score = 0;

    userAnswers = [];

    showQuestion();
}


// =====================================================
// NORMAL TEST SORUSUNU GÖSTER
// =====================================================

function showQuestion() {

    answerButtons.innerHTML = "";

    selectedAnswer = null;

    nextButton.style.display = "none";

    questionNumber.innerText =
        `Soru ${currentQuestion + 1} / ${questions.length}`;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        progress + "%";

    const question =
        questions[currentQuestion];

    questionElement.innerText =
        (currentQuestion + 1) +
        ". " +
        question.question;


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.innerText = answer;

        button.classList.add("answer-btn");


        button.addEventListener("click", () => {

            const allButtons =
                document.querySelectorAll(".answer-btn");

            allButtons.forEach(btn => {

                btn.classList.remove("selected");

            });


            button.classList.add("selected");

            selectedAnswer = index;

            nextButton.style.display = "block";

        });


        answerButtons.appendChild(button);

    });

}


// =====================================================
// NORMAL TEST - SONRAKİ SORU
// =====================================================

if (nextButton) {

    nextButton.addEventListener("click", () => {

        if (selectedAnswer === null) {

            alert("Lütfen bir cevap seç.");

            return;
        }


        userAnswers.push(selectedAnswer);


        if (
            selectedAnswer ===
            questions[currentQuestion].correct
        ) {

            score++;

        }


        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        } else {

            showResult();

        }

    });

}


// =====================================================
// SONUÇ EKRANI
// =====================================================

function showResult() {

    quiz.style.display = "none";

    result.style.display = "block";

    correctAnswers.style.display = "none";


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    saveQuizResult(
        friendName,
        score,
        percentage,
        userAnswers
    );


    let message = "";


    if (percentage >= 90) {

        message =
            "SÜPERSİN !!! 😘🤍";

    } else if (percentage >= 75) {

        message =
            "Hiç yoktan iyidir. 💃";

    } else if (percentage >= 50) {

        message =
            "Muhabbeti azaltalım. 🤝";

    } else {

        message =
            "Engelliyorum seni? 🙄";

    }


    result.innerHTML = `

        <h2>Test Bitti! 🎉</h2>

        <h3>
            ${questions.length} sorudan
            ${score} doğru AFERİN💐!
        </h3>

        <p>
            Başarı oranı:
            <strong>%${percentage}</strong>
        </p>

        <p>
            ${message}
        </p>

        <button id="show-answers-btn">
            👀 Doğru Cevapları Gör
        </button>

        <br>

        <button id="restart-btn">
            🔄 Tekrar Test Yap
        </button>

    `;


    document
        .getElementById("show-answers-btn")
        .addEventListener(
            "click",
            showCorrectAnswers
        );


    document
        .getElementById("restart-btn")
        .addEventListener(
            "click",
            startQuiz
        );

}


// =====================================================
// DOĞRU CEVAPLARI GÖSTER
// =====================================================

function showCorrectAnswers() {

    result.style.display = "none";

    correctAnswers.style.display = "block";


    let answersHTML = `

        <h2>Doğru Cevaplar 👀</h2>

    `;


    questions.forEach((question, index) => {

        const userAnswerIndex =
            userAnswers[index];

        const correctAnswerIndex =
            question.correct;


        const userAnswer =
            question.answers[userAnswerIndex];

        const correctAnswer =
            question.answers[correctAnswerIndex];


        if (
            userAnswerIndex ===
            correctAnswerIndex
        ) {

            answersHTML += `

                <div class="correct-item">

                    <p>
                        <strong>
                            ${index + 1}.
                            ${question.question}
                        </strong>
                    </p>

                    <p class="user-correct">
                        ✓ Senin cevabın:
                        ${userAnswer}
                    </p>

                </div>

            `;

        } else {

            answersHTML += `

                <div class="correct-item">

                    <p>
                        <strong>
                            ${index + 1}.
                            ${question.question}
                        </strong>
                    </p>

                    <p class="user-wrong">
                        ✕ Senin cevabın:
                        ${userAnswer}
                    </p>

                    <p class="correct-answer">
                        ✓ Doğru cevap:
                        ${correctAnswer}
                    </p>

                </div>

            `;

        }

    });


    answersHTML += `

        <button id="back-result-btn">
            ← Sonuç Ekranına Dön
        </button>

    `;


    correctAnswers.innerHTML =
        answersHTML;


    document
        .getElementById("back-result-btn")
        .addEventListener("click", () => {

            correctAnswers.style.display =
                "none";

            result.style.display =
                "block";

        });

}


// =====================================================
// KENDİ TESTİNİ OLUŞTUR
// =====================================================

function startCreatingTest() {

    creatorName =
        prompt("Adın nedir?");


    if (
        !creatorName ||
        creatorName.trim() === ""
    ) {

        alert("Lütfen adını gir.");

        return;
    }


    // Ana butonları gizle

    startButton.style.display =
        "none";

    createTestButton.style.display =
        "none";


    // Diğer ekranları gizle

    quiz.style.display =
        "none";

    result.style.display =
        "none";

    correctAnswers.style.display =
        "none";


    // Kendi test ekranını aç

    createTest.style.display =
        "block";


    // Baştan başla

    createQuestionIndex = 0;

    creatorAnswers = [];

    creatorSelectedAnswer = null;


    showCreateQuestion();

}


// =====================================================
// KENDİ TESTİNDE SORU GÖSTER
// =====================================================

function showCreateQuestion() {

    createAnswerButtons.innerHTML =
        "";

    creatorSelectedAnswer =
        null;

    createNextButton.style.display =
        "none";


    createQuestionNumber.innerText =
        `Soru ${createQuestionIndex + 1} / ${questions.length}`;


    const question =
        questions[createQuestionIndex];


    createQuestion.innerText =
        question.question;


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.innerText =
                answer;


            button.classList.add(
                "answer-btn"
            );


            button.addEventListener(
                "click",
                () => {

                    const allButtons =
                        createAnswerButtons
                            .querySelectorAll(
                                ".answer-btn"
                            );


                    allButtons.forEach(
                        btn => {

                            btn.classList.remove(
                                "selected"
                            );

                        }
                    );


                    button.classList.add(
                        "selected"
                    );


                    creatorSelectedAnswer =
                        index;


                    createNextButton.style.display =
                        "block";

                }
            );


            createAnswerButtons.appendChild(
                button
            );

        }
    );

}


// =====================================================
// KENDİ TESTİ - İLERİ BUTONU
// =====================================================

if (createNextButton) {

    createNextButton.addEventListener(
        "click",
        () => {

            if (
                creatorSelectedAnswer ===
                null
            ) {

                alert(
                    "Lütfen bir cevap seç."
                );

                return;
            }


            creatorAnswers.push(
                creatorSelectedAnswer
            );


            createQuestionIndex++;


            if (
                createQuestionIndex <
                questions.length
            ) {

                showCreateQuestion();

            } else {

                finishCreatingTest();

            }

        }
    );

}


// =====================================================
// KENDİ TESTİNİ TAMAMLA
// =====================================================

function finishCreatingTest() {

    createTest.style.display =
        "none";

    result.style.display =
        "block";


    result.innerHTML = `

        <h2>Testin Hazır! 🎉</h2>

        <p>
            ${creatorName},
            testini başarıyla oluşturdun.
        </p>

        <p>
            Arkadaşların artık seni
            ne kadar tanıdığını test edebilir. 💕
        </p>

        <button id="new-test-btn">
            ✨ Yeni Test Oluştur
        </button>

    `;


    document
        .getElementById("new-test-btn")
        .addEventListener(
            "click",
            () => {

                result.style.display =
                    "none";

                createTest.style.display =
                    "block";


                createQuestionIndex =
                    0;

                creatorAnswers =
                    [];

                creatorSelectedAnswer =
                    null;


                showCreateQuestion();

            }
        );

}


// =====================================================
// SUPABASE - NORMAL TEST SONUCUNU KAYDET
// =====================================================

async function saveQuizResult(
    name,
    score,
    percentage,
    answers
) {

    try {

        const { data, error } =
            await supabaseClient
                .from("results")
                .insert([
                    {
                        friend_name: name,
                        score: score,
                        percentage: percentage,
                        answers: answers,
                        test_id: activeTestId
                    }
                ]);


        if (error) {

            console.error(
                "Sonuç kaydedilemedi:",
                error
            );

            return;
        }


        console.log(
            "Sonuç başarıyla kaydedildi:",
            data
        );

    } catch (error) {

        console.error(
            "Supabase bağlantı hatası:",
            error
        );

    }

}


// =====================================================
// PAYLAŞILAN TESTİ YÜKLE
// =====================================================

async function loadSharedTest() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const testId =
        params.get("test");


    // Normal site açıldıysa hiçbir şey yapma

    if (!testId) {

        return;

    }


    // Test ID'sini kaydet

    activeTestId =
        testId;


    // Paylaşılan testte başlangıç ekranı

    startButton.style.display =
        "block";

    createTestButton.style.display =
        "block";


    quiz.style.display =
        "none";

    createTest.style.display =
        "none";

    result.style.display =
        "none";

    correctAnswers.style.display =
        "none";


    // Supabase'den test bilgilerini getir

    const { data, error } =
        await supabaseClient
            .from("test")
            .select(
                "owner_name, answers"
            )
            .eq("id", testId)
            .single();


    if (error) {

        console.error(
            "Test yüklenemedi:",
            error
        );

        alert(
            "Bu test bulunamadı."
        );

        return;

    }


    console.log(
        "Paylaşılan test:",
        data
    );


    // Test sahibinin cevaplarını
    // doğru cevap olarak ayarla

    questions.forEach(
        (question, index) => {

            question.correct =
                data.answers[index];

        }
    );


    // Başlığı değiştir

    document
        .querySelector("h1")
        .innerText =
        `${data.owner_name}'yi Ne Kadar Tanıyorsun? 😎`;

}


// =====================================================
// SAYFA AÇILINCA PAYLAŞILAN TESTİ KONTROL ET
// =====================================================

loadSharedTest();
