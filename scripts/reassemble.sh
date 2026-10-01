#!/usr/bin/env bash
set -euo pipefail
cat public/.chunks/defi-kinesique.part-*.html > public/defi-kinesique.html
echo "reassembled $(wc -c < public/defi-kinesique.html) bytes"
