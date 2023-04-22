const {Board, Motor} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const motor = new Motor({
    pins: {
      pwm: 8,
      dir: 9
    }
  });

  board.repl.inject({
    motor
  });

  motor.start(500)


});