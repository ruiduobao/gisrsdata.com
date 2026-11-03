---
title: "LandScan High Definition Data for Ukraine, January 2022"
date: 2026-11-03 12:00:00
permalink: /pages/c7a57ce4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landscan"
  - "population"
  - "ukraine"
---

# LandScan High Definition Data for Ukraine, January 2022

## 数据集简介

[LandScan High Definition (HD)](https://landscan.ornl.gov)
provides gridded population estimates at 3
arc-second (~100m) resolution. Values for each LandScan HD cell represent an
ambient (i.e. 24 hour average) population count estimate.  In this way, the
data capture the full potential activity space of people throughout the
course of the day and night rather than just a residential location. The
LandScan HD model incorporates current land use and infrastructure data from
a variety of sources, applies facility occupancy estimates from ORNL's
Population Density Tables (PDT) project, and leverages novel image
processing algorithms developed at ORNL to rapidly map building
structures and neighborhood areas using high-performance computing
environments.

The source for subnational population counts used in the development of this
data comes from
[State Statistics Service of Ukraine](https://ukrstat.org/en/operativ/operativ2021/ds/kn/arh_kn2021_e.html).

These subnational estimates were adjusted to the country total population
provided by the
[CIA World Factbook](https://www.cia.gov/the-world-factbook/countries/ukraine/#people-and-society).

## 基本信息

- 数据集编号（Earth Engine ID）：`DOE/ORNL/LandScan_HD/Ukraine_202201`
- 数据类型：影像（Image）
- 提供方：Oak Ridge National Laboratory、Google Earth Engine
- 时间范围：2022-01-01 至 2022-02-01
- 空间分辨率：100 米
- 许可：CC-BY-4.0
- 关键词：landscan, population, ukraine

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population | 24 hour average population count estimate | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('DOE/ORNL/LandScan_HD/Ukraine_202201');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/DOE_ORNL_LandScan_HD_Ukraine_202201

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
