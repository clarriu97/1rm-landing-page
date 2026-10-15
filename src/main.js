import './styles/main.css'

const root = document.documentElement
const motion = root.classList.contains('motion')

const header = document.querySelector('.site-header')
const updateHeader = () => header.classList.toggle('is-solid', window.scrollY > 24)
updateHeader()
window.addEventListener('scroll', updateHeader, { passive: true })

function countUp(el) {
  const from = Number(el.dataset.countFrom)
  const to = Number(el.dataset.countTo)
  const duration = 1400
  let start
  const frame = (now) => {
    start ??= now
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = (from + (to - from) * eased).toFixed(1)
    if (t < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

function showStep(index) {
  document.querySelectorAll('.story-step').forEach((step) => {
    step.classList.toggle('is-active', step.dataset.step === index)
  })
  document.querySelectorAll('.stage-screen').forEach((screen) => {
    screen.classList.toggle('is-active', screen.dataset.screen === index)
  })
  document.querySelectorAll('.stage-ticks li').forEach((tick) => {
    tick.classList.toggle('is-active', tick.dataset.tick === index)
  })
}

if (motion) {
  const counters = document.querySelectorAll('[data-count-to]')
  counters.forEach((el) => (el.textContent = Number(el.dataset.countFrom).toFixed(1)))
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        counterObserver.unobserve(entry.target)
        setTimeout(() => countUp(entry.target), 700)
      })
    },
    { threshold: 0.6 },
  )
  counters.forEach((el) => counterObserver.observe(el))

  const stepObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) showStep(entry.target.dataset.step)
      })
    },
    { rootMargin: '-50% 0px -50% 0px' },
  )
  document.querySelectorAll('.story-step').forEach((step) => stepObserver.observe(step))
  showStep('0')

  if (!CSS.supports('animation-timeline: view()')) {
    root.classList.add('io-reveal')
    const tapeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          tapeObserver.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    document.querySelectorAll('.hazard-slide').forEach((tape) => tapeObserver.observe(tape))
  }
}
