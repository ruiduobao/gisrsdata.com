---
title: "Accessibility to Healthcare 2019 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/5a6f325a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "accessibility"
  - "jrc"
  - "map"
  - "oxford"
  - "population"
  - "twente"
---

# Accessibility to Healthcare 2019 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This global accessibility map enumerates land-based travel time (in
minutes) to the nearest hospital or clinic for all areas between 85
degrees north and 60 degrees south for a nominal year 2019. It also
includes "walking-only" travel time, using non-motorized means of
transportation only.

Major data collection efforts underway by OpenStreetMap, Google Maps, and
academic researchers have been harnessed to compile the most complete
collection of healthcare facility locations to date. This map was
produced through a collaboration between MAP (University of Oxford),
Telethon Kids Institute (Perth, Australia), Google, and the University
of Twente, Netherlands.

This project builds on previous work published by Weiss et al 2018
([doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)).
Weiss et al (2018) utilised datasets for roads
(comprising the first ever global-scale use of Open Street Map and Google
roads datasets), railways, rivers, lakes, oceans, topographic conditions
(slope and elevation), landcover types, and national borders. These
datasets were each allocated a speed or speeds of travel in terms of time
to cross each pixel of that type. The datasets were then combined to
produce a "friction surface": a map where every pixel is allocated a
nominal overall speed of travel based on the types occurring within that
pixel. For the current project, an updated friction surface was created to
incorporate recent improvements within OSM roads data.

Least-cost-path algorithms (run in Google Earth Engine and, for
high-latitude areas, in R) were used in conjunction with this friction
surface to calculate the time of travel from all locations to the nearest
(in time) healthcare facility. The healthcare facilities dataset utilized
location data from two of the largest global databases: (1) OSM data that
was collated and made available for download at
[www.healthsites.io](https://www.healthsites.io/); and (2) data
extracted from Google Maps. The global datasets were augmented with
continental-scale facility locations that were recently published for
Africa and Australia. To facilitate comparisons between data sources, only
facilities defined as hospitals and clinics were used. Multiple points
found within the same pixel were merged to match the resolution of the
analysis as defined by the selected gridded representation of the Earth's
surface. Each pixel in the resultant accessibility map thus represents the
modelled shortest time (in minutes) from that location to a hospital or
clinic.

Source dataset credits are as described in the accompanying paper.

## 基本信息

- 数据集编号（Earth Engine ID）：`Oxford/MAP/accessibility_to_healthcare_2019`
- 数据类型：影像（Image）
- 提供方：Malaria Atlas Project、Google Earth Engine
- 时间范围：2019-01-01 至 2020-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-4.0
- 关键词：accessibility, jrc, map, oxford, population, twente

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| accessibility | Travel time to the nearest hospital or clinic. | 927.67 |  |
| accessibility_walking_only | Travel time to the nearest hospital or clinic using non-motorized transport. | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('Oxford/MAP/accessibility_to_healthcare_2019');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_accessibility_to_healthcare_2019
- 数据引用：D.J. Weiss, A. Nelson, C.A. Vargas-Ruiz, K. Gligori&cacute;, S. Bavadekar,
E. Gabrilovich, A. Bertozzi-Villa, J. Rozier, H.S. Gibson, T. Shekel,
C. Kamath, A. Lieber, K. Schulman, Y. Shao, V. Qarkaxhija, A.K. Nandi,
S.H. Keddie, S. Rumisha, E. Cameron, K.E. Battle, S. Bhatt, P.W. Gething.
Global maps of travel time to healthcare facilities. Nature Medicine (2020).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
