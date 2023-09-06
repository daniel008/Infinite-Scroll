// Unsplash API
const count = 10;
const apiKey = 'LDOPyB0hfQJ-QAufoW4DAligiSI0bdiO_FKpIu1Hyvk';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    
  }
}

// On Load
getPhotos()
