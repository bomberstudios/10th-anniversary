const sketch = require('sketch')
const path = require('path')

export function backTo2010() {
  changeIconToYear(2010)
}
export function backTo2012() {
  changeIconToYear(2012)
}
export function backTo2014() {
  changeIconToYear(2014)
}
export function backTo2016() {
  changeIconToYear(2016)
}


function changeIconToYear(year) {
  var app = NSApplication.sharedApplication()
  var imgPath = path.resourcePath(year + '.icns')
  var img = NSImage.alloc().initByReferencingFile(imgPath)
  app.setApplicationIconImage(img)
}

function resetIcon() {
  // Find version
  const version = sketch.version
  const variant = MSApplicationMetadata.metadata().variant
  switch (variant) {
    case 'beta':
      break
    case 'NONAPPSTORE':
      break
    case 'EXPERIMENTAL':
      break
    case 'INTERNAL':
      break
    default:
      break
  }
}
