document.addEventListener('DOMContentLoaded', displayCards);

async function loadDoctors() {
  try {
    const res = await fetch('./scripts/doctors.json');
    if (!res.ok) {
      console.error(`Response status: ${Response.status}`);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.error('Ups, something happen:', e);
    return null;
  }
}

function createDoctorCard({ name, job, profile, years, img, alt }) {
  const doctorCard = document.createElement('article');
  doctorCard.classList.add('doctor');
  doctorCard.classList.add('row');

  const doctorImg = document.createElement('img');
  doctorImg.classList.add('doctor__img');
  doctorImg.classList.add('col-6');
  doctorImg.classList.add('col-lg-3');
  doctorImg.src = img;
  doctorImg.alt = alt;

  const doctorInfo = document.createElement('div');
  doctorInfo.classList.add('doctor__info');
  doctorInfo.classList.add('col');

  const doctorName = document.createElement('h1');
  doctorName.classList.add('doctor__name');
  doctorName.textContent = name;

  const doctorJob = document.createElement('h2');
  doctorJob.classList.add('doctor__job');
  doctorJob.textContent = job;

  const doctorProfile = document.createElement('p');
  doctorProfile.classList.add('doctor__profile');
  doctorProfile.textContent = profile;

  doctorInfo.appendChild(doctorName);
  doctorInfo.appendChild(doctorJob);
  doctorInfo.appendChild(doctorProfile);

  doctorCard.appendChild(doctorImg);
  doctorCard.appendChild(doctorInfo);

  return doctorCard;
}

async function displayCards() {
  const doctors = await loadDoctors();
  if (!doctors) return;
  const listContainer = document.getElementById('doctor_list');
  doctors.forEach((doctor) =>
    listContainer.appendChild(createDoctorCard(doctor))
  );
}
