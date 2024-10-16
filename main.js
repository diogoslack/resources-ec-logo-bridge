function getECLogos() {
  const fs = require('fs')

  const distFolder = './node_modules/@ecl/resources-ec-logo/dist/'
  const imageNegativeFolder = distFolder + 'negative'
  const imagePositiveFolder = distFolder + 'positive'
  const logoEcMute = distFolder + 'logo-ec--mute.svg'

  const images = [ logoEcMute ]

  fs.readdir(imageNegativeFolder, (err, files) => {
    files.forEach(file => {
      images.push(file)
    });
  });

  fs.readdir(imagePositiveFolder, (err, files) => {
    files.forEach(file => {
      images.push(file)
    });
  });

  return images
}

export { getECLogos }