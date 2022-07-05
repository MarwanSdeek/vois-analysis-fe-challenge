
### Requirements

- [ ] init project
	- [ ] use React + Typescript + Chart.js + Redux
	- [ ] separate test files from source
	- [ ] scripts for:
		- [ ] testings
		- [ ] linting/prettier
		- [ ] starting the server
		- [ ] compiling TS
- [ ] Features
	- [ ] show loading screen while fetching `data.json`
	- [ ] filter data using 3 dropdowns: country, camp & school (school has select all option)
	- [ ] show filtered data as line chart with:
		- #lessons on y axis and months on x axis
		- on point click, navigate to new screen showing point data.
	- [ ] chart metadata (on right) shows: 
		- total number of lessons and each school number of lessons.
		- each school acts as toggle to show/hide school data on the chart.
	- [ ] save state of filter while navigating from chart page to point details page
- [ ] Extras
	- [ ] add support for dark mode
	- [ ] Multi-lingual Support
	- [ ] E2E testing