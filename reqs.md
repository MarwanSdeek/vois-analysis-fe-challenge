
### Requirements

- [X] init project
	- [X] use React + Typescript + Chart.js + Redux
	- [X] separate test files from source
	- [X] scripts for:
		- [x] testings
		- [X] linting/prettier
		- [X] starting the server
		- [X] compiling TS and build
- [ ] Features
	- [X] show loading screen while fetching `data.json`
	- [X] filter data using 3 dropdowns: country, camp & school (school has select all option)
	- [X] show filtered data as line chart with:
		- [X] #lessons on y axis and months on x axis
		- [X] on point click, navigate to new screen showing point data.
	- [ ] chart legend (on right) shows: 
		- [X] total number of lessons and each school number of lessons.
		- [] each school acts as toggle to show/hide school data on the chart.
	- [X] save state of filter while navigating from chart page to point details page
- [ ] Extras
	- [ ] add support for dark mode
	- [ ] Multi-lingual Support
	- [X] E2E testing
- [ ] Extras Extras
	- [X] mobile responsive
	- [X] vite
	- [ ]