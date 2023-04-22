// exports
const {
  io,
  server,
  app,
  express,
  cors,
  morgan,
} = require('./app')



// global var
app.set('port', process.env.PORT || 4000)


//mider
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

//router
app.use(require('./router/route'))




//start TODO: borra el archibo x pa ra no tener errores 
require('./main')
//require('./x')


const port = app.get('port');
server.listen(port, () => {
  console.log('init in' + ' ' + port);
});