function applyImages() {
  try {
    var imgData = JSON.parse(localStorage.getItem('diya_images') || '{}');
    if(imgData.photo) {
      var els = document.querySelectorAll('.pssprt .image, .covid .image');
      for(var e of els) { e.style.backgroundImage = 'url(' + imgData.photo + ')'; }
    }
    if(imgData.rights) {
      var el = document.querySelector('.prava .image');
      if(el) el.style.backgroundImage = 'url(' + imgData.rights + ')';
    }
    if(imgData.sign) {
      var el = document.querySelector('.sign');
      if(el) el.style.backgroundImage = 'url(' + imgData.sign + ')';
    }
  } catch(e) {}
}

if(isWorking) {
	for(el of document.getElementsByClassName("birthdate")){
		el.innerHTML = "Дата народження: " + birthdate;
	}
	for(el of document.getElementsByClassName("fullname")){
		el.innerHTML = fullname;
	}
	document.getElementsByClassName("menutitile")[0].innerHTML = "Вітаємо, " + name;
	document.getElementsByClassName("passport_id")[0].innerHTML = "Номер: " + passport_id;

	document.getElementsByClassName("kpp_id")[0].innerHTML = kpp_id;

	if(isRightsEnabled) {
		document.getElementsByClassName("rights_valid_until")[0].innerHTML = "Дійсне до: " + rights_valid_until;
		document.getElementsByClassName("rights_categories")[0].innerHTML = "Категорії: " + rights_categories;
		document.getElementsByClassName("rights_tsc")[0].innerHTML = "Видав: " + rights_tsc;
		document.getElementsByClassName("rights_id")[0].innerHTML = rights_id;
	}

	if(isCovidCertificateEnabled) {
		document.getElementsByClassName("covid_valid_until")[0].innerHTML = "Дійсний до: " + covid_valid_until;
		document.getElementsByClassName("covid_certificate_id")[0].innerHTML = covid_certificate_id;
	}

  applyImages();
}