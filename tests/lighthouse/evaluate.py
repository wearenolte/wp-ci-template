import sys
import json

exit_code = 0

TARGETS = {}
TARGETS['performance'] = .7
TARGETS['seo'] = .8
TARGETS['accessibility'] = .8
TARGETS['best-practices'] = .8

with open('tests/lighthouse/reports/report.json') as f:
  report = json.load(f)

for key in TARGETS:
   if report['categories'][key]['score'] < TARGETS[key]:
      print('Failed: The {} score of {} was less than the target of {}'
         .format(key, report['categories'][key]['score'], TARGETS[key]))
      exit_code = 1

sys.exit(exit_code)
