// Активировать документы (true - включены, false - отключены)
var isRightsEnabled = true; // Права
var isCovidCertificateEnabled = true; // COVID-сертификат

// Общее
var birthdate = "01.01.2001"; // Дата рождения
var fullname = "Фамилия Имя Отчество" // ФИО
var name = "Имя" // Имя

// Паспорт
var passport_id = "123456789" // Номер паспорта

// КПП
var kpp_id = "0123456789" // ИНН

// Права
var rights_valid_until = "01.01.2022" // Права "Дійсні до"
var rights_categories = "A, B" // Права "Категорії"
var rights_tsc = "ТСЦ 8631" // Права "Видав
var rights_id = "KBE968639" // Права "Серія та номер""

// COVID-сертификат
var covid_valid_until = "01.01.2022" // Сертификат "Дійсний до"
var covid_certificate_id = "URN:UVCI:01:UA:0<br>E55669376876888<br>B9E2520C4F88930" // Номер сертификата (<br> - перенос строки)

try {
  var saved = JSON.parse(localStorage.getItem('diya_settings'));
  if(saved) {
    if(saved.birthdate) birthdate = saved.birthdate;
    if(saved.fullname) fullname = saved.fullname;
    if(saved.name) name = saved.name;
    if(saved.passport_id) passport_id = saved.passport_id;
    if(saved.kpp_id) kpp_id = saved.kpp_id;
    if(saved.rights_valid_until) rights_valid_until = saved.rights_valid_until;
    if(saved.rights_categories) rights_categories = saved.rights_categories;
    if(saved.rights_tsc) rights_tsc = saved.rights_tsc;
    if(saved.rights_id) rights_id = saved.rights_id;
    if(saved.covid_valid_until) covid_valid_until = saved.covid_valid_until;
    if(saved.covid_certificate_id) covid_certificate_id = saved.covid_certificate_id;
    if(saved.isRightsEnabled !== undefined) isRightsEnabled = saved.isRightsEnabled;
    if(saved.isCovidCertificateEnabled !== undefined) isCovidCertificateEnabled = saved.isCovidCertificateEnabled;
  }
} catch(e) {}