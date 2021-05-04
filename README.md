# Full Stack Data Analytics Dashboard (Frontend)

## Purpose
- Allow users to see how key user statistics for their website has changed over time

## Features
- [to-add] Authentication
- [done] Datetime picker to select a date range
- [done] Select picker with filters (referrer, country, city etc)
- [to-add] Interactive Charts
- [to-add] Interactive Tables
- [to-add] Interactive Maps

## Components
- [done] Header/Menu Section
- [done] Date and time range selector
- [done] Filters section with URL, Referrer, Device, Country, City options
- [to-add] Overall stats section with numbers, trend charts etc (both with and without referrer breakdown)
- [to-add] Summary table component
- [to-add] Aggregate treechart component
- [to-add] Heat map component
- [to-add] For individual URL pages, and engagement component with timespent, time breakdown, scroll breakdown etc

## Pages
- [to-add] Main page (serves referrer, geography, and device_type pages)
- [to-add] URL page

## Routes
- [to-add] `/`
  - Query terms include ref, device_type, country, city
- [to_add] `/url`
  - Query terms include URL, ref, device_type, country, city

## Dependencies
- `react`
- `antd` (http://github.com/ant-design/ant-design)
- `highcharts` and `highcharts-react` (https://github.com/highcharts/highcharts-react)
- Might use fancier tables in the future