#!/usr/bin/env sh

worker=0

# SIGTERM-handler
term_handler() {
  if [ $worker -ne 0 ]; then
    kill -SIGTERM "$worker"
    wait "$worker"
  fi
  exit 143; # 128 + 15 -- SIGTERM
}

trap term_handler TERM

node dist/main.js 
worker="$!"

wait $worker
