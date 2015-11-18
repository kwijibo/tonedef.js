//helpers
const pipe = (...funcs) => funcs.reduce( (f,g)=> x=> g(f(x)) )

// audioContext:: () -> AudioContext
export const audioContext = () => {
  return ctx = new (window.AudioContext || window.webkitAudioContext)();   
}
// oscillator :: AudioContext -> Oscillator
const oscillator = context => context.createOscillator()

// gain :: AudioContext -> Gain
const gain = context => context.createGain()

// connect :: (a,b) -> [a,b]
const connect = (a,b) => {
  a.connect(b)
  return [a,b]
}

// oscillatorGain :: AudioContext -> [Oscillator, Gain]
const oscillatorGain = context => {
  const o = oscillator(context)
  const g = gain(context)
  connect(g,context.destination)
  return connect(o,g)
}

// frequency :: Oscillator -> Number freq -> Oscillator
const frequency = oscillator => freq => {
  oscillator.frequency.value = freq
  return oscillator
}

// wave :: Oscillator -> String waveType -> Oscillator
const wave = osc => waveType => {
  osc.type = waveType
  return osc
}


//envelope :: [Function changeVolume, Number noOfSteps] -> listeners -> Function
const envelope = (volumeChanges) => listeners => () => {
  volumeChanges.forEach()
}

function repeatFor(func,interval,timeout){
  return ()=>{
    const intervalID = setInterval(func,interval)
    return new Promise((resolve,reject)=>{
      setTimeout(pipe(
          clearInterval.bind(undefined,intervalID)
        , resolve
      ), timeout)
    })
  }
}

