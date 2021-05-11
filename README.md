# Full Stack Data Analytics Dashboard (Frontend)

## Purpose
- Allow users to see how key user statistics for their website has changed over time

## Features
- [to-add] Authentication
- [done] Datetime picker to select a date range
- [done] Select picker with filters (referrer, country, city etc)
- [done] Interactive Charts
- [done] Interactive Tables
- [deferred] Interactive Maps

## Pages and Routes
- [done] `/` Main page (serves referrer, geography, and device_type pages)
- [done] `/url` URL page

## Components
- [done] Header/Menu Section
- [done] Date and time range selector
- [done] Filters section with URL, Referrer, Device, Country, City options
- [done] Overall stats section with numbers, trend charts etc (both with and without referrer breakdown)
- [done] Summary table component
- [done] Aggregate treechart component
- [deferred] Heat map component (For now, just using a table. In future, can use https://github.com/zcreativelabs/react-simple-maps)
- [done] For individual URL pages, and engagement component with timespent, time breakdown, scroll breakdown etc

## Hooks and Context
- [done] Value tracking for timerange, URL, referrer, device_type, country, city
- [done] Making URL requests and updating data

## Local Storage
- [deferred] Use local storage to preserve state even if user opens links in new tab

## Dependencies
- `react`
- `antd` (http://github.com/ant-design/ant-design)
- `highcharts` and `highcharts-react` (https://github.com/highcharts/highcharts-react)
- May replace highcharts with D3 or another alternative in the future