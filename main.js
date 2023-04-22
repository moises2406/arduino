//export
const bot = require('./app');
const { Board, Led, Servo, Relay, Stepper } = bot.JF;
const io = bot.io;
const board = new Board();

board.on("ready", () => {

    const stepper = new Stepper({
        type: Stepper.TYPE.DRIVER,
        stepsPerRev: 200,
        pins: {
            step: 12,
            dir: 11
        }
    })

    

    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('keypress', (msg) => {
            const bot = new Bot();
            console.log(msg);
            switch (msg) {
                case 'w':
                    bot.arranque();
                    break;
                case 's':
                    bot.rebersa();
                    break;

                default:
                    console.log(msg);
            }
        });
        socket.on('keyup', (msg) => {
            const bot = new Bot();
            switch (msg) {
                case 'w':
                    
                    break;
                case 's':
                    
                    break;


                default:
                    console.log(msg);
            }
        });
    });



    class Bot {
        constructor() {

        }
        
        arranque() {
            stepper.rpm(180).ccw().accel(1600).decel(1600).step(2000,()=>{
                console.log('cw');
            })
            
        }

        rebersa() {
            stepper.rpm(180).cw().accel(1600).decel(1600).step(2000,()=>{
                console.log('cw');
            })
        }

        offArranqueYrebersa() {
        }




    }
})






module.exports = board;


