---
title: "NOAA CDR WHOI：海表温度，版本 2"
date: 2026-11-03 12:00:00
permalink: /pages/4fef452a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmospheric"
  - "cdr"
  - "hourly"
  - "noaa"
  - "oceans"
  - "oisst"
  - "osb"
  - "sst"
  - "whoi"
---

# NOAA CDR WHOI：海表温度，版本 2

英文原名：NOAA CDR WHOI: Sea Surface Temperature, Version 2

## 这是什么数据

海表温度 - WHOI 数据集是 NOAA 海洋表面束（OSB）的一部分，提供无冰海洋上海表温度的高质量气候数据记录（CDR）。

SST 值通过将昼夜变率建模与 AVHRR 海表温度观测结合找到。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：1988 年至 2021 年；分辨率：27,830 米。
- 时间范围：1988-01-01 至 2021-08-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sea_surface_temperature | 最优插值海表温度（OISST），带昼夜增温校正。 | 27830 |  |
| fill_missing_qc | 质量控制标志。 | 27830 |  |

## 能拿来做什么

- 海表温度监测
- 海洋气候研究
- 渔业与海洋生态应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/SST_WHOI/V2');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/SST_WHOI/V2`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_SST_WHOI_V2

## 许可与引用

- 许可：proprietary
- 关键词：atmospheric, cdr, hourly, noaa, oceans, oisst, osb, sst, whoi
- 数据引用：Clayson, Carol Anne, Brown, Jeremiah, and NOAA CDR Program (2016). NOAA
Climate Data Record Ocean Surface Bundle (OSB) Climate Data Record (CDR) of
Sea Surface Temperature - WHOI, Version 2. [indicate subset used]. NOAA
National Climatic Data Center. [doi:10.7289/V5FB510W](https://doi.org/10.7289/V5FB510W).

- DOI：10.7289/V5FB510W

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA AVHRR 探路者版本 5.3 拼接全球 4 千米海表温度](/pages/18f0f810/)
- [NOAA CDR：海洋热通量，版本 2](/pages/ab47b752/)
- [NOAA CDR：海洋近地表大气特性，版本 2](/pages/11c640c9/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
