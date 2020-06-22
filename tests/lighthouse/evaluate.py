import sys
import json

exit_code = 0

TARGETS = {}
TARGETS['performance'] = .9
TARGETS['seo'] = .9
TARGETS['accessibility'] = .9
TARGETS['best-practices'] = .9

with open('tests/lighthouse/reports/report.json') as f:
  report = json.load(f)

for key in TARGETS:
   if report['categories'][key]['score'] < TARGETS[key]:
      print('Failed: The {} score of {} was less than the target of {}'
         .format(key, report['categories'][key]['score'], TARGETS[key]))
      exit_code = 1
   else:
      print('Passed: The {} score of {} was good enough :-)'
         .format(key, report['categories'][key]['score']))

sys.exit(exit_code)
