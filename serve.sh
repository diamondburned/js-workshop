#!/bin/sh
python3 -m http.server 5150 &
(which xdg-open && xdg-open http://localhost:5150) &> /dev/null &
(which open && open http://localhost:5150) &> /dev/null &
wait
