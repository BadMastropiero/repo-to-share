function Log(options: {level: 'error' | 'warning' | 'info'}, ...data: any) {
  switch (options.level) {
    case 'error':
      console.error(...data);
      break;
    case 'warning':
      console.warn(...data);
      break;
    case 'info':
      console.log(...data);
      break;
    default:
      break;
  }
}

function Error(...data: any) {
  Log({level: 'error'}, ...data);
}

function Warn(...data: any) {
  Log({level: 'warning'}, ...data);
}

function Info(...data: any) {
  Log({level: 'info'}, ...data);
}

const Logger = {
  Log,
  Error,
  Warn,
  Info,
};

export default Logger;
