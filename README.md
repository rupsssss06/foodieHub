#Parcel:
HMR
build dev
local server
caching
file watching algorthim
image optimization
minification
bundling
compressing
consistent hashing
code splitting
differential bundling-support older browsers
Diagnostic
error handling
https hosting
tree shaking-remove unused code
diff dev and prod bundles

#food App:/_
Header-logo, nav items
Body-search, restro container-restro card-img, name of res,star rating, cuisine , delivery time
Footer-copyright, links, address, contact
_/

Two types of import/export:
-Default Export/Import:
export default Component;
import Component from "path"

-Named Export/Import:
export const Component;
import {Component} from "path";

---react hooks:
Normal JS utility functions
useState(); -used to generate state variable
useEffect();

--Whenever a state variable changes React rerenders the UI

why react is fast?
-coz it do dom manipulation efficiently and that is done using virtual dom;
-react can find difference between virtual dom...this is called diff algorithm
virtual dom is representation od actual dom;

#Types of project Architecture:
-Monolith Architecture
-Microservices Architecture
