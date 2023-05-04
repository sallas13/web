const { GestureDescription, Finger, FingerCurl } = window.fp;

const scrollDownGesture = new GestureDescription('scroll-Down'); // ✊️
const scrollUpGesture = new GestureDescription('scroll-Up'); // 🖐
const ClickGesture = new GestureDescription('click'); // 🤏


// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
scrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
scrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  scrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  scrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  scrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Click
// -----------------------------------------------------------------------------
ClickGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8)
ClickGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5)

ClickGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
ClickGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4)

ClickGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
ClickGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9)

ClickGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
ClickGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9)

ClickGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)
ClickGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9)


const knownGestures = [
  scrollDownGesture,
  scrollUpGesture,
  ClickGesture,
]

const gestureStrings = {
  'scroll-Up': '🖐',
  'scroll-Down': '✊️',
  'click': '🤏'
}

export {
  knownGestures,
  gestureStrings
}