const { GestureDescription, Finger, FingerCurl } = window.fp;
  
const scrollDownGesture = new GestureDescription('scroll-Down'); // ✊️
const scrollUpGesture = new GestureDescription('scroll-Up'); // 🖐

  
// Rock
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
scrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
scrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    scrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    scrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    scrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

const knownGestures = [
  scrollDownGesture, 
  scrollUpGesture
]

const gestureStrings = {
  'scroll-Up': '🖐',
  'scroll-Down': '✊️'
}

export {
  knownGestures,
  gestureStrings
}