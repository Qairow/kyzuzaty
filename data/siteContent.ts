export type Language = "kz" | "ru";

export const eventDetails = {
  dateIso: "2026-08-21T17:00:00+05:00",
  dateKz: "21 тамыз 2026",
  dateRu: "21 августа 2026",
  time: "17:00",
  venueKz: "Marcel Hall мейрамханасы",
  venueRu: "Ресторан Marcel Hall",
  addressKz: "Байқадамов көшесі, 11",
  addressRu: "ул. Байкадамова, 11",
  mapLink: "https://2gis.kz/almaty/geo/70000001066116625",
};

export const galleryImages = [
  "/images/photo1.jpeg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
];

export const content = {
  kz: {
    langSwitch: "ҚАЗ / РУС",
    shortInvite: "Сізді қыз ұзатуға шақырамыз",
    openHint: "Конвертті ашыңыз",
    musicPlay: "Әуенді қосу",
    musicPause: "Әуенді тоқтату",
    musicBadgePlay: "Play",
    musicBadgeStop: "Stop",
    invitationTitle: "Қыз ұзату",
    heroTitle: "Дана & Нұрканат",
    heroSubtitle: "Ізгі ниетпен қыз ұзату кешіне шақырамыз",
    sectionLabel: "QYZ UZATU",
    brideName: "Дана",

    // Greeting section
    greetingGreeting: "Құрметті қонақтар!",
    greetingText: "Vadim және Gulmira сіздерді Дана қыз ұзатуына шақырады.",
    greetingTextSecondary:
      "Ұлттық дәстүр мен отбасы жылуы тоғысқан бұл кеште Дананың жаңа өмірге қадам басуына куә болып, ақ баталарыңызды беруіңізді тілейміз.",

    // Calendar section
    calendarMonths: [
      "Қаңтар",
      "Ақпан",
      "Наурыз",
      "Сәуір",
      "Мамыр",
      "Маусым",
      "Шілде",
      "Тамыз",
      "Қыркүйек",
      "Қазан",
      "Қараша",
      "Желтоқсан",
    ],
    calendarWeekdaysShort: ["Дс", "Сс", "Ср", "Бс", "Жм", "Сб", "Жс"],
    calendarWeekdaysLong: [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі",
      "Жұма",
      "Сенбі",
      "Жексенбі",
    ],

    countdownTitle: "Салтанатқа дейін",
    days: "күн",
    hours: "сағат",
    minutes: "минут",
    seconds: "секунд",
    venueTitle: "Өтетін орны",
    venueButton: "2GIS картасын ашу",
    galleryTitle: "Естелік сәттер",
    detailsLabelDate: "Күні",
    detailsLabelTime: "Уақыты",
    detailsLabelPlace: "Өтетін жері",

    // RSVP section (visual only, no backend)
    rsvpTitle: "Сауалнама",
    rsvpSubtitle: "Біздің тойымызға келе аласыз ба?",
    rsvpNameLabel: "Аты-жөніңіз",
    rsvpNamePlaceholder: "Атыңызды жазыңыз",
    rsvpPartnerLabel: "Жұбайыңыздың аты-жөні",
    rsvpPartnerPlaceholder: "Болса, жазыңыз",
    rsvpYes: "Иә, әрине",
    rsvpNo: "Өкінішке орай, жоқ",
    rsvpSubmit: "Жіберу",
    rsvpSubmitting: "Жіберіліп жатыр…",
    rsvpThanksTitle: "Рахмет!",
    rsvpThanksText: "Жауабыңыз қабылданды",
    rsvpErrorText: "Қате шықты, қайталап көріңіз.",

    // Hosts section
    hostsTitle: "Той иелері",
    hostsNames: ["Vadim", "Gulmira"],
    hostsClosing: "Келіңіздер, тойымызды қадірлі қонағы болыңыздар",
  },
  ru: {
    langSwitch: "РУС / ҚАЗ",
    shortInvite: "Приглашаем на қыз ұзату",
    openHint: "Откройте конверт",
    musicPlay: "Включить музыку",
    musicPause: "Остановить музыку",
    musicBadgePlay: "Play",
    musicBadgeStop: "Stop",
    invitationTitle: "Қыз ұзату",
    heroTitle: "Дана & Нұрканат",
    heroSubtitle: "С теплом приглашаем вас на вечер қыз ұзату",
    sectionLabel: "QYZ UZATU",
    brideName: "Дана",

    // Greeting section
    greetingGreeting: "Дорогие гости!",
    greetingText: "Vadim и Gulmira искренне приглашают вас на Дана қыз ұзату.",
    greetingTextSecondary:
      "Будем счастливы, если в этот вечер, наполненный теплом и национальными традициями, вы разделите с нами радость и подарите Дане свои добрые благословения.",

    // Calendar section
    calendarMonths: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    calendarWeekdaysShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    calendarWeekdaysLong: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],

    countdownTitle: "До начала вечера",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    venueTitle: "Место проведения",
    venueButton: "Открыть в 2ГИС",
    galleryTitle: "Памятные моменты",
    detailsLabelDate: "Дата",
    detailsLabelTime: "Время",
    detailsLabelPlace: "Место",

    // RSVP section (visual only, no backend)
    rsvpTitle: "Анкета",
    rsvpSubtitle: "Сможете прийти на наш праздник?",
    rsvpNameLabel: "Ваше имя",
    rsvpNamePlaceholder: "Введите ваше имя",
    rsvpPartnerLabel: "Имя супруга/и",
    rsvpPartnerPlaceholder: "Если есть, укажите",
    rsvpYes: "Да, конечно",
    rsvpNo: "К сожалению, нет",
    rsvpSubmit: "Отправить",
    rsvpSubmitting: "Отправляется…",
    rsvpThanksTitle: "Спасибо!",
    rsvpThanksText: "Ваш ответ принят",
    rsvpErrorText: "Что-то пошло не так, попробуйте ещё раз.",

    // Hosts section
    hostsTitle: "Организаторы",
    hostsNames: ["Vadim", "Gulmira"],
    hostsClosing: "Будем рады видеть вас почётным гостем нашего праздника",
  },
} as const;
