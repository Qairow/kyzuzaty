export type Language = "kz" | "ru";

export const eventDetails = {
  dateIso: "2026-08-15T17:00:00+05:00", // TODO: replace with the exact event date in ISO format
  dateKz: "15 тамыз 2026", // TODO: replace with the exact Kazakh event date
  dateRu: "15 августа 2026", // TODO: replace with the exact Russian event date
  time: "17:00", // TODO: replace with the exact event time
  venueKz: "Мерекелік үй", // TODO: replace with the exact venue name in Kazakh
  venueRu: "Банкетный зал", // TODO: replace with the exact venue name in Russian
  addressKz: "Алматы қ.", // TODO: replace with the exact address in Kazakh
  addressRu: "г. Алматы", // TODO: replace with the exact address in Russian
  mapLink: "#", // TODO: replace with the actual 2GIS link
};

export const galleryImages = [
  "/images/photo1.jpg",
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
    invitationTitle: "Қыз ұзату",
    heroTitle: "Дана & Нұрканат",
    heroSubtitle: "Ізгі ниетпен қыз ұзату кешіне шақырамыз",
    invitationText:
      "Құрметті ағайын-туыс, құда-жекжат, дос-жаран! Сіздерді аяулы қызымыз Данаға арналған қасиетті қыз ұзату рәсімінің қадірлі қонағы болуға шын жүректен шақырамыз. Ақ босаға аттар сәт алдындағы бұл кеште ақ тілектеріңізді арнап, қуанышымызды бірге бөліссеңіздер, біз үшін үлкен мәртебе болмақ.",
    invitationTextSecondary:
      "Ұлттық дәстүр мен отбасы жылуы тоғысқан бұл кеште Дана мен Нұрканаттың жаңа өмірге қадам басуына куә болып, ақ баталарыңызды беруіңізді тілейміз.",
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
  },
  ru: {
    langSwitch: "РУС / ҚАЗ",
    shortInvite: "Приглашаем на қыз ұзату",
    openHint: "Откройте конверт",
    musicPlay: "Включить музыку",
    musicPause: "Остановить музыку",
    invitationTitle: "Қыз ұзату",
    heroTitle: "Дана & Нұрканат",
    heroSubtitle: "С теплом приглашаем вас на вечер қыз ұзату",
    invitationText:
      "Дорогие родные, близкие, друзья и уважаемые гости! От всей души приглашаем вас разделить с нашей семьёй особенный вечер қыз ұзату в честь нашей невесты Даны. Для нас это трепетная и важная традиция проводов невесты, наполненная теплом, благословениями и искренними пожеланиями.",
    invitationTextSecondary:
      "Будем счастливы, если вы станете частью этого красивого семейного события, поддержите Дану и Нұрканата добрыми словами и разделите с нами радость этого светлого дня.",
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
  },
} as const;
