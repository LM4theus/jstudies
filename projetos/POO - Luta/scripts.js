/* eslint-disable no-undef */
let log = new Log(document.querySelector('.log'))
let char = new Knight("Van Helsing");
let mon = new BigMonster();

const stage = new Stage(
  char, mon,
  document.querySelector('#char'),
  document.querySelector('#monster'),
  log
);


stage.start();