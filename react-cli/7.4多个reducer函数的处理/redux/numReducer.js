export default function(state=1,action){
  const {type} = action;
  switch (type) {
      case 'add_num':
          return state+1;
      default:
          return state;
  }
}