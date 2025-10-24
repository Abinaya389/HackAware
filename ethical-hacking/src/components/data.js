// Simple lesson + quiz data used by Learn and Quiz components
export const lessons = [
  {
    id: 'phishing',
    title: 'Phishing (fake SMS / WhatsApp links)',
    en: `Phishing messages try to trick you into clicking fake links. Never open links from unknown numbers. Verify sender, look for spelling mistakes, and don't give OTPs to anyone.`,
    ta: `Phishing SMS/WhatsApp link-ukku elavum vetriyaa irukka? Illai. Aranmai payanpaduthu. Unknown number-la irunthu varum links-ai thirumbavum thirumpikkavum - OTP-ai yaarukkum kodukkadhe.`,
    video: null,
    questions: [
      {
        question: 'A random SMS asks for your OTP to confirm delivery. Should you share it?',
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: 'OTP is private. Never share it. Legit services never ask for OTPs.'
      }
    ]
  },
  {
    id: 'fakeapps',
    title: 'Fake / Malicious Apps',
    en: `Fake apps mimic real apps to steal data. Install only from official stores and check developer, reviews, and permissions before installing.`,
    ta: `Fake app-ukal oru real app pola irundhu unga data-ai theevu. Official store-il nallathu mattum install pannunga; developer-um reviews-um nokkunga.`,
    video: null,
    questions: [
      {
        question: "Should you install a game from an unknown website if it's free?",
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: 'Use official app stores. Unknown APKs may contain malware.'
      }
    ]
  },
  {
    id: 'permissions',
    title: 'App Permissions',
    en: `Apps request permissions to access features. Give only what is needed. A flashlight should not need camera or contacts.`,
    ta: `App permissions romba mukkiyam. Thevaiyaana permissions mathiri maathiri kodunga. Oru flashlight app-ku camera permission thevai illai.`,
    video: null,
    questions: [
      {
        question: 'Oru flashlight app-ku camera permission venuma?',
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: "No — flashlight only needs torch/hardware control, not camera or contacts."
      }
    ]
  },
  {
    id: 'network',
    title: 'Network & Wi‑Fi Risks',
    en: `Public Wi‑Fi can be insecure. Avoid sensitive tasks on public networks or use a trusted VPN.`,
    ta: `Public Wi‑Fi la sensitive tasks pannadhe. VPN use pannunga or mobile data-ai prefer pannunga.`,
    video: null,
    questions: [
      {
        question: 'Is it safe to do online banking over an open public Wi‑Fi without VPN?',
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: 'Public Wi‑Fi can be intercepted. Use mobile data or VPN for banking.'
      }
    ]
  },
  {
    id: 'updates',
    title: 'OS Updates Importance',
    en: `OS and app updates fix security issues. Enable automatic updates to stay protected.`,
    ta: `OS updates security patches kodukkum. Automatic updates enable pannunga.`,
    video: null,
    questions: [
      {
        question: 'Should you enable system and app updates?',
        options: ['Yes', 'No'],
        correctIndex: 0,
        explanation: 'Yes — updates patch vulnerabilities and improve security.'
      }
    ]
  }
]
