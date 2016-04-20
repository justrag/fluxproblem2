//import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
//
//import './main.html';

State.modify('Variables', (state = {a:0,b:0}) => {
let actionType=Action.type();
if (actionType=="INCR_A") {
state.a+=1;
} else if (actionType=="INCR_B") {
state.b+=1;
}
console.debug("State should be now: %o",state);
return state;
});

