const content = {
  zh: {
    title:"詹飞天",
    nav:{home:"首页",about:"关于我",projects:"项目",contact:"联系"},
    intro:{title:"你好，我是詹飞天",text:"RWTH Aachen 工业大学 · 电气工程与信息技术专业<br>无人机与汽车电子爱好者"},
    about:{title:"关于我",text:"这里可以写学历、实习经历、兴趣爱好…"},
    projects:{title:"项目",text:"这里可以展示你的无人机作品、工程项目或科研成果。"},
    contact:{title:"联系",text:"📧 邮箱: Feitian_zhan@vip.163.com<br>🔗 LinkedIn: <a href='https://www.linkedin.com/in/feitian-zhan-38670935a' target='_blank'>个人主页</a>"}
  },
  en: {
    title:"Feitian Zhan",
    nav:{home:"Home",about:"About",projects:"Projects",contact:"Contact"},
    intro:{title:"Hi, I'm Feitian Zhan",text:"RWTH Aachen University · Electrical Engineering and Information Technology<br>Drone & Automotive Electronics Enthusiast"},
    about:{title:"About Me",text:"Here you can write about your education, internships, hobbies…"},
    projects:{title:"Projects",text:"Showcase your drone works, engineering projects, or research results here."},
    contact:{title:"Contact",text:"📧 Email: Feitian_zhan@vip.163.com<br>🔗 LinkedIn: <a href='https://www.linkedin.com/in/feitian-zhan-38670935a' target='_blank'>Profile</a>"}
  },
  de: {
    title:"Feitian Zhan",
    nav:{home:"Startseite",about:"Über mich",projects:"Projekte",contact:"Kontakt"},
    intro:{title:"Hallo, ich bin Feitian Zhan",text:"RWTH Aachen · Elektrotechnik und Informationstechnik<br>Drohnen- & Automobilelektronik-Enthusiast"},
    about:{title:"Über mich",text:"Hier können Sie über Ausbildung, Praktika, Hobbys schreiben…"},
    projects:{title:"Projekte",text:"Hier können Sie Ihre Drohnenarbeiten, Ingenieurprojekte oder Forschungsergebnisse präsentieren."},
    contact:{title:"Kontakt",text:"📧 E-Mail: Feitian_zhan@vip.163.com<br>🔗 LinkedIn: <a href='https://www.linkedin.com/in/feitian-zhan-38670935a' target='_blank'>Profil</a>"}
  }
};

function setLanguage(lang) {
  const c = content[lang];
  document.getElementById("title").innerHTML = c.title;
  document.getElementById("nav-home").innerHTML = c.nav.home;
  document.getElementById("nav-about").innerHTML = c.nav.about;
  document.getElementById("nav-projects").innerHTML = c.nav.projects;
  document.getElementById("nav-contact").innerHTML = c.nav.contact;
  document.getElementById("intro-title").innerHTML = c.intro.title;
  document.getElementById("intro-text").innerHTML = c.intro.text;
  document.getElementById("about-title").innerHTML = c.about.title;
  document.getElementById("about-text").innerHTML = c.about.text;
  document.getElementById("projects-title").innerHTML = c.projects.title;
  document.getElementById("projects-text").innerHTML = c.projects.text;
  document.getElementById("contact-title").innerHTML = c.contact.title;
  document.getElementById("contact-text").innerHTML = c.contact.text;
  document.getElementById("lang").value = lang;
}

// 自动检测浏览器语言
function detectLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith("de")) return "de";
  if (lang.startsWith("zh")) return "zh";
  return "en";
}

// 初始化
window.addEventListener("DOMContentLoaded", () => {
  const defaultLang = detectLanguage();
  setLanguage(defaultLang);
});

// 切换语言事件
document.getElementById("lang").addEventListener("change", () => {
  setLanguage(document.getElementById("lang").value);
});
