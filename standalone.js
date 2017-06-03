
import {default as obs} from './changedetection.js';
import {default as install} from './templateengine.js';
import {default as bundle} from './bundle.js';
import {default as on} from './on.js';
import {default as map} from './arrayhandling.js';


var ts = obs;
window.ts = ts;
ts.obs = obs;
ts.install = install;
ts.bundle = bundle;
ts.on = on;
ts.map = map;