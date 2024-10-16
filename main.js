function getECLogos() {
  const fs = require('fs')
  const path = require('path')

  const distFolder = path.resolve(__dirname, './node_modules/@ecl/resources-ec-logo/dist/')
  const imageNegativeFolder = path.resolve(distFolder, 'negative/')
  const imagePositiveFolder = path.resolve(distFolder, 'positive/')
  const logoEcMute = path.resolve(distFolder, 'logo-ec--mute.svg')

  const images = [ logoEcMute ]

  const negativeImages = fs.readdirSync(imagePositiveFolder, { withFileTypes: true });
  const positiveImages = fs.readdirSync(imagePositiveFolder, { withFileTypes: true });


  negativeImages.forEach(file => {
    images.push(path.resolve(file.parentPath, file.name))
  });

  positiveImages.forEach(file => {
    images.push(path.resolve(file.parentPath, file.name))
  });

  return images
}

export { getECLogos }