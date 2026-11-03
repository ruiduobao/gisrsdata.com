---
title: "Tsinghua FROM-GLC Year of Change to Impervious Surface"
date: 2026-11-03 12:00:00
permalink: /pages/40b0b1e8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "built"
  - "development"
  - "impervious"
  - "population"
  - "tsinghua"
  - "urban"
---

# Tsinghua FROM-GLC Year of Change to Impervious Surface

## 数据集简介

This dataset contains annual change information of global impervious surface area from 1985 to
2018 at a 30m resolution. Change from pervious to impervious was determined using a combined
approach of supervised classification and temporal consistency checking. Impervious pixels are
defined as above 50% impervious. The year of the transition (from pervious to impervious) can
be identified from the pixel value, ranging from 34 (year: 1985) to 1 (year: 2018). For
example, the impervious surface in 1990 can be revealed as the pixel value greater than 29
(see the lookup table). This dataset is temporally consistent, following the conversion from
pervious (e.g., non-urban) to impervious (e.g., urban) monotonically. For more information
about the mapping approach and assessment, see
[Annual maps of global artificial impervious area (GAIA) between 1985 and 2018
(Gong et al. 2020)](https://doi.org/10.1016/j.rse.2019.111510).

## 基本信息

- 数据集编号（Earth Engine ID）：`Tsinghua/FROM-GLC/GAIA/v10`
- 数据类型：影像（Image）
- 提供方：Tsinghua University、Google Earth Engine
- 时间范围：1985-01-01 至 2018-12-31
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：built, development, impervious, population, tsinghua, urban

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| change_year_index | Year of the transition from from pervious to impervious. From 34 (year: 1985) to 1 (year: 2018) | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('Tsinghua/FROM-GLC/GAIA/v10');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Tsinghua_FROM-GLC_GAIA_v10
- 数据引用：Gong, P., Li, X., Wang, J., Bai, Y., Chen, B., Hu, T., ... & Zhou, Y. (2020).
Annual maps of global artificial impervious area (GAIA) between 1985 and 2018.
Remote Sensing of Environment, 236, 111510.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
