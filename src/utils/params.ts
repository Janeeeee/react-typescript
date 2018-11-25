
class Params {
  constructor () {}

  public fmtPost (data: any) {
    const obj = {};
    for (const key in data) {
      if (data[key] !== undefined && data[key] !== '' && data[key] !== null) {
        obj[key] = data[key]
      }
    }
    return obj;
  }

  public fmtGet (data: any) {
    const arr: any = [];
    if (data !== null && typeof data === 'object') {
      for (const key in data) {
        if (data[key] !== undefined && data[key] !== '' && data[key] !== null) {
          const str = encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
          arr.push(str);
        }
      }
    }
    arr.push('_=' + Date.now());
    return arr.join('&');
  }
}

export const serialize = new Params