export default class TimerConstruct {
  constructor({ targetTime, onTick }) {
    this.targetTime = targetTime;
    this.onTick = onTick;
  }
  start() {
    setInterval(() => {
      const curentTime = Date.now();
      const time = this.targetTime - curentTime;
      const timeCount = this.getTimeComponennt(time);
      this.onTick(timeCount);
    }, 1000);
  }
  getTimeComponennt(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(val) {
    return String(val).padStart(2, '0');
  }
}