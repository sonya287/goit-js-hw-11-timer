import './css/*.css';
import pageRender from './js/page-render';
import CountdownTimer from './js/TimerConstruct';

document.body.insertAdjacentHTML('afterbegin', pageRender());

const refs = {
  pageTimer: document.body,
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const updateTimerFace = function ({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
};

const timer = new CountdownTimer({
  targetTime: new Date('Aug 19, 2021'),
  onTick: updateTimerFace,
});

timer.start();
