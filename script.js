// Get all elements
const quiz = document.querySelector('.quiz');
const pertanyaan = document.querySelector('#pertanyaan');
const jawaban = document.querySelectorAll('input[type="radio"]');
const submit = document.querySelector('.submit');
const hasil = document.querySelector('#hasil');
const progressBar = document.querySelector('.progress-bar');

// Set up quiz data
const quizData = [
  {
    pertanyaan: 'Apa itu demokrasi?',
    jawaban: [
      { text: 'Sistem pemerintahan yang dipimpin oleh raja', value: 'A' },
      { text: 'Sistem pemerintahan yang dipimpin oleh rakyat', value: 'B' },
      { text: 'Sistem pemerintahan yang dipimpin oleh militer', value: 'C' },
      { text: 'Sistem pemerintahan yang dipimpin oleh partai', value: 'D' },
    ],
    jawabanBenar: 'B',
  },
  {
    pertanyaan: 'Siapa yang berhak memilih dalam pemilu?',
    jawaban: [
      { text: 'Rakyat', value: 'A' },
      { text: 'Pemerintah', value: 'B' },
      { text: 'Militer', value: 'C' },
      { text: 'Partai', value: 'D' },
    ],
    jawabanBenar: 'A',
  },
  {
    pertanyaan: 'Apa perbedaan antara demokrasi langsung dan demokrasi perwakilan?',
    jawaban: [
      { text: 'Demokrasi langsung adalah sistem pemerintahan yang dipimpin oleh rakyat, sedangkan demokrasi perwakilan adalah sistem pemerintahan yang dipimpin oleh wakil rakyat', value: 'A' },
      { text: 'Demokrasi langsung adalah sistem pemerintahan yang dipimpin oleh pemerintah, sedangkan demokrasi perwakilan adalah sistem pemerintahan yang dipimpin oleh rakyat', value: 'B' },
      { text: 'Demokrasi langsung adalah sistem pemerintahan yang dipimpin oleh militer, sedangkan demokrasi perwakilan adalah sistem pemerintahan yang dipimpin oleh partai', value: 'C' },
      { text: 'Demokrasi langsung adalah sistem pemerintahan yang dipimpin oleh partai, sedangkan demokrasi perwakilan adalah sistem pemerintahan yang dipimpin oleh militer', value: 'D' },
    ],
    jawabanBenar: 'A',
  },
  {
    pertanyaan: 'Siapa yang menjadi kepala negara dalam sistem demokrasi?',
    jawaban: [
      { text: 'Presiden', value: 'A' },
      { text: 'Perdana Menteri', value: 'B' },
      { text: 'Gubernur', value: 'C' },
      { text: 'Bupati', value: 'D' },
    ],
    jawabanBenar: 'A',
  },
  {
    pertanyaan: 'Apa fungsi dari parlemen dalam sistem demokrasi?',
    jawaban: [
      { text: 'Membuat undang-undang', value: 'A' },
      { text: 'Mengawasi pemerintah', value: 'B' },
      { text: 'Mengangkat presiden', value: 'C' },
      { text: 'Mengangkat gubernur', value: 'D' },
    ],
    jawabanBenar: 'A',
  },
  {
    pertanyaan: 'Siapa yang berhak menjadi anggota parlemen?',
    jawaban: [
      { text: 'Rakyat', value: 'A' },
      { text: 'Pemerintah', value: 'B' },
      { text: 'Militer', value: 'C' },
      { text: 'Partai', value: 'D' },
    ],
    jawabanBenar: 'A',
  }
]