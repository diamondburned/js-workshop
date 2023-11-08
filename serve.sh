#!/bin/sh
(
	which open     &> /dev/null && open     http://localhost:5150
	which xdg-open &> /dev/null && xdg-open http://localhost:5150
) &
python3 -m http.server 5150
