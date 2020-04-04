class Dep {
  constructor(){
    this.subscribers = []
  }

  depend(){
    if(target && !this.subscribers.includes(target)){
      this.subscribers.push(target);
    }
  }

  notify(){
    this.subscribers.forEach(sub => sub())
  }
}

let data = { human: 5, cash: 500 };
let target, happiness, memories;

const deps = new Map();

Object.keys(data).forEach(key => {
  deps.set(key, new Dep());
})

const data_without_proxy = data;

data = new Proxy(data_without_proxy, {
  get(obj, key){
    deps.get(key).depend();
    return obj[key];
  },
  set(obj, key, newVal){
    obj[key] = newVal;
    deps.get(key).notify();
    return true;
  }
})

function watcher(newFunc){
  target = newFunc;
  target();
  target = null;
}

watcher(() => {
  happiness = data.human * data.cash;
})

watcher(() => {
  memories = data.human * data.cash * 0.777;
})