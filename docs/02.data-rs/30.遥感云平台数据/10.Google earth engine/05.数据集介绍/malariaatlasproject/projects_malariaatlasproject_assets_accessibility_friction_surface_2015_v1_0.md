---
title: "Malaria Atlas Project Global Friction Surface 2015"
date: 2026-11-03 12:00:00
permalink: /pages/71a698eb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "accessibility"
  - "map"
  - "population"
---

# Malaria Atlas Project Global Friction Surface 2015

## 数据集简介

Note: this surface is replaced by "Malaria Atlas Project Global 
Friction Surface 2019".

This global friction surface enumerates land-based travel
speed for all land pixels between 85 degrees north and 60 degrees
south for a nominal year 2015.

This map was produced through
a collaboration between the University of Oxford Malaria Atlas
Project (MAP), Google, the European Union Joint Research Centre
(JRC), and the University of Twente, Netherlands. The underlying
datasets used to produce the map include roads (comprising the
first ever global-scale use of Open Street Map and Google roads
datasets), railways, rivers, lakes, oceans, topographic conditions
(slope and elevation), landcover types, and national borders.

These datasets were each allocated a speed or speeds of travel in terms
of time to cross each pixel of that type. The datasets were then
combined to produce this "friction surface": a map
where every pixel is allocated a nominal overall speed of travel
based on the types occurring within that pixel, with the fastest
travel mode intersecting the pixel being used to determine the
speed of travel in that pixel (with some exceptions such as national
boundaries, which have the effect of imposing a travel time penalty).

This map represents the travel speed from this allocation process, expressed
in units of minutes required to travel one meter. It forms the
underlying dataset behind the global accessibility map described
in the referenced paper.

Source dataset credits are as described in the accompanying paper.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/malariaatlasproject/assets/accessibility/friction_surface/2015_v1_0`
- 数据类型：影像（Image）
- 提供方：Malaria Atlas Project、Google Earth Engine
- 时间范围：2015-01-01 至 2016-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-4.0
- 关键词：accessibility, map, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| friction | Land-based travel speed. | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('projects/malariaatlasproject/assets/accessibility/friction_surface/2015_v1_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_malariaatlasproject_assets_accessibility_friction_surface_2015_v1_0
- 数据引用：D.J. Weiss, A. Nelson, H.S. Gibson, W. Temperley, S. Peedell, A.
Lieber, M. Hancher, E. Poyart, S. Belchior, N. Fullman, B. Mappin,
U. Dalrymple, J. Rozier, T.C.D. Lucas, R.E. Howes, L.S. Tusting,
S.Y. Kang, E. Cameron, D. Bisanzio, K.E. Battle, S. Bhatt, and
P.W. Gething. A global map of travel time to cities to assess inequalities
in accessibility in 2015. Nature (2018).
[doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
