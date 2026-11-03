---
title: "Malaria Atlas Project Global Friction Surface 2019 (Walking Only)"
date: 2026-11-03 12:00:00
permalink: /pages/b8f48e30/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "accessibility"
  - "map"
  - "population"
---

# Malaria Atlas Project Global Friction Surface 2019 (Walking Only)

## 数据集简介

This global friction surface enumerates land-based travel speed for all 
land pixels between 85 degrees north and 60 degrees south for a 
nominal year 2019. 
This surface is based on "walking-only" travel speed, using non-motorized 
means of transportation only.
This map was produced through a collaboration between 
MAP (University of Oxford), Telethon Kids Institute (Perth, Australia), 
Google, and the University of Twente, Netherlands.

This project builds on previous work published by Weiss et al 2018 
([doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)). 
Weiss et al (2018) utilising datasets for roads (comprising the first 
ever global-scale use of Open Street Map and Google roads datasets), 
railways, rivers, lakes, oceans, topographic conditions 
(slope and elevation), landcover types, and national borders. 
These datasets were each allocated a speed or speeds of travel in terms 
of time to cross each pixel of that type. 
The datasets were then combined to produce a "friction surface"; 
a map where every pixel is allocated a nominal overall speed of 
travel based on the types occurring within that pixel. 

For the current project, an updated friction surface was created to 
incorporate recent improvements within OSM roads data.
Differences between this friction surface and the 2015 version 
(Weiss et al. 2018) are not necessarily indicative of changes in 
infrastructure (e.g., new roads being built). 
Such discrepancies are far more likely to be associated with improved 
data quality, in particular updates made to OSM road coverage. 
As a result, comparisons between the friction surfaces and resulting 
travel time maps should be done cautiously and generally not 
interpreted as representing changes in access over time.

This map represents the travel speed from this allocation process, 
expressed in units of minutes required to travel one meter. 
It forms the underlying dataset behind the global healthcare accessibility 
map described in the referenced paper.

Source dataset credits are as described in the accompanying paper.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/malariaatlasproject/assets/accessibility/friction_surface/2019_v5_1_walking_only`
- 数据类型：影像（Image）
- 提供方：Malaria Atlas Project、Google Earth Engine
- 时间范围：2019-01-01 至 2020-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-4.0
- 关键词：accessibility, map, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| friction | Land-based travel speed using non-motorized transport. | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('projects/malariaatlasproject/assets/accessibility/friction_surface/2019_v5_1_walking_only');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_malariaatlasproject_assets_accessibility_friction_surface_2019_v5_1_walking_only
- 数据引用：D.J. Weiss, A. Nelson, C.A. Vargas-Ruiz, K. Gligori&cacute;, S. Bavadekar,
E. Gabrilovich, A. Bertozzi-Villa, J. Rozier, H.S. Gibson, T. Shekel,
C. Kamath, A. Lieber, K. Schulman, Y. Shao, V. Qarkaxhija, A.K. Nandi,
S.H. Keddie, S. Rumisha, E. Cameron, K.E. Battle, S. Bhatt, P.W. Gething.
Global maps of travel time to healthcare facilities. Nature Medicine (2020).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
